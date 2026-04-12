import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Components
import Home from './components/Home';
import Metaverse from './components/Metaverse';
import Agents from './components/Agents';

function App() {
  const [backendStatus, setBackendStatus] = useState('checking...');

  useEffect(() => {
    // Check backend connection
    fetch('http://localhost:3002/health')
      .then(res => res.json())
      .then(data => setBackendStatus('connected'))
      .catch(err => setBackendStatus('disconnected'));
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navbar">
            <div className="nav-brand">
              <h1>🌐 AI Metaverse</h1>
              <span className={`status ${backendStatus}`}>
                Backend: {backendStatus}
              </span>
            </div>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/metaverse">Metaverse</Link></li>
              <li><Link to="/agents">AI Agents</Link></li>
            </ul>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/metaverse" element={<Metaverse />} />
            <Route path="/agents" element={<Agents />} />
          </Routes>
        </main>

        <footer className="App-footer">
          <p>&copy; 2024 Kre8tive Konceptz - AI Metaverse Project</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
