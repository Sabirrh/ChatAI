# 🤖 ChatAI - Real-time AI Chat Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![Socket.IO](https://img.shields.io/badge/Socket.IO-4.0-black.svg)](https://socket.io/)
[![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC.svg)](https://redux-toolkit.js.org/)

A modern, responsive real-time chat application powered by AI. Built with React, Socket.IO, and Redux Toolkit for seamless state management and real-time communication.

![ChatAI Screenshot](./client/src/assets/ScreenShot_of_Page.png)

## ✨ Features

- 🚀 Real-time chat with AI responses
- 💬 Persistent chat history
- 🎨 Dark theme interface
- 🔄 Stream-like response generation
- 📱 Responsive design
- 🔍 Side panel for chat navigation
- ⚡ Error handling and loading states

## 🛠️ Tech Stack

- **Frontend:**
  - React
  - Redux Toolkit for state management
  - Socket.IO Client for real-time communication
  - Modern CSS with responsive design
  - React Icons

- **Backend:**
  - Node.js & Express
  - Socket.IO Server for real-time communication
  - OpenAI GPT-4.1 Mini integration
  - CORS for cross-origin resource sharing
  - Environment variables for configuration
  - Error handling middleware

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/chatai.git
cd chatai
```

2. Install dependencies for both client and server
```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

3. Configure Environment Variables (Server)
```bash
# Create a .env file in the server directory
OPEN_AI_API_KEY=your_api_key_here
PORT=5004  # Optional, defaults to 5004
```

4. Configure OpenAI (Server)
The project is set up to use the GitHub AI inference endpoint:
```javascript
// server/config/opneai.config.js
baseURL: "https://models.github.ai/inference"
```

4. Start the development servers
```bash
# Start the server (from server directory)
npm start

# Start the client (from client directory)
npm run dev
```

## 🏗️ Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── chat/          # Chat-related components
│   │   ├── bottonPanel/   # Input components
│   │   └── mainLayout.jsx # Main application layout
│   ├── socket/            # Socket.IO client configuration
│   ├── store/             # Redux store and slices
│   └── assets/           # Static assets
server/
├── config/               # Server configuration
├── socket/              # Socket.IO server handlers
└── index.js            # Server entry point
```

## 🔥 Key Features Explained

### Real-time Communication
The application uses Socket.IO for bidirectional communication between the client and server, enabling real-time chat functionality:
- Custom socket event handlers for message processing
- Stream-based AI responses for smooth chat experience
- Error handling with socket events
- Cross-origin resource sharing (CORS) support

### AI Integration
The backend integrates with OpenAI's GPT-4.1 Mini model:
- Streaming responses for real-time AI chat
- Custom system prompts for friendly, emoji-enhanced responses
- Temperature control for response creativity
- Token limit management for controlled responses
- Robust error handling for AI API calls

### State Management
Redux Toolkit manages the application state, handling:
- Chat history
- Current chat session
- Loading states
- Error handling

### Backend Architecture
The server is built with a modular architecture:
- Express server with HTTP module integration
- Socket.IO server registration
- Environment variable configuration
- Message handler middleware
- Chat history management
- Configurable port settings (default: 5004)

### Error Handling
Comprehensive error handling for:
- AI response errors
- Network issues
- Invalid messages

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to OpenAI for providing the AI capabilities
- React and Redux communities for excellent documentation
- Socket.IO team for real-time communication features

---

⭐ Don't forget to star this repository if you found it helpful!