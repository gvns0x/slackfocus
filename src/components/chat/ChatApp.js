import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
import FocusMode from './FocusMode';
import ProjectSearchModal from './ProjectSearchModal';
import { FocusProvider, useFocus } from '../../contexts/FocusContext';
import './ChatApp.css';

function ChatAppContent() {
  const [currentChannel, setCurrentChannel] = useState('general');
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const { isFocusMode } = useFocus();
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

  const channels = [
    { id: 'general', name: 'general', unread: 0 },
    { id: 'random', name: 'random', unread: 2 },
    { id: 'announcements', name: 'announcements', unread: 0 },
    { id: 'project-alpha', name: 'project-alpha', unread: 1 }
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

  return (
    <div className={`chat-app ${isProjectModalOpen ? 'chat-app--modal-open' : ''}`}>
      <Sidebar 
        channels={channels} 
        currentChannel={currentChannel} 
        onChannelChange={setCurrentChannel}
        onFocusButtonClick={() => setIsProjectModalOpen(true)}
      />
      {isFocusMode ? (
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
