import React, { useState } from 'react';
import { useFocus } from '../../contexts/FocusContext';
import FocusSelector from './FocusSelector';
import './Sidebar.css';

const Sidebar = ({ channels, currentChannel, onChannelChange }) => {
  const { isFocusMode, currentFocus } = useFocus();
  const [showFocusSelector, setShowFocusSelector] = useState(false);

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="workspace-info">
            <div className="workspace-avatar">SF</div>
            <div className="workspace-name">SlackFocus</div>
          </div>
          {isFocusMode && (
            <div className="focus-indicator-small">
              <span className="focus-icon-small">🎯</span>
              <span className="focus-text">{currentFocus.name}</span>
            </div>
          )}
        </div>
        
        <div className="sidebar-content">
          {!isFocusMode && (
            <div className="focus-section">
              <button 
                className="focus-mode-btn"
                onClick={() => setShowFocusSelector(true)}
              >
                <span className="focus-btn-icon">🎯</span>
                <span className="focus-btn-text">Enter Focus Mode</span>
              </button>
            </div>
          )}
          
          <div className="sidebar-section">
            <div className="section-header">
              <span className="section-title">Channels</span>
              <button className="add-button">+</button>
            </div>
            
            <div className="channel-list">
              {channels.map(channel => (
                <div 
                  key={channel.id}
                  className={`channel-item ${currentChannel === channel.id ? 'active' : ''}`}
                  onClick={() => onChannelChange(channel.id)}
                >
                  <span className="channel-hash">#</span>
                  <span className="channel-name">{channel.name}</span>
                  {channel.unread > 0 && (
                    <span className="unread-badge">{channel.unread}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="sidebar-section">
            <div className="section-header">
              <span className="section-title">Direct Messages</span>
              <button className="add-button">+</button>
            </div>
            
            <div className="dm-list">
              <div className="dm-item">
                <div className="user-avatar">SC</div>
                <span className="user-name">Sarah Chen</span>
                <div className="status-indicator online"></div>
              </div>
              <div className="dm-item">
                <div className="user-avatar">MJ</div>
                <span className="user-name">Mike Johnson</span>
                <div className="status-indicator away"></div>
              </div>
              <div className="dm-item">
                <div className="user-avatar">AR</div>
                <span className="user-name">Alex Rodriguez</span>
                <div className="status-indicator online"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="user-avatar">YO</div>
            <div className="user-info">
              <div className="user-name">You</div>
              <div className="user-status">Online</div>
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
