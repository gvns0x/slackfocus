import React, { useState, useRef, useEffect } from 'react';
import { useFocus } from '../../contexts/FocusContext';
import Avatar from '../common/Avatar';
import './ChatArea.css';

const ChatArea = ({ channel, messages, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);
  const { selectedProject, isLoading } = useFocus();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  // Show focusing state when a project is selected
  if (selectedProject) {
    return (
      <div className="chat-area">
        <div className="chat-header">
          <div className="channel-info">
            <span className="channel-name">Focus Mode</span>
          </div>
          <div className="header-actions">
            <button className="header-button">
              <span className="icon">⋯</span>
            </button>
          </div>
        </div>
        
        <div className="focusing-container">
          <div className="focusing-content">
            <h2 className="focusing-title">Focusing on</h2>
            <h1 className="focusing-project-name">{selectedProject.name}</h1>
            <p className="focusing-description">{selectedProject.description}</p>
            {isLoading && (
              <div className="focusing-loading">
                <div className="loading-spinner"></div>
                <span>Loading project context...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-area">
      <div className="chat-header">
        <div className="channel-info">
          <span className="channel-name">{channel}</span>
        </div>
        <div className="header-actions">
          <button className="header-button">
            <span className="icon">⋯</span>
          </button>
        </div>
      </div>
      
      <div className="messages-container">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={message.id} className="message">
              <div className="message-avatar" >
                <Avatar userInitials={message.avatar} size="small" />
              </div>
              <div className="message-content">
                <div className="message-header">
                  <span className="message-author">{message.user}</span>
                  <span className="message-timestamp">{message.timestamp}</span>
                </div>
                <div className="message-text">{message.text}</div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      <div className="message-input-container">
        <form onSubmit={handleSubmit} className="message-form">
          <div className="input-wrapper">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={`Message #${channel}`}
              className="message-input"
            />
            <div className="input-actions">
              {newMessage.trim() ? (
                <button type="submit" className="input-button">
                  <span className="icon">➤</span>
                </button>
              ) : (
                <span></span>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatArea;

