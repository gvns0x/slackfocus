import React from 'react';
import './App.css';
import ChatApp from './components/chat/ChatApp';
import CompactApp from './components/compact/compactapp/compactapp';

function App() {
  return (
    <div className="app">
      <ChatApp />
      <CompactApp />
    </div>
  );
}

export default App;
