import React, { useState, useEffect } from 'react';
import './ProjectSearchModal.css';

const ProjectSearchModal = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  // Simulate loading projects
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      // Simulate API call delay
      const timer = setTimeout(() => {
        setProjects([
          {
            id: 1,
            name: 'Product Launch Campaign',
            description: 'Marketing campaign for the new product launch with social media and email marketing components'
          },
          {
            id: 2,
            name: 'Mobile App Redesign',
            description: 'Complete redesign of the mobile application with new UI/UX patterns and improved user experience'
          },
          {
            id: 3,
            name: 'Database Migration',
            description: 'Migration from legacy database system to new cloud-based solution with zero downtime'
          },
          {
            id: 4,
            name: 'Customer Support Portal',
            description: 'New self-service portal for customers to submit tickets and track their resolution status'
          },
          {
            id: 5,
            name: 'Analytics Dashboard',
            description: 'Real-time analytics dashboard for tracking key business metrics and performance indicators'
          }
        ]);
        setIsLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="project-search-modal-overlay" onClick={onClose}>
      <div className="project-search-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h1>Focus on</h1>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-content">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search for projects"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="projects-section">
            <h2>Finding your projects</h2>
            
            {isLoading ? (
              <div className="skeleton-container">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="skeleton-row">
                    <div className="skeleton-header"></div>
                    <div className="skeleton-description"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="projects-list">
                {filteredProjects.map(project => (
                  <div key={project.id} className="project-row">
                    <div className="project-header">{project.name}</div>
                    <div className="project-description">{project.description}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSearchModal;
