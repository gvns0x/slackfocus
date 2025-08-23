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
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
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
        { name: 'Mike Johnson', role: 'Marketing Lead', avatar: 'MJ', help: 'Responsible for marketing strategy and promotional campaigns' },
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
    setSelectedProject(null);
  };

  const selectProject = (project) => {
    setIsLoading(true);
    setSelectedProject(project);
    setIsFocusMode(true);
    
    // Simulate loading time for skeleton animation
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  // Project-specific data
  const getProjectData = (projectId) => {
    const projectData = {
      1: { // Product Launch Campaign
        channels: [
          { id: 'marketing', name: 'marketing', unread: 0 },
          { id: 'product-launch', name: 'product-launch', unread: 2 },
          { id: 'social-media', name: 'social-media', unread: 1 },
          { id: 'email-campaigns', name: 'email-campaigns', unread: 0 }
        ],
        people: [
          { initials: 'SC', name: 'Sarah Chen', role: 'Product Manager', help: 'Can provide updates on launch timeline and coordinate with stakeholders' },
          { initials: 'MJ', name: 'Mike Johnson', role: 'Marketing Lead', help: 'Responsible for marketing strategy and promotional campaigns' },
          { initials: 'EW', name: 'Emma Wilson', role: 'Social Media Manager', help: 'Manages social media presence and content distribution' }
        ]
      },
      2: { // Mobile App Redesign
        channels: [
          { id: 'design', name: 'design', unread: 0 },
          { id: 'mobile-dev', name: 'mobile-dev', unread: 3 },
          { id: 'ui-ux', name: 'ui-ux', unread: 1 },
          { id: 'app-testing', name: 'app-testing', unread: 0 }
        ],
        people: [
          { initials: 'AR', name: 'Alex Rodriguez', role: 'UI/UX Designer', help: 'Can answer design questions and provide mockups' },
          { initials: 'DK', name: 'David Kim', role: 'Mobile Developer', help: 'Handles technical implementation and app development' },
          { initials: 'LP', name: 'Lisa Park', role: 'Product Designer', help: 'Focuses on user experience and product strategy' }
        ]
      },
      3: { // Database Migration
        channels: [
          { id: 'backend', name: 'backend', unread: 0 },
          { id: 'database', name: 'database', unread: 5 },
          { id: 'devops', name: 'devops', unread: 2 },
          { id: 'migration', name: 'migration', unread: 1 }
        ],
        people: [
          { initials: 'CB', name: 'Chris Brown', role: 'Backend Engineer', help: 'Can answer technical questions about migration process' },
          { initials: 'TH', name: 'Tom Hanks', role: 'DevOps Engineer', help: 'Manages infrastructure and deployment pipeline' },
          { initials: 'JS', name: 'Jennifer Smith', role: 'Database Admin', help: 'Oversees data integrity and migration validation' }
        ]
      }
    };
    
    return projectData[projectId] || null;
  };

  const value = {
    isFocusMode,
    currentFocus,
    selectedProject,
    isLoading,
    focusTopics,
    enterFocusMode,
    exitFocusMode,
    selectProject,
    getProjectData
  };

  return (
    <FocusContext.Provider value={value}>
      {children}
    </FocusContext.Provider>
  );
};

