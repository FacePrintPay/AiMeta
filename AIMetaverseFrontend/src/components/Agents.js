import React, { useState, useEffect } from 'react';

const Agents = () => {
  const [agents, setAgents] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    // Mock AI agents data
    setAgents([
      {
        id: 1,
        name: 'Assistant Alpha',
        type: 'General Assistant',
        status: 'online',
        description: 'A helpful AI assistant for general tasks and questions.',
        capabilities: ['Conversation', 'Information', 'Task Management']
      },
      {
        id: 2,
        name: 'Creative Beta',
        type: 'Creative Assistant',
        status: 'online',
        description: 'Specialized in creative tasks, writing, and artistic endeavors.',
        capabilities: ['Writing', 'Art Generation', 'Creative Ideas']
      },
      {
        id: 3,
        name: 'Tech Gamma',
        type: 'Technical Assistant',
        status: 'offline',
        description: 'Expert in programming, technology, and technical problem-solving.',
        capabilities: ['Programming', 'Debugging', 'Technical Support']
      }
    ]);
  }, []);

  const handleAgentSelect = (agent) => {
    setSelectedAgent(agent);
    setChatHistory([
      { sender: 'agent', message: `Hello! I'm ${agent.name}. How can I help you today?` }
    ]);
  };

  const handleSendMessage = () => {
    if (!chatMessage.trim() || !selectedAgent) return;

    const newMessage = { sender: 'user', message: chatMessage };
    setChatHistory(prev => [...prev, newMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        sender: 'agent',
        message: `Thanks for your message! As ${selectedAgent.name}, I'm processing your request: "${chatMessage}"`
      };
      setChatHistory(prev => [...prev, aiResponse]);
    }, 1000);

    setChatMessage('');
  };

  return (
    <div className="agents-container">
      <div className="agents-header">
        <h1>AI Agents Hub</h1>
        <p>Interact with specialized AI agents in the metaverse</p>
      </div>

      <div className="agents-layout">
        <div className="agents-list">
          <h3>Available Agents</h3>
          {agents.map(agent => (
            <div
              key={agent.id}
              className={`agent-card ${selectedAgent?.id === agent.id ? 'selected' : ''}`}
              onClick={() => handleAgentSelect(agent)}
            >
              <div className="agent-header">
                <h4>{agent.name}</h4>
                <span className={`status ${agent.status}`}>{agent.status}</span>
              </div>
              <p className="agent-type">{agent.type}</p>
              <p className="agent-description">{agent.description}</p>
              <div className="agent-capabilities">
                {agent.capabilities.map(cap => (
                  <span key={cap} className="capability-tag">{cap}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="chat-interface">
          {selectedAgent ? (
            <>
              <div className="chat-header">
                <h3>Chat with {selectedAgent.name}</h3>
              </div>
              <div className="chat-messages">
                {chatHistory.map((msg, index) => (
                  <div key={index} className={`message ${msg.sender}`}>
                    <strong>{msg.sender === 'user' ? 'You' : selectedAgent.name}:</strong>
                    <p>{msg.message}</p>
                  </div>
                ))}
              </div>
              <div className="chat-input">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Type your message..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button onClick={handleSendMessage}>Send</button>
              </div>
            </>
          ) : (
            <div className="no-agent-selected">
              <h3>Select an AI Agent</h3>
              <p>Choose an agent from the list to start interacting</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Agents;
