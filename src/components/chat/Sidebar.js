import React from 'react';
import { useFocus } from '../../contexts/FocusContext';
import Avatar from '../common/Avatar';
import './Sidebar.css';

const Sidebar = ({ channels, currentChannel, onChannelChange, onFocusButtonClick, onFocusButtonHover, projectData }) => {
  const { selectedProject, isLoading, exitFocusMode } = useFocus();

  const handleFocusButtonMouseEnter = () => {
    if (onFocusButtonHover) {
      onFocusButtonHover(true);
    }
  };

  const handleFocusButtonMouseLeave = () => {
    if (onFocusButtonHover) {
      onFocusButtonHover(false);
    }
  };

  const handleExitFocus = (e) => {
    e.stopPropagation();
    exitFocusMode();
  };

  // Default people for when no project is selected
  const defaultPeople = [
    { initials: 'SC', name: 'Sarah Chen' },
    { initials: 'MJ', name: 'Mike Johnson' },
    { initials: 'AR', name: 'Alex Rodriguez' }
  ];

  // Use project-specific people or default people
  const people = projectData ? projectData.people : defaultPeople;

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="workspace-info">
          <Avatar userInitials="SF" size="medium" className="workspace-avatar" />
          <div className="workspace-name">Acme</div>
        </div>
      </div>
      
      <div className="sidebar-content">
        <div className="focus-banner">
          <div className="focus-banner-content">
            <button 
              className={`focus-on-button ${selectedProject ? 'focus-active' : ''}`}
              onClick={onFocusButtonClick}
              onMouseEnter={handleFocusButtonMouseEnter}
              onMouseLeave={handleFocusButtonMouseLeave}
            >
              <span className="focus-button-text">
                {selectedProject ? selectedProject.name : 'Focus on'}
              </span>
              {selectedProject && (
                <button 
                  className="exit-focus-button"
                  onClick={handleExitFocus}
                  title="Exit focus mode"
                >
                  ×
                </button>
              )}
            </button>
          </div>
        </div>
        
        <div className="sidebar-section">
          <div className="section-header">
            <span className="section-title">Channels</span>
          </div>
          
          <div className="channel-list">
            {isLoading && selectedProject ? (
              // Show skeleton loading for channels
              [...Array(4)].map((_, index) => (
                <div key={index} className="skeleton-channel">
                  <div className="skeleton-channel-text"></div>
                </div>
              ))
            ) : (
              channels.map(channel => (
                <div 
                  key={channel.id}
                  className={`channel-item ${currentChannel === channel.id ? 'active' : ''}`}
                  onClick={() => onChannelChange(channel.id)}
                >
                  <span className="channel-name">{channel.name}</span>
                </div>
              ))
            )}
          </div>
        </div>
        
        <div className="sidebar-section">
          <div className="section-header">
            <span className="section-title">Direct Messages</span>
          </div>
          
          <div className="dm-list">
            {isLoading && selectedProject ? (
              // Show skeleton loading for DMs
              [...Array(3)].map((_, index) => (
                <div key={index} className="skeleton-item">
                  <div className="skeleton-avatar"></div>
                  <div className="skeleton-text"></div>
                </div>
              ))
            ) : (
              <>
                {people.map((person, index) => (
                  <div key={index} className="dm-item">
                    <Avatar userInitials={person.initials} size="small" className="user-avatar" />
                    <span className="user-name">{person.name}</span>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      
      <div className="sidebar-footer">
        <div className="user-profile">
          <Avatar userInitials="YO" size="small" className="user-avatar" />
          <div className="user-info">
            <div className="user-name">You</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
