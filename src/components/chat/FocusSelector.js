import React, { useState } from 'react';
import { useFocus } from '../../contexts/FocusContext';
import './FocusSelector.css';

const FocusSelector = ({ onClose }) => {
  const { focusTopics, enterFocusMode } = useFocus();
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

  const handleEnterFocus = () => {
    if (selectedTopic) {
      enterFocusMode(selectedTopic.id);
      onClose();
    }
  };

  return (
    <div className="focus-selector-overlay">
      <div className="focus-selector-modal">
        <div className="modal-header">
          <h2>🎯 Choose Your Focus</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-content">
          <p className="modal-description">
            Select a topic to enter focus mode. This will highlight relevant channels, 
            resources, and people to help you stay focused on your current priority.
          </p>
          
          <div className="topics-grid">
            {focusTopics.map(topic => (
              <div 
                key={topic.id}
                className={`topic-card ${selectedTopic?.id === topic.id ? 'selected' : ''}`}
                onClick={() => handleTopicSelect(topic)}
              >
                <div className="topic-header">
                  <h3>{topic.name}</h3>
                  <div className="topic-stats">
                    <span className="stat">
                      <span className="stat-icon">📢</span>
                      {topic.channels.length} channels
                    </span>
                    <span className="stat">
                      <span className="stat-icon">📚</span>
                      {topic.resources.length} resources
                    </span>
                    <span className="stat">
                      <span className="stat-icon">👥</span>
                      {topic.people.length} people
                    </span>
                  </div>
                </div>
                <p className="topic-description">{topic.description}</p>
                <div className="topic-preview">
                  <div className="preview-section">
                    <strong>Channels:</strong> {topic.channels.map(ch => `#${ch}`).join(', ')}
                  </div>
                  <div className="preview-section">
                    <strong>Resources:</strong> {topic.resources.slice(0, 2).map(r => r.name).join(', ')}
                    {topic.resources.length > 2 && ` +${topic.resources.length - 2} more`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="modal-footer">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button 
            className="enter-focus-btn"
            disabled={!selectedTopic}
            onClick={handleEnterFocus}
          >
            Enter Focus Mode
          </button>
        </div>
      </div>
    </div>
  );
};

export default FocusSelector;

