# 🎯 ChatAI Client

The frontend implementation of the ChatAI application built with React, Redux Toolkit, and Socket.IO client.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## 📁 Project Structure

```
src/
├── components/
│   ├── chat/
│   │   ├── ChatBubble.jsx    # Individual message component
│   │   ├── ChatPanel.jsx     # Main chat display area
│   │   └── SidePanel.jsx     # Navigation and chat management
│   ├── bottonPanel/
│   │   └── InputMessage.jsx  # Message input component
│   └── mainLayout.jsx        # Main application layout
├── socket/
│   └── socketClient.js       # Socket.IO client configuration
├── store/
│   ├── chatSlice.js         # Chat-related state management
│   └── index.js             # Redux store configuration
├── assets/
│   └── background_Img.jpg    # Static assets
├── App.jsx                   # Root component
└── main.jsx                  # Application entry point
```

## 🔧 Technical Implementation

### State Management (Redux)

The application uses Redux Toolkit for state management with the following key features:

```javascript
// store/chatSlice.js
{
    currentChatID: null,      // Active chat session ID
    chats: [],                // Array of chat sessions
    loading: false            // Loading state indicator
}
```

Key actions:
- `storeMessage`: Add new message to chat
- `storeResponse`: Handle AI responses
- `removeChat`: Delete chat sessions
- `aiError`: Handle error states
- `setCurrentChatId`: Switch between chats

### Real-time Communication

Socket.IO client implementation (`socket/socketClient.js`):
- Establishes connection to backend server
- Handles AI responses and errors
- Maintains chat history synchronization
- Emits user messages to server

### Component Architecture

1. **MainLayout (`mainLayout.jsx`)**
   - Main container with dark theme
   - Organizes chat components in grid layout

2. **ChatPanel (`chat/ChatPanel.jsx`)**
   - Displays chat messages
   - Handles loading states
   - Maps messages to ChatBubble components

3. **ChatBubble (`chat/ChatBubble.jsx`)**
   - Renders individual messages
   - Handles error states
   - Different styles for user/AI messages

4. **InputMessage (`bottonPanel/InputMessage.jsx`)**
   - Message input handling
   - Send message functionality
   - Enter key press handling

5. **SidePanel (`chat/SidePanel.jsx`)**
   - Chat session management
   - Navigation controls
   - New chat creation

## 🔄 Data Flow

1. User inputs message → `InputMessage` component
2. Message dispatched to Redux store
3. Socket client emits message to server
4. Server responds through socket connection
5. Response processed by Redux store
6. UI updates with new messages

## 🎨 Styling

The application uses a dark theme with:
- Modern chat interface
- Responsive design
- Loading animations
- Error state indicators

## 📡 Socket Events

```javascript
// Incoming Events
'ai-response'  // Handles AI message chunks
'Ai-error'     // Handles error responses

// Outgoing Events
'user-message' // Sends user messages with chat history
```

## 🛠️ Development

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Running backend server

### Available Scripts

```bash
# Development server
npm run dev

# Build project
npm run build

# Preview build
npm run preview
```

### Environment Setup

```bash
# Create .env file if needed for any frontend configurations
VITE_SOCKET_URL=http://localhost:5004
```

## 🔍 Code Quality

The project uses:
- ESLint for code linting
- Vite for fast development
- Modern React practices (hooks, functional components)
- Proper component organization
- Clean code principles

## 📚 Dependencies

Main dependencies include:
- React
- Redux Toolkit
- Socket.IO Client
- Vite
- React Icons

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

---

For the complete application setup, please refer to the main [README](../README.md) in the project root.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
