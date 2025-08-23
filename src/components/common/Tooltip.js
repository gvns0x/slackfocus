import React, { useState, useRef } from 'react';
import './Tooltip.css';

const Tooltip = ({ children, content, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const triggerRef = useRef(null);

  const handleMouseEnter = () => {
    console.log('Mouse enter - showing tooltip');
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    console.log('Mouse leave - hiding tooltip');
    setIsVisible(false);
  };

  return (
    <div
      ref={triggerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="tooltip-trigger"
      style={{ position: 'relative' }}
    >
      {children}
      {isVisible && (
        <div className={`tooltip tooltip-${position}`}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
