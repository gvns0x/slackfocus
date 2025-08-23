import React from 'react';
import { getUserAvatar } from '../../utils/avatarMapping';
import './Avatar.css';

const Avatar = ({ userInitials, size = 'medium', className = '' }) => {
  const avatarSrc = getUserAvatar(userInitials);
  
  return (
    <div className={`avatar-container ${size} ${className}`}>
      <img 
        src={avatarSrc} 
        alt={`Avatar for ${userInitials}`}
        className="avatar-image"
      />
    </div>
  );
};

export default Avatar;
