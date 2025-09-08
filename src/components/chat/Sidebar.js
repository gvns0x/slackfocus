import React, { useState } from 'react';
import { useFocus } from '../../contexts/FocusContext';
import Avatar from '../common/Avatar';
import Tooltip from '../common/Tooltip';
import './Sidebar.css';

const Sidebar = ({ channels, currentChannel, onChannelChange, onFocusButtonClick, onFocusButtonHover, projectData }) => {
  const { selectedProject, isLoading, exitFocusMode } = useFocus();
  const [expandedChannels, setExpandedChannels] = useState(new Set());

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

  const handleDropdownToggle = (channelId, e) => {
    e.stopPropagation();
    setExpandedChannels(prev => {
      const newSet = new Set(prev);
      if (newSet.has(channelId)) {
        newSet.delete(channelId);
      } else {
        newSet.add(channelId);
      }
      return newSet;
    });
  };

  // Default people for when no project is selected
  const defaultPeople = [
    { initials: 'SC', name: 'Sarah Chen', role: 'Product Manager', help: 'Can help with project coordination and stakeholder management' },
    { initials: 'MJ', name: 'Mike Johnson', role: 'Marketing Lead', help: 'Responsible for marketing strategy and campaign planning' },
    { initials: 'AR', name: 'Alex Rodriguez', role: 'Engineering Lead', help: 'Can answer technical questions about product features and implementation' }
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
        {/* <div className="focus-banner">
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
        </div>  */}
        
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
                <div key={channel.id}>
                  <div 
                    className={`channel-item ${currentChannel === channel.id ? 'active' : ''}`}
                    onClick={() => onChannelChange(channel.id)}
                  >
                    <span className="channel-name">{channel.name}</span>
                    {selectedProject && channel.threads && channel.threads.length > 0 && (
                      <button 
                        className={`channel-dropdown-btn ${expandedChannels.has(channel.id) ? 'expanded' : ''}`}
                        onClick={(e) => handleDropdownToggle(channel.id, e)}
                        title="Show threads"
                      >
                        <span className="dropdown-chevron">▼</span>
                      </button>
                    )}
                  </div>
                  {selectedProject && channel.threads && expandedChannels.has(channel.id) && (
                    <div className="thread-list">
                      {channel.threads.map(thread => (
                        <div 
                          key={thread.id}
                          className="thread-item"
                        >
                          <span className="thread-name">{thread.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
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
                  selectedProject ? (
                    <Tooltip
                      key={index}
                      content={
                        <div className="tooltip-content">
                          <div className="tooltip-name">{person.name}</div>
                          <div className="tooltip-role">{person.role}</div>
                          <div className="tooltip-help">{person.help}</div>
                        </div>
                      }
                      position="right"
                    >
                      <div className="dm-item">
                        <Avatar userInitials={person.initials} size="small" className="user-avatar" />
                        <span className="user-name">{person.name}</span>
                      </div>
                    </Tooltip>
                  ) : (
                    <div key={index} className="dm-item">
                      <Avatar userInitials={person.initials} size="small" className="user-avatar" />
                      <span className="user-name">{person.name}</span>
                    </div>
                  )
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* <div className="sidebar-footer">
        <div className="user-profile">
          <Avatar userInitials="YO" size="small" className="user-avatar" />
          <div className="user-info">
            <div className="user-name">You</div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Sidebar;
