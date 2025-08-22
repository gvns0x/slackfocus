import React, { createContext, useContext, useState } from 'react';

const FocusContext = createContext();

export const useFocus = () => {
  const context = useContext(FocusContext);
  if (!context) {
    throw new Error('useFocus must be used within a FocusProvider');
  }
  return context;
};

export const FocusProvider = ({ children }) => {
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [currentFocus, setCurrentFocus] = useState(null);
  const [focusTopics] = useState([
    {
      id: 'product-launch',
      name: 'Product Launch',
      description: 'Focus on the upcoming product launch',
      channels: ['general', 'project-alpha'],
      resources: [
        { type: 'notion', name: 'Product Launch Plan', url: 'https://notion.so/product-launch-plan', description: 'Complete launch strategy and timeline' },
        { type: 'loom', name: 'Product Demo Walkthrough', url: 'https://loom.com/product-demo', description: 'Video demonstration of new features' },
        { type: 'notion', name: 'Marketing Materials', url: 'https://notion.so/marketing-materials', description: 'Press releases and promotional content' }
      ],
      people: [
        { name: 'Sarah Chen', role: 'Product Manager', avatar: 'SC', help: 'Can provide updates on launch timeline and coordinate with stakeholders' },
        { name: 'Mike Johnson', name: 'Mike Johnson', role: 'Marketing Lead', avatar: 'MJ', help: 'Responsible for marketing strategy and promotional campaigns' },
        { name: 'Alex Rodriguez', role: 'Engineering Lead', avatar: 'AR', help: 'Can answer technical questions about product features and implementation' }
      ]
    },
    {
      id: 'bug-fixes',
      name: 'Bug Fixes & Maintenance',
      description: 'Focus on resolving critical issues and system maintenance',
      channels: ['general', 'announcements'],
      resources: [
        { type: 'notion', name: 'Bug Tracking Board', url: 'https://notion.so/bug-board', description: 'Current issues and their status' },
        { type: 'loom', name: 'Bug Reproduction Steps', url: 'https://loom.com/bug-steps', description: 'Video showing how to reproduce critical bugs' },
        { type: 'notion', name: 'Deployment Checklist', url: 'https://notion.so/deployment', description: 'Steps for safe deployment of fixes' }
      ],
      people: [
        { name: 'Alex Rodriguez', role: 'Engineering Lead', avatar: 'AR', help: 'Leading the technical fixes and can provide status updates' },
        { name: 'Emma Wilson', role: 'QA Engineer', avatar: 'EW', help: 'Can help test fixes and verify bug resolutions' },
        { name: 'David Kim', role: 'DevOps Engineer', avatar: 'DK', help: 'Manages deployments and can help with infrastructure issues' }
      ]
    },
    {
      id: 'team-building',
      name: 'Team Building',
      description: 'Focus on team collaboration and culture initiatives',
      channels: ['random', 'general'],
      resources: [
        { type: 'notion', name: 'Team Events Calendar', url: 'https://notion.so/team-events', description: 'Upcoming team activities and social events' },
        { type: 'loom', name: 'Team Introduction Videos', url: 'https://loom.com/team-intros', description: 'Get to know your teammates better' },
        { type: 'notion', name: 'Culture Handbook', url: 'https://notion.so/culture', description: 'Company values and team guidelines' }
      ],
      people: [
        { name: 'Sarah Chen', role: 'Product Manager', avatar: 'SC', help: 'Organizes team events and can help with team coordination' },
        { name: 'Lisa Park', role: 'HR Coordinator', avatar: 'LP', help: 'Manages team building activities and culture initiatives' },
        { name: 'Tom Hanks', role: 'Team Lead', avatar: 'TH', help: 'Can help facilitate team discussions and collaboration' }
      ]
    }
  ]);

  const enterFocusMode = (topicId) => {
    const topic = focusTopics.find(t => t.id === topicId);
    setCurrentFocus(topic);
    setIsFocusMode(true);
  };

  const exitFocusMode = () => {
    setIsFocusMode(false);
    setCurrentFocus(null);
  };

  const value = {
    isFocusMode,
    currentFocus,
    focusTopics,
    enterFocusMode,
    exitFocusMode
  };

  return (
    <FocusContext.Provider value={value}>
      {children}
    </FocusContext.Provider>
  );
};

