import React, { useState } from 'react';
import { useFocus } from '../../contexts/FocusContext';
import FocusSelector from './FocusSelector';
import Avatar from '../common/Avatar';
import './Sidebar.css';

const Sidebar = ({ channels, currentChannel, onChannelChange }) => {
  const { isFocusMode, currentFocus } = useFocus();
  const [showFocusSelector, setShowFocusSelector] = useState(false);

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="workspace-info">
            <Avatar userInitials="SF" size="medium" className="workspace-avatar" />
            <div className="workspace-name">SlackFocus</div>
          </div>
          {isFocusMode && (
            <div className="focus-indicator-small">
              <span className="focus-text">{currentFocus.name}</span>
            </div>
          )}
        </div>
        
        <div className="sidebar-content">
          {!isFocusMode && (
              <div className="focus-banner">
                <div className="focus-banner-content">
                  <button 
                    className="focus-on-button"
                    onClick={() => setShowFocusSelector(true)}
                  >
                    Focus on
                  </button>
                </div>
              </div>

          )}
          
          <div className="sidebar-section">
            <div className="section-header">
              <span className="section-title">Channels</span>
            </div>
            
            <div className="channel-list">
              {channels.map(channel => (
                <div 
                  key={channel.id}
                  className={`channel-item ${currentChannel === channel.id ? 'active' : ''}`}
                  onClick={() => onChannelChange(channel.id)}
                >
                  <span className="channel-name">{channel.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="sidebar-section">
            <div className="section-header">
              <span className="section-title">Direct Messages</span>
            </div>
            
            <div className="dm-list">
              <div className="dm-item">
                <Avatar userInitials="SC" size="small" className="user-avatar" />
                <span className="user-name">Sarah Chen</span>
              </div>
              <div className="dm-item">
                <Avatar userInitials="MJ" size="small" className="user-avatar" />
                <span className="user-name">Mike Johnson</span>
              </div>
              <div className="dm-item">
                <Avatar userInitials="AR" size="small" className="user-avatar" />
                <span className="user-name">Alex Rodriguez</span>
              </div>
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
      
      {showFocusSelector && (
        <FocusSelector onClose={() => setShowFocusSelector(false)} />
      )}
    </>
  );
};

export default Sidebar;
