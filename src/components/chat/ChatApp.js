import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
import FocusMode from './FocusMode';
import ProjectSearchModal from './ProjectSearchModal';
import Avatar from '../common/Avatar';
import LoadingBlobs from './LoadingBlobs/LoadingBlobs';
import { FocusProvider, useFocus } from '../../contexts/FocusContext';
import './ChatApp.css';
import { gsap } from 'gsap';

// Mobile images import
import Mobile1 from '../../imgs/mobiles/MR_01.png'
import Mobile2 from '../../imgs/mobiles/MR_02.png'
import Mobile3 from '../../imgs/mobiles/MR_03.png'
import Mobile4 from '../../imgs/mobiles/MR_04.png'
import Mobile5 from '../../imgs/mobiles/MR_05.png'


function ChatAppContent() {
  const [currentChannel, setCurrentChannel] = useState('general');
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [globalInputValue, setGlobalInputValue] = useState('');
  const [uiVersion, setUiVersion] = useState('default'); // 'default', 'mobile-redesign', or 'feedback'
  const [isMinimized, setIsMinimized] = useState(false);
  const [showLoadingBlobs, setShowLoadingBlobs] = useState(false);
  const [loadingBlobsVisible, setLoadingBlobsVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isGeneratingInterface, setIsGeneratingInterface] = useState(false);
  const [animatedPlaceholder, setAnimatedPlaceholder] = useState("Generating a new interface...");
  const [mobileElementsAnimating, setMobileElementsAnimating] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isInputHovered, setIsInputHovered] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const chatAppMainRef = useRef(null);

  // Placeholder images for the file thumbnails
  const placeholderImages = [
    Mobile1,
    Mobile2,
    Mobile3,
    Mobile4,
    Mobile5
  ];

  // Comments data for each design
  const designComments = [
    [
      { id: 1, user: 'Sarah Chen', text: 'Love the clean layout! The spacing feels much better than the previous version.', timestamp: '2:30 PM', avatar: 'SC' },
      { id: 2, user: 'Mike Johnson', text: 'The navigation is intuitive. Great work on the user flow.', timestamp: '2:32 PM', avatar: 'MJ' },
      { id: 3, user: 'Alex Rodriguez', text: 'Could we add more contrast to the primary buttons?', timestamp: '2:35 PM', avatar: 'AR' }
    ],
    [
      { id: 1, user: 'Emma Wilson', text: 'This color scheme is perfect for our brand guidelines.', timestamp: '3:15 PM', avatar: 'EW' },
      { id: 2, user: 'David Kim', text: 'The typography hierarchy is much clearer now.', timestamp: '3:17 PM', avatar: 'DK' },
      { id: 3, user: 'Lisa Park', text: 'Maybe we could reduce the padding on mobile?', timestamp: '3:20 PM', avatar: 'LP' }
    ],
    [
      { id: 1, user: 'Tom Hanks', text: 'The card design is really modern. I like the subtle shadows.', timestamp: '4:00 PM', avatar: 'TH' },
      { id: 2, user: 'Chris Brown', text: 'This layout will work great for our content-heavy pages.', timestamp: '4:02 PM', avatar: 'CB' },
      { id: 3, user: 'Sarah Chen', text: 'The responsive behavior looks solid across devices.', timestamp: '4:05 PM', avatar: 'SC' }
    ],
    [
      { id: 1, user: 'Mike Johnson', text: 'The form design is much more user-friendly now.', timestamp: '4:30 PM', avatar: 'MJ' },
      { id: 2, user: 'Alex Rodriguez', text: 'Great use of whitespace. It feels less cluttered.', timestamp: '4:32 PM', avatar: 'AR' },
      { id: 3, user: 'Emma Wilson', text: 'The error states are handled really well here.', timestamp: '4:35 PM', avatar: 'EW' }
    ],
    [
      { id: 1, user: 'David Kim', text: 'This dashboard layout is exactly what we needed.', timestamp: '5:00 PM', avatar: 'DK' },
      { id: 2, user: 'Lisa Park', text: 'The data visualization components look professional.', timestamp: '5:02 PM', avatar: 'LP' },
      { id: 3, user: 'Tom Hanks', text: 'Perfect balance between functionality and aesthetics.', timestamp: '5:05 PM', avatar: 'TH' }
    ]
  ];

  const { isFocusMode, selectedProject, getProjectData } = useFocus();
  const [messages, setMessages] = useState({
    general: [
      { id: 1, user: 'Sarah Chen', text: 'Good morning everyone! 👋', timestamp: '9:30 AM', avatar: 'SC' },
      { id: 2, user: 'Mike Johnson', text: 'Morning Sarah! How\'s the new project coming along?', timestamp: '9:32 AM', avatar: 'MJ' },
      { id: 3, user: 'Alex Rodriguez', text: 'I just pushed the latest updates to the staging environment', timestamp: '9:35 AM', avatar: 'AR' },
      { id: 4, user: 'Emma Wilson', text: 'Perfect timing! I was just about to test the new features', timestamp: '9:37 AM', avatar: 'EW' },
      { id: 5, user: 'David Kim', text: 'Don\'t forget we have the team standup at 10 AM', timestamp: '9:40 AM', avatar: 'DK' }
    ],
    random: [
      { id: 1, user: 'Tom Hanks', text: 'Anyone up for lunch at that new sushi place?', timestamp: '11:15 AM', avatar: 'TH' },
      { id: 2, user: 'Lisa Park', text: 'I\'m in! I heard they have amazing ramen too', timestamp: '11:17 AM', avatar: 'LP' },
      { id: 3, user: 'Chris Brown', text: 'Count me out, I brought leftovers today', timestamp: '11:20 AM', avatar: 'CB' }
    ],
    announcements: [
      { id: 1, user: 'HR Team', text: '📢 Reminder: Open enrollment for health benefits ends this Friday!', timestamp: '8:00 AM', avatar: 'HR' },
      { id: 2, user: 'IT Support', text: '🔧 Scheduled maintenance tonight from 2-4 AM. Some services may be temporarily unavailable.', timestamp: '2:30 PM', avatar: 'IT' }
    ],
    'project-alpha': [
      { id: 1, user: 'Project Lead', text: 'Welcome to the Alpha project channel! Let\'s keep all project-related discussions here.', timestamp: '10:00 AM', avatar: 'PL' },
      { id: 2, user: 'Dev Team', text: 'Sprint planning meeting notes have been uploaded to the shared drive', timestamp: '10:30 AM', avatar: 'DT' }
    ]
  });

  // Get project-specific data
  const projectData = selectedProject ? getProjectData(selectedProject.id) : null;
  const channels = projectData ? projectData.channels : [
    { id: 'general', name: 'general', unread: 0, threads: [] },
    { id: 'random', name: 'random', unread: 2, threads: [] },
    { id: 'announcements', name: 'announcements', unread: 0, threads: [] },
    { id: 'project-alpha', name: 'project-alpha', unread: 1, threads: [] }
  ];

  const addMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      user: 'You',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      avatar: 'YO'
    };
    
    setMessages(prev => ({
      ...prev,
      [currentChannel]: [...(prev[currentChannel] || []), newMessage]
    }));
  };

  const handleGlobalInputSubmit = (e) => {
    e.preventDefault();
    if (globalInputValue.trim() && !isGeneratingInterface) {
      // Set generating state for any prompt
      setIsGeneratingInterface(true);
      
      // Check if the input contains "mr" to trigger the loading sequence
      if (globalInputValue.toLowerCase().includes('mr')) {
        setShowLoadingBlobs(true);
      } else if (globalInputValue.toLowerCase().includes('mobile redesign')) {
        setUiVersion('mobile-redesign');
        // Reset input focus states to ensure correct placeholder shows
        setIsInputFocused(false);
        setIsInputHovered(false);
        // Start mobile elements animation after a brief delay
        setTimeout(() => {
          setMobileElementsAnimating(true);
        }, 50);
        // Reset generating state after UI change
        setTimeout(() => setIsGeneratingInterface(false), 100);
      } else if (globalInputValue.toLowerCase().includes('default') || globalInputValue.toLowerCase().includes('back to normal')) {
        setUiVersion('default');
        setMobileElementsAnimating(false);
        // Reset generating state after UI change
        setTimeout(() => setIsGeneratingInterface(false), 100);
      } else if (uiVersion === 'mobile-redesign') {
        // If we're in mobile redesign and user submits a prompt, show loading and transition to feedback view
        setShowLoadingBlobs(true);
      } else {
        // For other prompts, reset generating state after a delay
        setTimeout(() => setIsGeneratingInterface(false), 2000);
      }
      
      console.log('Global input submitted:', globalInputValue);
      setGlobalInputValue('');
    }
  };

  const handleGlobalInputChange = (e) => {
    setGlobalInputValue(e.target.value);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleInputMouseEnter = () => {
    setIsInputHovered(true);
  };

  const handleInputMouseLeave = () => {
    setIsInputHovered(false);
  };

  const handleStopGeneration = () => {
    setIsGeneratingInterface(false);
    setShowLoadingBlobs(false);
    setLoadingBlobsVisible(false);
    setIsFadingOut(false);
  };

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };


  useEffect(() => {
    if (!showLoadingBlobs) return;

    // For default view, we need the main element for fade-out
    // For mobile redesign view, we can show LoadingBlobs immediately
    const main = chatAppMainRef.current;
    
    if (uiVersion === 'default' && !main) return;

    // Start the CSS fade-out for both default and mobile redesign views
    setIsFadingOut(true);

    // Show LoadingBlobs after 1 second (when CSS transition completes)
    const showBlobsTimer = setTimeout(() => {
      setLoadingBlobsVisible(true);
    }, 100);

    // Determine which view to transition to based on current UI version
    const targetView = uiVersion === 'mobile-redesign' ? 'feedback' : 'mobile-redesign';
    
    // After 7 more seconds, show the target view
    const showTargetTimer = setTimeout(() => {
      setUiVersion(targetView);
      setShowLoadingBlobs(false);
      setLoadingBlobsVisible(false);
      setIsFadingOut(false);
      setIsMinimized(false);
      setIsGeneratingInterface(false);
      // Reset input focus states to ensure correct placeholder shows
      setIsInputFocused(false);
      setIsInputHovered(false);
      
      // Start mobile elements animation after a brief delay (only for mobile-redesign)
      if (targetView === 'mobile-redesign') {
        setTimeout(() => {
          setMobileElementsAnimating(true);
        }, 50);
      }
    }, 8000); // 1 second fade + 7 seconds wait for both views

    return () => {
      clearTimeout(showBlobsTimer);
      clearTimeout(showTargetTimer);
    };
  }, [showLoadingBlobs, uiVersion]);

  // Reset states when showLoadingBlobs changes
  useEffect(() => {
    if (!showLoadingBlobs) {
      setLoadingBlobsVisible(false);
      setIsFadingOut(false);
      // Don't reset mobileElementsAnimating here as it should persist after loading
    }
  }, [showLoadingBlobs]);

  // Animate placeholder dots when generating
  useEffect(() => {
    if (!isGeneratingInterface) return;

    const baseText = "Generating a new interface";
    const dots = ["", ".", "..", "..."];
    let dotIndex = 0;

    const interval = setInterval(() => {
      setAnimatedPlaceholder(baseText + dots[dotIndex]);
      dotIndex = (dotIndex + 1) % dots.length;
    }, 500);

    return () => clearInterval(interval);
  }, [isGeneratingInterface]);

  return (
    <div className={`chat-app ${isProjectModalOpen ? 'chat-app--modal-open' : ''}`}>
      {/* Loading Blobs Overlay */}
      {showLoadingBlobs && loadingBlobsVisible && (
        <div className="loading-blobs-overlay">
          <LoadingBlobs />
        </div>
      )}
      
      {/* DEFAULT UI VERSION */}
      {uiVersion === 'default' && (
        <div className="ui-version-default">
          <div className="chat-app-main" ref={chatAppMainRef}>
            <Sidebar
              channels={channels}
              currentChannel={currentChannel}
              onChannelChange={setCurrentChannel}
              onFocusButtonClick={() => setIsProjectModalOpen(true)}
              projectData={projectData}
              isMinimized={isMinimized}
              isFadingOut={isFadingOut}
            />
            {selectedProject ? (
              <ChatArea
                channel={currentChannel}
                messages={messages[currentChannel] || []}
                onSendMessage={addMessage}
                isMinimized={isMinimized}
                isFadingOut={isFadingOut}
              />
            ) : isFocusMode ? (
              <FocusMode
                onChannelChange={setCurrentChannel}
                currentChannel={currentChannel}
                isFadingOut={isFadingOut}
              />
            ) : (
              <ChatArea
                channel={currentChannel}
                messages={messages[currentChannel] || []}
                onSendMessage={addMessage}
                isMinimized={isMinimized}
                isFadingOut={isFadingOut}
              />
            )}
          </div>
        </div>
      )}

      {/* MOBILE REDESIGN FOCUSED UI VERSION */}
      {uiVersion === 'mobile-redesign' && (
        <div className="ui-version-mobile-redesign">
          <div className="mobile-redesign-layout">
            {/* Top Navigation Bar */}
            <div className={`mobile-nav-bar ${mobileElementsAnimating ? 'animated-in' : 'animating-in'} ${isFadingOut ? 'fading-out' : ''}`}>
              <div className="nav-left">
                <div className="workspace-info">
                  <Avatar userInitials="SF" size="medium" className="workspace-avatar" />
                  <div className="workspace-name">Acme</div>
                </div>
                <div className="nav-tabs">
                  <div className="nav-tab active">Mobile redesign files</div>
                  <div className="nav-tab dropd">CHANNELS ▾</div>
                  <div className="nav-tab dropd">PEOPLE ▾</div>
                </div>
              </div>
            </div>
            
            {/* Main Content Area */}
            <div className={`mobile-main-content ${mobileElementsAnimating ? 'animated-in' : 'animating-in'} ${isFadingOut ? 'fading-out' : ''}`}>
            
              
              <div className="file-display-area">
                {/* Large main file placeholder */}
                <div className="main-file-placeholder">
                  <img 
                    src={placeholderImages[selectedImageIndex]} 
                    alt={`Selected image ${selectedImageIndex + 1}`}
                    className="main-display-image"
                  />
                </div>
                
                {/* File thumbnails below */}
                <div className="file-thumbnails-row">
                  {placeholderImages.map((image, index) => (
                    <div 
                      key={index}
                      className={`file-thumbnail ${selectedImageIndex === index ? 'selected' : ''}`}
                      onClick={() => handleThumbnailClick(index)}
                    >
                      <img 
                        src={image} 
                        alt={`Thumbnail ${index + 1}`}
                        className="thumbnail-image"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FEEDBACK VIEW UI VERSION */}
      {uiVersion === 'feedback' && (
        <div className="ui-version-feedback">
          <div className="feedback-layout">
            {/* Top Navigation Bar */}
            <div className="mobile-nav-bar animated-in">
              <div className="nav-left">
                <div className="workspace-info">
                  <Avatar userInitials="SF" size="medium" className="workspace-avatar" />
                  <div className="workspace-name">Acme</div>
                </div>
                <div className="nav-tabs">
                  <div className="nav-tab active">Design feedback</div>
                  <div className="nav-tab dropd">CHANNELS ▾</div>
                  <div className="nav-tab dropd">PEOPLE ▾</div>
                </div>
              </div>
            </div>
            
            {/* Main Content Area with Flex Row Layout */}
            <div className="feedback-main-content">
              {/* Left side - Mobile main content */}
              <div className="mobile-main-content animated-in">
                <div className="file-display-area">
                  {/* Large main file placeholder */}
                  <div className="main-file-placeholder">
                    <img 
                      src={placeholderImages[selectedImageIndex]} 
                      alt={`Selected image ${selectedImageIndex + 1}`}
                      className="main-display-image"
                    />
                  </div>
                  
                  {/* File thumbnails below */}
                  <div className="file-thumbnails-row">
                    {placeholderImages.map((image, index) => (
                      <div 
                        key={index}
                        className={`file-thumbnail ${selectedImageIndex === index ? 'selected' : ''}`}
                        onClick={() => handleThumbnailClick(index)}
                      >
                        <img 
                          src={image} 
                          alt={`Thumbnail ${index + 1}`}
                          className="thumbnail-image"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right side - Comments section */}
              <div className="comments-section">
                <div className="comments-header">
                  <h3>Design Feedback</h3>
                  <div className="comments-count">{designComments[selectedImageIndex].length} comments</div>
                </div>
                <div className="comments-list">
                  {designComments[selectedImageIndex].map((comment) => (
                    <div key={comment.id} className="comment-item">
                      <div className="comment-avatar">
                        <Avatar userInitials={comment.avatar} size="small" />
                      </div>
                      <div className="comment-content">
                        <div className="comment-header">
                          <span className="comment-user">{comment.user}</span>
                          <span className="comment-timestamp">{comment.timestamp}</span>
                        </div>
                        <div className="comment-text">{comment.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Global Input Field - Always visible */}
      <div className={`global-input-container ${uiVersion === 'mobile-redesign' || uiVersion === 'feedback' ? 'mobile-redesign-input' : ''} ${isGeneratingInterface ? 'generating' : ''}`}>
        <form onSubmit={handleGlobalInputSubmit} className="global-input-form">
          <div 
            className={`global-input-wrapper ${uiVersion === 'mobile-redesign' || uiVersion === 'feedback' ? 'mobile-redesign-wrapper' : ''} ${isGeneratingInterface ? 'generating' : ''}`}
            onMouseEnter={handleInputMouseEnter}
            onMouseLeave={handleInputMouseLeave}
          >
            <div className="input-with-animated-placeholder">
              <input
                type="text"
                value={globalInputValue}
                onChange={handleGlobalInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                disabled={isGeneratingInterface}
                className={`global-input ${uiVersion === 'mobile-redesign' || uiVersion === 'feedback' ? 'mobile-redesign-input-field' : ''} ${isGeneratingInterface ? 'generating' : ''}`}
              />
              {!globalInputValue && !isGeneratingInterface && (
                <div className={`animated-placeholder ${(isInputFocused || isInputHovered) && (uiVersion === 'mobile-redesign' || uiVersion === 'feedback') ? 'interactive' : 'default'}`}>
                  <div className="placeholder-text default-text">
                    {uiVersion === 'mobile-redesign' ? "Focusing on the new mobile redesign" : 
                     uiVersion === 'feedback' ? "Reviewing design feedback" :
                     (selectedProject ? `Focusing on the ${selectedProject.name} project` : "What do you want to focus on?")}
                  </div>
                  <div className="placeholder-text interactive-text">
                    {uiVersion === 'mobile-redesign' || uiVersion === 'feedback' ? "What do you want to focus on?" : "What do you want to focus on?"}
                  </div>
                </div>
              )}
              {!globalInputValue && isGeneratingInterface && (
                <div className="generating-placeholder">
                  {animatedPlaceholder}
                </div>
              )}
            </div>
            <div className="global-input-actions">
              {isGeneratingInterface ? (
                <button 
                  type="button" 
                  className="stop-generation-btn"
                  onClick={handleStopGeneration}
                  title="Stop generation"
                >
                  <span className="icon">⏹</span>
                </button>
              ) : uiVersion === 'mobile-redesign' || uiVersion === 'feedback' ? (
                <button 
                  type="button" 
                  className="exit-mobile-redesign-btn"
                  onClick={() => setUiVersion('default')}
                  title="Exit mobile redesign mode"
                >
                  <span className="icon restore-text">Restore</span>
                </button>
              ) : globalInputValue.trim() ? (
                <button type="submit" className="global-input-button">
                  <span className="icon">➤</span>
                </button>
              ) : (
                <span></span>
              )}
            </div>
          </div>
        </form>
      </div>

      {isProjectModalOpen && (
        <ProjectSearchModal 
          isOpen={isProjectModalOpen}
          onClose={() => setIsProjectModalOpen(false)}
        />
      )}
    </div>
  );
}

function ChatApp() {
  return (
    <FocusProvider>
      <ChatAppContent />
    </FocusProvider>
  );
}

export default ChatApp;
