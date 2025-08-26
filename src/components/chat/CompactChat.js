import React, { useState } from 'react';
import './CompactChat.css';

const CompactChat = () => {
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [focusInput, setFocusInput] = useState('');
  const [currentChannel, setCurrentChannel] = useState('general');
  const [selectedTab, setSelectedTab] = useState('Mobile redesign files');

  const channels = [
    { id: 'general', name: 'general', active: true },
    { id: 'general2', name: 'general', active: false },
    { id: 'general3', name: 'general', active: false },
    { id: 'general4', name: 'general', active: false },
    { id: 'general5', name: 'general', active: false }
  ];

  const people = [
    { id: 'person1', name: 'general', avatar: '👤' },
    { id: 'person2', name: 'general', avatar: '👤' },
    { id: 'person3', name: 'general', avatar: '👤' },
    { id: 'person4', name: 'general', avatar: '👤' },
    { id: 'person5', name: 'general', avatar: '👤' }
  ];

  const messages = [
    { id: 1, user: 'Sarah Chen', text: 'Good morning everyone! 👋', timestamp: '9:30 AM', avatar: '👤' },
    { id: 2, user: 'Mike J', text: 'Morning Sarah! How\'s the new project coming along?', timestamp: '9:31 AM', avatar: '👤' },
    { id: 3, user: 'Alex R', text: 'I just pushed the latest updates to the staging environment', timestamp: '9:31 AM', avatar: '👤' },
    { id: 4, user: 'Alex R', text: 'I just pushed the latest updates to the staging environment', timestamp: '9:31 AM', avatar: '👤' }
  ];

  const handleFocusSubmit = (e) => {
    e.preventDefault();
    if (focusInput.trim()) {
      setIsFocusMode(true);
      setSelectedTab(focusInput);
    }
  };

  const handleChannelClick = (channelId) => {
    setCurrentChannel(channelId);
    // Update active state
    channels.forEach(channel => {
      channel.active = channel.id === channelId;
    });
  };

  if (isFocusMode) {
    return (
      <div className="compact-chat">
        {/* Top Navigation Bar */}
        <div className="compact-chat-nav">
          <div className="nav-left">
            <div className="nav-logo">
              <div className="logo-icon"></div>
              <span className="workspace-name">Acme</span>
            </div>
            <div className="nav-tab active">
              {selectedTab}
            </div>
          </div>
          <div className="nav-right">
            <div className="nav-item">
              CHANNELS
              <span className="chevron">▼</span>
            </div>
            <div className="nav-item">
              PEOPLE
              <span className="chevron">▼</span>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="compact-chat-content">
          <div className="content-header">
            <h1 className="content-title">{selectedTab}</h1>
            <div className="content-menu">⋯</div>
          </div>
          
          <div className="content-placeholder large"></div>
          
          <div className="content-placeholders">
            <div className="content-placeholder small"></div>
            <div className="content-placeholder small"></div>
            <div className="content-placeholder small"></div>
            <div className="content-placeholder small"></div>
            <div className="content-placeholder small"></div>
            <div className="content-placeholder small"></div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="compact-chat-status">
          Checking files from {selectedTab.toLowerCase()} project
        </div>
      </div>
    );
  }

  return (
    <div className="compact-chat">
      <div className="compact-chat-container">
        {/* Left Sidebar */}
        <div className="compact-chat-sidebar">
          {/* Top Section */}
          <div className="sidebar-top">
            <div className="logo-icon"></div>
            <span className="workspace-name">Acme</span>
          </div>

          {/* Channels Section */}
          <div className="sidebar-section">
            <h3 className="section-header">CHANNELS</h3>
            <div className="channel-list">
              {channels.map((channel) => (
                <div 
                  key={channel.id}
                  className={`channel-item ${channel.active ? 'active' : ''}`}
                  onClick={() => handleChannelClick(channel.id)}
                >
                  {channel.name}
                </div>
              ))}
            </div>
          </div>

          {/* People Section */}
          <div className="sidebar-section">
            <h3 className="section-header">PEOPLE</h3>
            <div className="people-list">
              {people.map((person) => (
                <div key={person.id} className="person-item">
                  <div className="person-avatar">{person.avatar}</div>
                  <span className="person-name">{person.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Chat Area */}
        <div className="compact-chat-main">
          {/* Chat Header */}
          <div className="chat-header">
            <h2 className="channel-name">{currentChannel}</h2>
            <div className="chat-menu">⋯</div>
          </div>

          {/* Chat Messages */}
          <div className="chat-messages">
            {messages.map((message) => (
              <div key={message.id} className="message">
                <div className="message-avatar">{message.avatar}</div>
                <div className="message-content">
                  <div className="message-header">
                    <span className="message-user">{message.user}</span>
                    <span className="message-time">{message.timestamp}</span>
                  </div>
                  <div className="message-text">{message.text}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="message-input-container">
            <input 
              type="text" 
              className="message-input" 
              placeholder={`Message #${currentChannel}`}
            />
          </div>
        </div>
      </div>

      {/* Focus Input */}
      <form className="focus-input-container" onSubmit={handleFocusSubmit}>
        <input
          type="text"
          className="focus-input"
          placeholder="What do you want to do today?"
          value={focusInput}
          onChange={(e) => setFocusInput(e.target.value)}
        />
      </form>
    </div>
  );
};

export default CompactChat;
