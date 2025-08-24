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
          { 
            id: 'marketing', 
            name: 'marketing', 
            unread: 0,
            threads: [
              { id: 'thread-1', name: 'Campaign Strategy Discussion' },
              { id: 'thread-2', name: 'Budget Planning' },
              { id: 'thread-3', name: 'Target Audience Analysis' }
            ]
          },
          { 
            id: 'product-launch', 
            name: 'product-launch', 
            unread: 2,
            threads: [
              { id: 'thread-4', name: 'Launch Timeline Review' },
              { id: 'thread-5', name: 'Feature Prioritization' },
              { id: 'thread-6', name: 'Go-to-Market Strategy' }
            ]
          },
          { 
            id: 'social-media', 
            name: 'social-media', 
            unread: 1,
            threads: [
              { id: 'thread-7', name: 'Content Calendar Planning' },
              { id: 'thread-8', name: 'Influencer Outreach' }
            ]
          },
          { 
            id: 'email-campaigns', 
            name: 'email-campaigns', 
            unread: 0,
            threads: [
              { id: 'thread-9', name: 'Email Sequence Design' },
              { id: 'thread-10', name: 'A/B Testing Results' }
            ]
          }
        ],
        people: [
          { initials: 'SC', name: 'Sarah Chen', role: 'Product Manager', help: 'Can provide updates on launch timeline and coordinate with stakeholders' },
          { initials: 'MJ', name: 'Mike Johnson', role: 'Marketing Lead', help: 'Responsible for marketing strategy and promotional campaigns' },
          { initials: 'EW', name: 'Emma Wilson', role: 'Social Media Manager', help: 'Manages social media presence and content distribution' }
        ]
      },
      2: { // Mobile App Redesign
        channels: [
          { 
            id: 'design', 
            name: 'design', 
            unread: 0,
            threads: [
              { id: 'thread-11', name: 'Design System Updates' },
              { id: 'thread-12', name: 'User Research Findings' }
            ]
          },
          { 
            id: 'mobile-dev', 
            name: 'mobile-dev', 
            unread: 3,
            threads: [
              { id: 'thread-13', name: 'iOS Implementation' },
              { id: 'thread-14', name: 'Android Development' },
              { id: 'thread-15', name: 'Performance Optimization' }
            ]
          },
          { 
            id: 'ui-ux', 
            name: 'ui-ux', 
            unread: 1,
            threads: [
              { id: 'thread-16', name: 'User Flow Design' },
              { id: 'thread-17', name: 'Prototype Testing' }
            ]
          },
          { 
            id: 'app-testing', 
            name: 'app-testing', 
            unread: 0,
            threads: [
              { id: 'thread-18', name: 'QA Testing Progress' },
              { id: 'thread-19', name: 'Beta Testing Feedback' }
            ]
          }
        ],
        people: [
          { initials: 'AR', name: 'Alex Rodriguez', role: 'UI/UX Designer', help: 'Can answer design questions and provide mockups' },
          { initials: 'DK', name: 'David Kim', role: 'Mobile Developer', help: 'Handles technical implementation and app development' },
          { initials: 'LP', name: 'Lisa Park', role: 'Product Designer', help: 'Focuses on user experience and product strategy' }
        ]
      },
      3: { // Database Migration
        channels: [
          { 
            id: 'backend', 
            name: 'backend', 
            unread: 0,
            threads: [
              { id: 'thread-20', name: 'API Migration Planning' },
              { id: 'thread-21', name: 'Data Validation' }
            ]
          },
          { 
            id: 'database', 
            name: 'database', 
            unread: 5,
            threads: [
              { id: 'thread-22', name: 'Schema Migration' },
              { id: 'thread-23', name: 'Performance Monitoring' },
              { id: 'thread-24', name: 'Backup Strategy' }
            ]
          },
          { 
            id: 'devops', 
            name: 'devops', 
            unread: 2,
            threads: [
              { id: 'thread-25', name: 'Deployment Pipeline' },
              { id: 'thread-26', name: 'Infrastructure Setup' }
            ]
          },
          { 
            id: 'migration', 
            name: 'migration', 
            unread: 1,
            threads: [
              { id: 'thread-27', name: 'Rollback Plan' },
              { id: 'thread-28', name: 'Testing Strategy' }
            ]
          }
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

