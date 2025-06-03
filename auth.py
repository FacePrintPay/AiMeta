
from datetime import datetime, timedelta
import sqlite3
import bcrypt
import numpy as np
from functools import wraps
from flask import session, redirect, url_for, request
import logging
from config import (
    DATABASE_PATH, MAX_LOGIN_ATTEMPTS, 
    LOCKOUT_TIME, FACE_RECOGNITION_THRESHOLD
)

logger = logging.getLogger(__name__)

def get_db():
    conn = sqlite3.connect(DATABASE_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'user_id' not in session:
            return redirect(url_for('login'))
        return f(*args, **kwargs)
    return decorated_function

class Auth:
    @staticmethod
    def hash_password(password):
        return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    
    @staticmethod
    def check_password(password, password_hash):
        return bcrypt.checkpw(password.encode('utf-8'), password_hash)
    
    @staticmethod
    def register_user(username, password, face_image=None):
        try:
            with get_db() as db:
                cursor = db.cursor()
                
                # Check if username exists
                cursor.execute('SELECT 1 FROM users WHERE username = ?', (username,))
                if cursor.fetchone():
                    return False, "Username already exists"
                
                # Process face encoding if image provided
                face_encoding = None
                if face_image is not None:
                    face_encoding = np.array(face_image).tobytes()
                
                # Hash password and store user
                password_hash = Auth.hash_password(password)
                cursor.execute('''
                    INSERT INTO users (username, password_hash, face_encoding)
                    VALUES (?, ?, ?)
                ''', (username, password_hash, face_encoding))
                
                db.commit()
                return True, "User registered successfully"
                
        except Exception as e:
            logger.error(f"Registration error: {str(e)}")
            return False, "Registration failed"
    
    @staticmethod
    def verify_face(user_id, face_image):
        try:
            with get_db() as db:
                cursor = db.cursor()
                cursor.execute('SELECT face_encoding FROM users WHERE id = ?', (user_id,))
                result = cursor.fetchone()
                
                if not result or not result['face_encoding']:
                    return False, "No face encoding found"
                
                stored_encoding = np.frombuffer(result['face_encoding'])
                face_encoding = np.array(face_image)
                
                # Compare faces using numpy
                distance = np.linalg.norm(stored_encoding - face_encoding)
                if distance <= FACE_RECOGNITION_THRESHOLD:
                    return True, "Face verified successfully"
                return False, "Face verification failed"
                
        except Exception as e:
            logger.error(f"Face verification error: {str(e)}")
            return False, "Face verification failed"
    
    @staticmethod
    def login(username, password):
        try:
            with get_db() as db:
                cursor = db.cursor()
                cursor.execute('''
                    SELECT id, password_hash, login_attempts, locked_until 
                    FROM users WHERE username = ?
                ''', (username,))
                user = cursor.fetchone()
                
                if not user:
                    return False, "Invalid credentials"
                
                # Check if account is locked
                if user['locked_until'] and datetime.now() < datetime.fromisoformat(user['locked_until']):
                    return False, "Account is locked. Try again later"
                
                # Verify password
                if not Auth.check_password(password, user['password_hash']):
                    # Update login attempts
                    new_attempts = user['login_attempts'] + 1
                    locked_until = None
                    
                    if new_attempts >= MAX_LOGIN_ATTEMPTS:
                        locked_until = (datetime.now() + timedelta(seconds=LOCKOUT_TIME)).isoformat()
                        new_attempts = 0
                    
                    cursor.execute('''
                        UPDATE users 
                        SET login_attempts = ?, locked_until = ?
                        WHERE id = ?
                    ''', (new_attempts, locked_until, user['id']))
                    
                    db.commit()
                    return False, "Invalid credentials"
                
                # Reset login attempts and update last login
                cursor.execute('''
                    UPDATE users 
                    SET login_attempts = 0, 
                        locked_until = NULL,
                        last_login = CURRENT_TIMESTAMP
                    WHERE id = ?
                ''', (user['id'],))
                
                # Log successful login
                cursor.execute('''
                    INSERT INTO login_history (user_id, success, ip_address, user_agent)
                    VALUES (?, ?, ?, ?)
                ''', (user['id'], True, request.remote_addr, request.user_agent.string))
                
                db.commit()
                return True, user['id']
                
        except Exception as e:
            logger.error(f"Login error: {str(e)}")
            return False, "Login failed"
