import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to the AI Metaverse</h1>
        <p className="hero-subtitle">
          The future of human-AI interaction in a virtual world
        </p>
        <div className="hero-description">
          <p>
            Experience a revolutionary virtual environment where artificial intelligence 
            meets immersive technology. Interact with AI-powered entities, explore 
            virtual worlds, and collaborate in ways never before possible.
          </p>
        </div>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <h3>🤖 AI-Powered Interactions</h3>
          <p>
            Engage with intelligent AI agents that can understand, learn, 
            and respond naturally to your needs.
          </p>
        </div>
        
        <div className="feature-card">
          <h3>🌍 Immersive Worlds</h3>
          <p>
            Explore realistic virtual environments designed for collaboration, 
            learning, and entertainment.
          </p>
        </div>
        
        <div className="feature-card">
          <h3>👥 Social Collaboration</h3>
          <p>
            Connect with others regardless of physical location in shared 
            virtual spaces.
          </p>
        </div>
      </div>

      <div className="cta-section">
        <h2>Ready to Enter the Metaverse?</h2>
        <p>Join the future of digital interaction today.</p>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
};

export default Home;
