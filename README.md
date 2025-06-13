# AiMeta - AI Metaverse Project

The AI Metaverse Project is an ambitious initiative to create a virtual world powered by artificial intelligence. This immersive environment enables users to interact with each other and with AI-powered entities in a realistic and engaging way. The project aims to revolutionize the way we interact with technology and with each other.

## 🌟 Project Overview

The AI Metaverse project consists of three main components:

### 🔧 AIMetaverseBackend
The backend infrastructure provides APIs for user management, world creation, and AI interaction.
- **Technology**: Node.js, Express.js
- **Port**: 3001
- **Features**: RESTful APIs, user authentication, world management

### 🎨 AIMetaverseFrontend  
The frontend application provides a user-friendly interface for exploring and interacting with the virtual world.
- **Technology**: React.js, Three.js, React Three Fiber
- **Port**: 3000
- **Features**: 3D virtual environments, real-time interactions, responsive design

### 🤖 AIMetaverseAgents
A collection of AI agents that populate the AI Metaverse, capable of engaging in conversation, providing information, and performing tasks.
- **Technology**: Python, FastAPI
- **Port**: 8000
- **Features**: Multiple AI agent types, natural language processing, real-time chat

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- Python 3.8+
- npm or yarn

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd AiMeta
   ```

2. **Backend Setup**
   ```bash
   cd AIMetaverseBackend
   npm install
   npm run dev
   ```
   Backend will be available at: http://localhost:3001

3. **Frontend Setup**
   ```bash
   cd AIMetaverseFrontend
   npm install
   npm start
   ```
   Frontend will be available at: http://localhost:3000

4. **AI Agents Setup**
   ```bash
   cd AIMetaverseAgents
   pip install -r requirements.txt
   python main.py
   ```
   Agents API will be available at: http://localhost:8000

## 🎯 Core Features

### 🌍 Realistic and Immersive Environment
The virtual world is designed to be as realistic and immersive as possible, utilizing advanced graphics and physics engines powered by Three.js and React Three Fiber.

### 🤖 AI-Powered Interactions
AI agents interact with users in a natural and engaging way, providing information, completing tasks, and engaging in conversation through our FastAPI-powered agents system.

### 👥 User-Friendly Interface
The frontend application provides an intuitive and easy-to-use interface for users to navigate the virtual world and interact with its features.

## 🎯 Project Goals

- **Revolutionize Human-AI Interaction**: Create a new paradigm for human-AI interaction, where users can seamlessly interact with AI-powered entities in a natural and intuitive way.
- **Enhance Collaboration and Communication**: Provide a virtual space for people to collaborate and communicate effectively, regardless of physical location.
- **Expand Human Potential**: Empower individuals to explore new possibilities, learn new skills, and connect with others in a shared virtual environment.

## 🌐 API Endpoints

### Backend API (Port 3001)
- `GET /` - Welcome message and API info
- `GET /api/users` - User management
- `GET /api/worlds` - World creation and management
- `GET /api/agents` - AI agent integration
- `GET /health` - Health check

### AI Agents API (Port 8000)
- `GET /` - Agents API info
- `GET /agents` - List all available agents
- `POST /chat` - Chat with AI agents
- `GET /health` - Health check

## 🛠️ Development

### Project Structure
```
AiMeta/
├── AIMetaverseBackend/     # Node.js Express API
│   ├── src/
│   │   └── index.js
│   └── package.json
├── AIMetaverseFrontend/    # React.js Application
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── AIMetaverseAgents/      # Python FastAPI Agents
│   ├── main.py
│   └── requirements.txt
└── README.md
```

### Available Scripts

**Backend:**
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests

**Frontend:**
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

**AI Agents:**
- `python main.py` - Start agents server
- `pytest` - Run tests

## 🌟 Significance

The AI Metaverse project has the potential to significantly impact various fields:

### 📚 Education
Create immersive learning experiences that engage students and enhance their understanding of complex concepts.

### 🎓 Training
Provide virtual training environments for individuals to develop new skills and prepare for real-world scenarios.

### 🎮 Entertainment
Offer immersive entertainment experiences that combine virtual reality with AI-powered interactions.

## 🤝 Contributing

We welcome contributions to the AI Metaverse project! Please feel free to submit issues, feature requests, and pull requests.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Kre8tive Konceptz** - Building the world's first AI-powered metaverse by learning and creating a complete repository of AI APIs located on the entire internet.

---

*The AI Metaverse Project is a visionary initiative that aims to create a virtual world powered by artificial intelligence, transforming the way we interact with technology and with each other. The project's potential to revolutionize various fields, such as education, training, and entertainment, makes it an exciting endeavor with the potential to shape the future of human-AI interaction.*
