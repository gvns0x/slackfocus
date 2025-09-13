import React from 'react';
import { useFocus } from '../../contexts/FocusContext';
import Avatar from '../common/Avatar';
import './FocusMode.css';

const FocusMode = ({ onChannelChange, currentChannel, isFadingOut, isAnimating }) => {
  const { currentFocus, exitFocusMode } = useFocus();

  if (!currentFocus) return null;

  const handleChannelClick = (channelId) => {
    onChannelChange(channelId);
  };

  const handleResourceClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className={`focus-mode ${isFadingOut ? 'fading-out' : ''} ${isAnimating ? 'animated-in' : 'animating-in'}`}>
      <div className="focus-header">
        <div className="focus-indicator">
          <div className="focus-info">
            <div className="focus-title">Focus Mode: {currentFocus.name}</div>
            <div className="focus-description">{currentFocus.description}</div>
          </div>
        </div>
        <button className="exit-focus-btn" onClick={exitFocusMode}>
          Exit Focus Mode
        </button>
      </div>

      <div className="focus-notification">
        <div className="notification-content">
          <span className="notification-icon">🔔</span>
          <span className="notification-text">
            You're in focus mode. Other channels are still accessible in the sidebar, but this view highlights what's most relevant to "{currentFocus.name}".
          </span>
        </div>
      </div>

      <div className="focus-content">
        <div className="focus-section">
          <h3>📢 Relevant Channels</h3>
          <div className="channel-grid">
            {currentFocus.channels.map(channelId => (
              <div 
                key={channelId}
                className={`focus-channel ${currentChannel === channelId ? 'active' : ''}`}
                onClick={() => handleChannelClick(channelId)}
              >
                <span className="channel-hash">#</span>
                <span className="channel-name">{channelId}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="focus-section">
          <h3>📚 Related Resources</h3>
          <div className="resources-grid">
            {currentFocus.resources.map((resource, index) => (
              <div 
                key={index}
                className="resource-card"
                onClick={() => handleResourceClick(resource.url)}
              >
                <div className="resource-icon">
                  {resource.type === 'notion' ? '📝' : '🎥'}
                </div>
                <div className="resource-content">
                  <div className="resource-name">{resource.name}</div>
                  <div className="resource-description">{resource.description}</div>
                  <div className="resource-type">{resource.type === 'notion' ? 'Notion' : 'Loom'}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="focus-section">
          <h3>👥 People Who Can Help</h3>
          <div className="people-grid">
            {currentFocus.people.map((person, index) => (
              <div key={index} className="person-card">
                <Avatar userInitials={person.avatar} size="large" className="person-avatar" />
                <div className="person-content">
                  <div className="person-name">{person.name}</div>
                  <div className="person-role">{person.role}</div>
                  <div className="person-help">{person.help}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusMode;
