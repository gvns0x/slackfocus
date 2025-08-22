import React, { useState, useRef, useEffect } from 'react';
import './ChatArea.css';

const ChatArea = ({ channel, messages, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

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

  return (
    <div className="chat-area">
      <div className="chat-header">
        <div className="channel-info">
          <span className="channel-hash">#</span>
          <span className="channel-name">{channel}</span>
          <span className="channel-topic">Company-wide announcements and work-based matters</span>
        </div>
        <div className="header-actions">
          <button className="header-button">
            <span className="icon">📌</span>
          </button>
          <button className="header-button">
            <span className="icon">👥</span>
          </button>
          <button className="header-button">
            <span className="icon">⚙️</span>
          </button>
        </div>
      </div>
      
      <div className="messages-container">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={message.id} className="message">
              <div className="message-avatar">
                <div className="avatar">{message.avatar}</div>
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
              <button type="button" className="input-button">
                <span className="icon">😊</span>
              </button>
              <button type="button" className="input-button">
                <span className="icon">📎</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatArea;

