# SlackFocus

A modern, focus-oriented chat application built with React that helps users stay productive by providing contextual focus modes.

## Project Structure

```
src/
├── components/
│   └── chat/                    # Chat application components
│       ├── ChatApp.js          # Main chat application component
│       ├── ChatApp.css         # Chat app styling
│       ├── Sidebar.js          # Channel sidebar component
│       ├── Sidebar.css         # Sidebar styling
│       ├── ChatArea.js         # Main chat area component
│       ├── ChatArea.css        # Chat area styling
│       ├── FocusMode.js        # Focus mode view component
│       ├── FocusMode.css       # Focus mode styling
│       ├── FocusSelector.js    # Focus mode selector modal
│       └── FocusSelector.css   # Focus selector styling
├── contexts/
│   └── FocusContext.js         # Focus mode state management
├── styles/
│   └── designSystem.js         # Design system variables
└── App.js                      # Main application component
```

## Features

- **Modern Chat Interface**: Clean, glass-morphism design with iridescent accents
- **Focus Mode**: Contextual views that highlight relevant channels, resources, and people
- **Channel Management**: Easy navigation between different chat channels
- **Responsive Design**: Works seamlessly across different screen sizes
- **Real-time Messaging**: Send and receive messages in real-time

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Architecture

The application is structured with a modular approach:

- **ChatApp Component**: Contains all chat-related functionality and state
- **Focus Context**: Manages focus mode state and provides focus-related data
- **Component Organization**: All chat components are organized in the `src/components/chat/` folder for better maintainability

## Focus Mode

Focus mode helps users stay productive by:
- Highlighting relevant channels for specific topics
- Providing quick access to related resources (Notion docs, Loom videos)
- Identifying key people who can help with specific tasks
- Reducing distractions by contextualizing information

## Styling

The application uses a modern design system with:
- Glass morphism effects
- Iridescent color palette
- Smooth animations and transitions
- Responsive layout
- Dark theme optimized for productivity
