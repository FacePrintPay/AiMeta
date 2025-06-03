
import sqlite3
import os
from config import DATABASE_PATH
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

SCHEMA = [
    '''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        face_encoding BLOB,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        last_login TIMESTAMP,
        login_attempts INTEGER DEFAULT 0,
        locked_until TIMESTAMP,
        is_active BOOLEAN DEFAULT 1
    )
    ''',
    '''
    CREATE TABLE IF NOT EXISTS transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        amount DECIMAL(10,2) NOT NULL,
        status TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        completed_at TIMESTAMP,
        description TEXT,
        FOREIGN KEY (user_id) REFERENCES users (id)
    )
    ''',
    '''
    CREATE TABLE IF NOT EXISTS login_history (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        login_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        success BOOLEAN NOT NULL,
        ip_address TEXT,
        user_agent TEXT,
        FOREIGN KEY (user_id) REFERENCES users (id)
    )
    '''
]

def init_db():
    try:
        # Ensure the directory exists
        os.makedirs(os.path.dirname(DATABASE_PATH), exist_ok=True)
        
        # Connect to database
        conn = sqlite3.connect(DATABASE_PATH)
        cursor = conn.cursor()
        
        # Create tables
        for table_schema in SCHEMA:
            cursor.execute(table_schema)
        
        # Create indexes for better query performance
        cursor.execute('CREATE INDEX IF NOT EXISTS idx_users_username ON users(username)')
        cursor.execute('CREATE INDEX IF NOT EXISTS idx_transactions_user_id ON transactions(user_id)')
        cursor.execute('CREATE INDEX IF NOT EXISTS idx_login_history_user_id ON login_history(user_id)')
        
        conn.commit()
        logger.info(f"Database initialized successfully at {DATABASE_PATH}")
        
    except sqlite3.Error as e:
        logger.error(f"Database initialization failed: {str(e)}")
        raise
    finally:
        conn.close()

if __name__ == '__main__':
    init_db()
