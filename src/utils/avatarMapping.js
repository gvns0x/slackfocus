// Avatar mapping utility to ensure consistent avatars across the application
import avatar01 from '../imgs/avatars/avatar_01.png';
import avatar02 from '../imgs/avatars/avatar_02.png';
import avatar03 from '../imgs/avatars/avatar_03.png';
import avatar04 from '../imgs/avatars/avatar_04.png';
import avatar05 from '../imgs/avatars/avatar_05.png';

// Map user initials to avatar images for consistency
export const avatarMapping = {
  'SC': avatar01, // Sarah Chen
  'MJ': avatar02, // Mike Johnson
  'AR': avatar03, // Alex Rodriguez
  'EW': avatar04, // Emma Wilson
  'DK': avatar05, // David Kim
  'TH': avatar01, // Tom Hanks (reusing avatar01)
  'LP': avatar02, // Lisa Park (reusing avatar02)
  'CB': avatar03, // Chris Brown (reusing avatar03)
  'HR': avatar04, // HR Team (reusing avatar04)
  'IT': avatar05, // IT Support (reusing avatar05)
  'PL': avatar01, // Project Lead (reusing avatar01)
  'DT': avatar02, // Dev Team (reusing avatar02)
  'YO': avatar03, // You (reusing avatar03)
  'SF': avatar04, // SlackFocus workspace (reusing avatar04)
};

// Function to get avatar for a user
export const getUserAvatar = (userInitials) => {
  return avatarMapping[userInitials] || avatar01; // Default to avatar01 if not found
};

// Function to get avatar for a user by name (for cases where we have full names)
export const getUserAvatarByName = (userName) => {
  // Extract initials from full name
  const initials = userName
    .split(' ')
    .map(name => name.charAt(0))
    .join('')
    .toUpperCase();
  
  return getUserAvatar(initials);
};
