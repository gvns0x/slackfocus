import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
import FocusMode from './FocusMode';
import ProjectSearchModal from './ProjectSearchModal';
import Avatar from '../common/Avatar';
import { FocusProvider, useFocus } from '../../contexts/FocusContext';
import './ChatApp.css';

function ChatAppContent() {
  const [currentChannel, setCurrentChannel] = useState('general');
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [globalInputValue, setGlobalInputValue] = useState('');
  const [uiVersion, setUiVersion] = useState('default'); // 'default' or 'mobile-redesign'
  const { isFocusMode, selectedProject, getProjectData } = useFocus();
  const [messages, setMessages] = useState({
    general: [
      { id: 1, user: 'Sarah Chen', text: 'Good morning everyone! 👋', timestamp: '9:30 AM', avatar: 'SC' },
      { id: 2, user: 'Mike Johnson', text: 'Morning Sarah! How\'s the new project coming along?', timestamp: '9:32 AM', avatar: 'MJ' },
      { id: 3, user: 'Alex Rodriguez', text: 'I just pushed the latest updates to the staging environment', timestamp: '9:35 AM', avatar: 'AR' },
      { id: 4, user: 'Emma Wilson', text: 'Perfect timing! I was just about to test the new features', timestamp: '9:37 AM', avatar: 'EW' },
      { id: 5, user: 'David Kim', text: 'Don\'t forget we have the team standup at 10 AM', timestamp: '9:40 AM', avatar: 'DK' }
    ],
    random: [
      { id: 1, user: 'Tom Hanks', text: 'Anyone up for lunch at that new sushi place?', timestamp: '11:15 AM', avatar: 'TH' },
      { id: 2, user: 'Lisa Park', text: 'I\'m in! I heard they have amazing ramen too', timestamp: '11:17 AM', avatar: 'LP' },
      { id: 3, user: 'Chris Brown', text: 'Count me out, I brought leftovers today', timestamp: '11:20 AM', avatar: 'CB' }
    ],
    announcements: [
      { id: 1, user: 'HR Team', text: '📢 Reminder: Open enrollment for health benefits ends this Friday!', timestamp: '8:00 AM', avatar: 'HR' },
      { id: 2, user: 'IT Support', text: '🔧 Scheduled maintenance tonight from 2-4 AM. Some services may be temporarily unavailable.', timestamp: '2:30 PM', avatar: 'IT' }
    ],
    'project-alpha': [
      { id: 1, user: 'Project Lead', text: 'Welcome to the Alpha project channel! Let\'s keep all project-related discussions here.', timestamp: '10:00 AM', avatar: 'PL' },
      { id: 2, user: 'Dev Team', text: 'Sprint planning meeting notes have been uploaded to the shared drive', timestamp: '10:30 AM', avatar: 'DT' }
    ]
  });

  // Get project-specific data
  const projectData = selectedProject ? getProjectData(selectedProject.id) : null;
  const channels = projectData ? projectData.channels : [
    { id: 'general', name: 'general', unread: 0, threads: [] },
    { id: 'random', name: 'random', unread: 2, threads: [] },
    { id: 'announcements', name: 'announcements', unread: 0, threads: [] },
    { id: 'project-alpha', name: 'project-alpha', unread: 1, threads: [] }
  ];

  const addMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      user: 'You',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      avatar: 'YO'
    };
    
    setMessages(prev => ({
      ...prev,
      [currentChannel]: [...(prev[currentChannel] || []), newMessage]
    }));
  };

  const handleGlobalInputSubmit = (e) => {
    e.preventDefault();
    if (globalInputValue.trim()) {
      // Check if the input contains "mobile redesign" to switch UI versions
      if (globalInputValue.toLowerCase().includes('mobile redesign')) {
        setUiVersion('mobile-redesign');
      } else if (globalInputValue.toLowerCase().includes('default') || globalInputValue.toLowerCase().includes('back to normal')) {
        setUiVersion('default');
      }
      
      console.log('Global input submitted:', globalInputValue);
      setGlobalInputValue('');
    }
  };

  const handleGlobalInputChange = (e) => {
    setGlobalInputValue(e.target.value);
  };

  return (
    <div className={`chat-app ${isProjectModalOpen ? 'chat-app--modal-open' : ''}`}>
      {/* DEFAULT UI VERSION */}
      {uiVersion === 'default' && (
        <div className="ui-version-default">
          <div className="chat-app-main">
            <Sidebar 
              channels={channels} 
              currentChannel={currentChannel} 
              onChannelChange={setCurrentChannel}
              onFocusButtonClick={() => setIsProjectModalOpen(true)}
              projectData={projectData}
            />
            {selectedProject ? (
              <ChatArea 
                channel={currentChannel}
                messages={messages[currentChannel] || []}
                onSendMessage={addMessage}
              />
            ) : isFocusMode ? (
              <FocusMode 
                onChannelChange={setCurrentChannel}
                currentChannel={currentChannel}
              />
            ) : (
              <ChatArea 
                channel={currentChannel}
                messages={messages[currentChannel] || []}
                onSendMessage={addMessage}
              />
            )}
          </div>
        </div>
      )}

      {/* MOBILE REDESIGN FOCUSED UI VERSION */}
      {uiVersion === 'mobile-redesign' && (
        <div className="ui-version-mobile-redesign">
          <div className="mobile-redesign-layout">
            {/* Top Navigation Bar */}
            <div className="mobile-nav-bar">
              <div className="nav-left">
                <div className="workspace-info">
                  <Avatar userInitials="SF" size="medium" className="workspace-avatar" />
                  <div className="workspace-name">Acme</div>
                </div>
                <div className="nav-tabs">
                  <div className="nav-tab active">Mobile redesign files</div>
                  <div className="nav-tab">CHANNELS ▼</div>
                  <div className="nav-tab">PEOPLE ▼</div>
                </div>
              </div>
            </div>
            
            {/* Main Content Area */}
            <div className="mobile-main-content">
              <div className="content-header">
                <h1 className="content-title">Mobile redesign files</h1>
                <div className="content-actions">
                  <button className="content-action-btn">
                    <span className="icon">⋯</span>
                  </button>
                </div>
              </div>
              
              <div className="file-display-area">
                {/* Large main file placeholder */}
                <div className="main-file-placeholder"></div>
                
                {/* File thumbnails below */}
                <div className="file-thumbnails-row">
                  <div className="file-thumbnail"></div>
                  <div className="file-thumbnail"></div>
                  <div className="file-thumbnail"></div>
                  <div className="file-thumbnail"></div>
                  <div className="file-thumbnail"></div>
                </div>
              </div>
            </div>
            
            <div className="mobile-status">
              <p className="status-text">Checking files from mobile redesign project</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Global Input Field - Always visible */}
      <div className={`global-input-container ${uiVersion === 'mobile-redesign' ? 'mobile-redesign-input' : ''}`}>
        <form onSubmit={handleGlobalInputSubmit} className="global-input-form">
          <div className={`global-input-wrapper ${uiVersion === 'mobile-redesign' ? 'mobile-redesign-wrapper' : ''}`}>
            <input
              type="text"
              value={globalInputValue}
              onChange={handleGlobalInputChange}
              placeholder={uiVersion === 'mobile-redesign' ? "Type to search files..." : "Type a message or command..."}
              className={`global-input ${uiVersion === 'mobile-redesign' ? 'mobile-redesign-input-field' : ''}`}
            />
            <div className="global-input-actions">
              {uiVersion === 'mobile-redesign' ? (
                <button 
                  type="button" 
                  className="exit-mobile-redesign-btn"
                  onClick={() => setUiVersion('default')}
                  title="Exit mobile redesign mode"
                >
                  <span className="icon">×</span>
                </button>
              ) : globalInputValue.trim() ? (
                <button type="submit" className="global-input-button">
                  <span className="icon">➤</span>
                </button>
              ) : (
                <span></span>
              )}
            </div>
          </div>
        </form>
      </div>

      {isProjectModalOpen && (
        <ProjectSearchModal 
          isOpen={isProjectModalOpen}
          onClose={() => setIsProjectModalOpen(false)}
        />
      )}
    </div>
  );
}

function ChatApp() {
  return (
    <FocusProvider>
      <ChatAppContent />
    </FocusProvider>
  );
}

export default ChatApp;
