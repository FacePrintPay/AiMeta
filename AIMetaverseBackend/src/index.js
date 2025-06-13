const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to AI Metaverse Backend API',
    version: '1.0.0',
    endpoints: {
      users: '/api/users',
      worlds: '/api/worlds',
      agents: '/api/agents'
    }
  });
});

// API Routes
app.get('/api/users', (req, res) => {
  res.json({ message: 'User management endpoint - Coming soon!' });
});

app.get('/api/worlds', (req, res) => {
  res.json({ message: 'World creation endpoint - Coming soon!' });
});

app.get('/api/agents', (req, res) => {
  res.json({ message: 'AI interaction endpoint - Coming soon!' });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`AI Metaverse Backend running on port ${PORT}`);
});

module.exports = app;
