
import os

# Database configuration
DATABASE_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'aimeta.db')
SQLITE_URI = f'sqlite:///{DATABASE_PATH}'

# Application configuration
SECRET_KEY = os.environ.get('SECRET_KEY', 'dev-key-change-in-production')
DEBUG = False
HOST = '0.0.0.0'
PORT = 5000

# Security configuration
SESSION_COOKIE_SECURE = True
PERMANENT_SESSION_LIFETIME = 1800  # 30 minutes
MAX_LOGIN_ATTEMPTS = 3
LOCKOUT_TIME = 300  # 5 minutes

# Face recognition configuration
FACE_RECOGNITION_THRESHOLD = 0.6
FACE_DETECTION_MODEL = 'hog'  # or 'cnn' for GPU support
ALLOWED_IMAGE_EXTENSIONS = {'png', 'jpg', 'jpeg'}
MAX_IMAGE_SIZE = 10 * 1024 * 1024  # 10MB

# Payment configuration
TRANSACTION_TIMEOUT = 60  # seconds
MINIMUM_TRANSACTION_AMOUNT = 0.01
MAXIMUM_TRANSACTION_AMOUNT = 10000.00

# Logging configuration
LOG_FORMAT = '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
LOG_LEVEL = 'INFO'
LOG_FILE = 'aimeta.log'
