# 🚀 AI Metaverse Deployment Guide

## Quick Deployment Steps

### 1. Backend Deployment
```bash
cd AIMetaverseBackend
npm install
npm start
# Backend runs on http://localhost:3001
```

### 2. Frontend Deployment  
```bash
cd AIMetaverseFrontend
npm install
npm start
# Frontend runs on http://localhost:3000
```

### 3. AI Agents Deployment
```bash
cd AIMetaverseAgents
pip install -r requirements.txt
python main.py
# Agents API runs on http://localhost:8000
```

## 🔧 Development Mode
For development with auto-reload:
- Backend: `npm run dev`
- Frontend: `npm start` 
- Agents: `python main.py`

## 🌐 Production Deployment
1. Build frontend: `npm run build`
2. Use PM2 for backend: `pm2 start src/index.js`
3. Use gunicorn for agents: `gunicorn main:app`

## 📊 Health Checks
- Backend: `curl http://localhost:3001/health`
- Agents: `curl http://localhost:8000/health`
- Frontend: Open http://localhost:3000

## 🐳 Docker Deployment (Future)
```bash
docker-compose up -d
```

## 🔍 Troubleshooting
- Check logs in each component directory
- Ensure all ports (3000, 3001, 8000) are available
- Verify Node.js and Python versions
