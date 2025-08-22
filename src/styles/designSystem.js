// Futuristic Iridescent Design System
export const designSystem = {
  // Color Palette
  colors: {
    // Backgrounds
    background: {
      primary: '#000000',
      secondary: '#0a0a0a',
      tertiary: '#111111',
      glass: 'rgba(255, 255, 255, 0.05)',
      glassHover: 'rgba(255, 255, 255, 0.08)',
      glassActive: 'rgba(255, 255, 255, 0.12)',
    },
    
    // Iridescent Accents
    iridescent: {
      cyan: '#00ffff',
      magenta: '#ff00ff',
      yellow: '#ffff00',
      orange: '#ff6600',
      blue: '#0066ff',
      purple: '#6600ff',
      green: '#00ff66',
    },
    
    // Text Colors - Updated according to styleguide
    text: {
      primary: '#000000', // 100% opacity for titles
      secondary: 'rgba(0, 0, 0, 0.8)', // 80% opacity for body text
      tertiary: 'rgba(0, 0, 0, 0.6)',
      muted: 'rgba(0, 0, 0, 0.4)',
      // Legacy white text colors for dark themes
      white: {
        primary: '#ffffff',
        secondary: 'rgba(255, 255, 255, 0.8)',
        tertiary: 'rgba(255, 255, 255, 0.6)',
        muted: 'rgba(255, 255, 255, 0.4)',
      }
    },
    
    // Gradients
    gradients: {
      iridescent: 'linear-gradient(135deg, #00ffff 0%, #ff00ff 25%, #ffff00 50%, #ff6600 75%, #0066ff 100%)',
      cyanMagenta: 'linear-gradient(135deg, #00ffff 0%, #ff00ff 100%)',
      bluePurple: 'linear-gradient(135deg, #0066ff 0%, #6600ff 100%)',
      glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
    },
    
    // Borders and Shadows
    borders: {
      glass: 'rgba(255, 255, 255, 0.1)',
      iridescent: 'rgba(0, 255, 255, 0.3)',
      glow: 'rgba(0, 255, 255, 0.5)',
    },
    
    shadows: {
      glass: '0 8px 32px rgba(0, 0, 0, 0.3)',
      iridescent: '0 0 20px rgba(0, 255, 255, 0.3)',
      deep: '0 20px 40px rgba(0, 0, 0, 0.5)',
    }
  },
  
  // Typography - Updated according to styleguide
  typography: {
    fontFamily: {
      primary: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      mono: '"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", monospace',
    },
    
    fontSize: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px - Base size for body text and titles
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
    },
    
    fontWeight: {
      light: 300,
      normal: 400, // Regular weight for body text
      medium: 500,
      semibold: 600,
      bold: 700, // Bold weight for titles
    },
    
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },

    // Typography Styles according to styleguide
    styles: {
      // Body text: 14px regular, #000 with 80% opacity
      body: {
        fontSize: '14px',
        fontWeight: 400,
        color: 'rgba(0, 0, 0, 0.8)',
        lineHeight: 1.5,
      },
      
      // Titles: 14px bold, #000, 100% opacity
      title: {
        fontSize: '14px',
        fontWeight: 700,
        color: '#000000',
        lineHeight: 1.25,
      },
      
      // Section headers (CHANNELS, DIRECT MESSAGES): 11px semibold, uppercase, letter-spacing
      sectionHeader: {
        fontSize: '11px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        color: '#6c757d',
        lineHeight: 1.2,
      },
      
      // Channel names: 14px medium weight
      channelName: {
        fontSize: '14px',
        fontWeight: 500,
        color: '#495057',
        lineHeight: 1.4,
      },
      
      // User names: 13px medium weight
      userName: {
        fontSize: '13px',
        fontWeight: 500,
        color: '#495057',
        lineHeight: 1.4,
      },
      
      // Workspace name: 16px semibold
      workspaceName: {
        fontSize: '16px',
        fontWeight: 600,
        color: '#333333',
        lineHeight: 1.25,
      },
      
      // Modal titles: 18px bold
      modalTitle: {
        fontSize: '18px',
        fontWeight: 700,
        color: '#000000',
        lineHeight: 1.2,
      },
      
      // Topic names: 16px semibold
      topicName: {
        fontSize: '16px',
        fontWeight: 600,
        color: '#000000',
        lineHeight: 1.25,
      },
      
      // Topic descriptions: 14px regular
      topicDescription: {
        fontSize: '14px',
        fontWeight: 400,
        color: 'rgba(0, 0, 0, 0.8)',
        lineHeight: 1.5,
      }
    }
  },
  
  // Spacing
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  
  // Border Radius
  borderRadius: {
    none: '0',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px',
  },
  
  // Transitions
  transitions: {
    fast: '0.15s ease-out',
    normal: '0.25s ease-out',
    slow: '0.4s ease-out',
    bounce: '0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  
  // Effects
  effects: {
    glass: `
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
    `,
    
    iridescentGlow: `
      box-shadow: 
        0 0 20px rgba(0, 255, 255, 0.3),
        0 0 40px rgba(255, 0, 255, 0.2),
        0 0 60px rgba(255, 255, 0, 0.1);
    `,
    
    glassHover: `
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(0, 255, 255, 0.3);
      transform: translateY(-2px);
      box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.3),
        0 0 20px rgba(0, 255, 255, 0.2);
    `,
    
    focusRing: `
      outline: none;
      box-shadow: 
        0 0 0 2px rgba(0, 255, 255, 0.5),
        0 0 20px rgba(0, 255, 255, 0.3);
    `,
  }
};

// CSS Custom Properties for easy use
export const cssVariables = `
  :root {
    /* Colors */
    --color-bg-primary: ${designSystem.colors.background.primary};
    --color-bg-secondary: ${designSystem.colors.background.secondary};
    --color-bg-tertiary: ${designSystem.colors.background.tertiary};
    --color-bg-glass: ${designSystem.colors.background.glass};
    --color-bg-glass-hover: ${designSystem.colors.background.glassHover};
    --color-bg-glass-active: ${designSystem.colors.background.glassActive};
    
    --color-iridescent-cyan: ${designSystem.colors.iridescent.cyan};
    --color-iridescent-magenta: ${designSystem.colors.iridescent.magenta};
    --color-iridescent-yellow: ${designSystem.colors.iridescent.yellow};
    --color-iridescent-orange: ${designSystem.colors.iridescent.orange};
    --color-iridescent-blue: ${designSystem.colors.iridescent.blue};
    --color-iridescent-purple: ${designSystem.colors.iridescent.purple};
    --color-iridescent-green: ${designSystem.colors.iridescent.green};
    
    /* Updated Text Colors according to styleguide */
    --color-text-primary: ${designSystem.colors.text.primary};
    --color-text-secondary: ${designSystem.colors.text.secondary};
    --color-text-tertiary: ${designSystem.colors.text.tertiary};
    --color-text-muted: ${designSystem.colors.text.muted};
    
    /* Legacy white text colors for dark themes */
    --color-text-white-primary: ${designSystem.colors.text.white.primary};
    --color-text-white-secondary: ${designSystem.colors.text.white.secondary};
    --color-text-white-tertiary: ${designSystem.colors.text.white.tertiary};
    --color-text-white-muted: ${designSystem.colors.text.white.muted};
    
    --color-border-glass: ${designSystem.colors.borders.glass};
    --color-border-iridescent: ${designSystem.colors.borders.iridescent};
    --color-border-glow: ${designSystem.colors.borders.glow};
    
    --shadow-glass: ${designSystem.colors.shadows.glass};
    --shadow-iridescent: ${designSystem.colors.shadows.iridescent};
    --shadow-deep: ${designSystem.colors.shadows.deep};
    
    /* Typography */
    --font-family-primary: ${designSystem.typography.fontFamily.primary};
    --font-family-mono: ${designSystem.typography.fontFamily.mono};
    
    --font-size-xs: ${designSystem.typography.fontSize.xs};
    --font-size-sm: ${designSystem.typography.fontSize.sm};
    --font-size-base: ${designSystem.typography.fontSize.base};
    --font-size-lg: ${designSystem.typography.fontSize.lg};
    --font-size-xl: ${designSystem.typography.fontSize.xl};
    --font-size-2xl: ${designSystem.typography.fontSize['2xl']};
    --font-size-3xl: ${designSystem.typography.fontSize['3xl']};
    --font-size-4xl: ${designSystem.typography.fontSize['4xl']};
    
    --font-weight-light: ${designSystem.typography.fontWeight.light};
    --font-weight-normal: ${designSystem.typography.fontWeight.normal};
    --font-weight-medium: ${designSystem.typography.fontWeight.medium};
    --font-weight-semibold: ${designSystem.typography.fontWeight.semibold};
    --font-weight-bold: ${designSystem.typography.fontWeight.bold};
    
    --line-height-tight: ${designSystem.typography.lineHeight.tight};
    --line-height-normal: ${designSystem.typography.lineHeight.normal};
    --line-height-relaxed: ${designSystem.typography.lineHeight.relaxed};
    
    /* Typography Styles */
    --text-body-font-size: ${designSystem.typography.styles.body.fontSize};
    --text-body-font-weight: ${designSystem.typography.styles.body.fontWeight};
    --text-body-color: ${designSystem.typography.styles.body.color};
    --text-body-line-height: ${designSystem.typography.styles.body.lineHeight};
    
    --text-title-font-size: ${designSystem.typography.styles.title.fontSize};
    --text-title-font-weight: ${designSystem.typography.styles.title.fontWeight};
    --text-title-color: ${designSystem.typography.styles.title.color};
    --text-title-line-height: ${designSystem.typography.styles.title.lineHeight};
    
    --text-section-header-font-size: ${designSystem.typography.styles.sectionHeader.fontSize};
    --text-section-header-font-weight: ${designSystem.typography.styles.sectionHeader.fontWeight};
    --text-section-header-text-transform: ${designSystem.typography.styles.sectionHeader.textTransform};
    --text-section-header-letter-spacing: ${designSystem.typography.styles.sectionHeader.letterSpacing};
    --text-section-header-color: ${designSystem.typography.styles.sectionHeader.color};
    --text-section-header-line-height: ${designSystem.typography.styles.sectionHeader.lineHeight};
    
    --text-channel-name-font-size: ${designSystem.typography.styles.channelName.fontSize};
    --text-channel-name-font-weight: ${designSystem.typography.styles.channelName.fontWeight};
    --text-channel-name-color: ${designSystem.typography.styles.channelName.color};
    --text-channel-name-line-height: ${designSystem.typography.styles.channelName.lineHeight};
    
    --text-user-name-font-size: ${designSystem.typography.styles.userName.fontSize};
    --text-user-name-font-weight: ${designSystem.typography.styles.userName.fontWeight};
    --text-user-name-color: ${designSystem.typography.styles.userName.color};
    --text-user-name-line-height: ${designSystem.typography.styles.userName.lineHeight};
    
    --text-workspace-name-font-size: ${designSystem.typography.styles.workspaceName.fontSize};
    --text-workspace-name-font-weight: ${designSystem.typography.styles.workspaceName.fontWeight};
    --text-workspace-name-color: ${designSystem.typography.styles.workspaceName.color};
    --text-workspace-name-line-height: ${designSystem.typography.styles.workspaceName.lineHeight};
    
    --text-modal-title-font-size: ${designSystem.typography.styles.modalTitle.fontSize};
    --text-modal-title-font-weight: ${designSystem.typography.styles.modalTitle.fontWeight};
    --text-modal-title-color: ${designSystem.typography.styles.modalTitle.color};
    --text-modal-title-line-height: ${designSystem.typography.styles.modalTitle.lineHeight};
    
    --text-topic-name-font-size: ${designSystem.typography.styles.topicName.fontSize};
    --text-topic-name-font-weight: ${designSystem.typography.styles.topicName.fontWeight};
    --text-topic-name-color: ${designSystem.typography.styles.topicName.color};
    --text-topic-name-line-height: ${designSystem.typography.styles.topicName.lineHeight};
    
    --text-topic-description-font-size: ${designSystem.typography.styles.topicDescription.fontSize};
    --text-topic-description-font-weight: ${designSystem.typography.styles.topicDescription.fontWeight};
    --text-topic-description-color: ${designSystem.typography.styles.topicDescription.color};
    --text-topic-description-line-height: ${designSystem.typography.styles.topicDescription.lineHeight};
    
    /* Spacing */
    --spacing-xs: ${designSystem.spacing.xs};
    --spacing-sm: ${designSystem.spacing.sm};
    --spacing-md: ${designSystem.spacing.md};
    --spacing-lg: ${designSystem.spacing.lg};
    --spacing-xl: ${designSystem.spacing.xl};
    --spacing-2xl: ${designSystem.spacing['2xl']};
    --spacing-3xl: ${designSystem.spacing['3xl']};
    
    /* Border Radius */
    --radius-none: ${designSystem.borderRadius.none};
    --radius-sm: ${designSystem.borderRadius.sm};
    --radius-md: ${designSystem.borderRadius.md};
    --radius-lg: ${designSystem.borderRadius.lg};
    --radius-xl: ${designSystem.borderRadius.xl};
    --radius-2xl: ${designSystem.borderRadius['2xl']};
    --radius-full: ${designSystem.borderRadius.full};
    
    /* Transitions */
    --transition-fast: ${designSystem.transitions.fast};
    --transition-normal: ${designSystem.transitions.normal};
    --transition-slow: ${designSystem.transitions.slow};
    --transition-bounce: ${designSystem.transitions.bounce};
  }
`;

// Utility classes for typography
export const typographyClasses = `
  /* Body Text - 14px regular, #000 with 80% opacity */
  .text-body {
    font-size: var(--text-body-font-size);
    font-weight: var(--text-body-font-weight);
    color: var(--text-body-color);
    line-height: var(--text-body-line-height);
  }
  
  /* Titles - 14px bold, #000, 100% opacity */
  .text-title {
    font-size: var(--text-title-font-size);
    font-weight: var(--text-title-font-weight);
    color: var(--text-title-color);
    line-height: var(--text-title-line-height);
  }
  
  /* Section Headers (CHANNELS, DIRECT MESSAGES) - 11px semibold, uppercase, letter-spacing */
  .text-section-header {
    font-size: var(--text-section-header-font-size);
    font-weight: var(--text-section-header-font-weight);
    text-transform: var(--text-section-header-text-transform);
    letter-spacing: var(--text-section-header-letter-spacing);
    color: var(--text-section-header-color);
    line-height: var(--text-section-header-line-height);
  }
  
  /* Channel Names - 14px medium weight */
  .text-channel-name {
    font-size: var(--text-channel-name-font-size);
    font-weight: var(--text-channel-name-font-weight);
    color: var(--text-channel-name-color);
    line-height: var(--text-channel-name-line-height);
  }
  
  /* User Names - 13px medium weight */
  .text-user-name {
    font-size: var(--text-user-name-font-size);
    font-weight: var(--text-user-name-font-weight);
    color: var(--text-user-name-color);
    line-height: var(--text-user-name-line-height);
  }
  
  /* Workspace Name - 16px semibold */
  .text-workspace-name {
    font-size: var(--text-workspace-name-font-size);
    font-weight: var(--text-workspace-name-font-weight);
    color: var(--text-workspace-name-color);
    line-height: var(--text-workspace-name-line-height);
  }
  
  /* Modal Titles - 18px bold */
  .text-modal-title {
    font-size: var(--text-modal-title-font-size);
    font-weight: var(--text-modal-title-font-weight);
    color: var(--text-modal-title-color);
    line-height: var(--text-modal-title-line-height);
  }
  
  /* Topic Names - 16px semibold */
  .text-topic-name {
    font-size: var(--text-topic-name-font-size);
    font-weight: var(--text-topic-name-font-weight);
    color: var(--text-topic-name-color);
    line-height: var(--text-topic-name-line-height);
  }
  
  /* Topic Descriptions - 14px regular */
  .text-topic-description {
    font-size: var(--text-topic-description-font-size);
    font-weight: var(--text-topic-description-font-weight);
    color: var(--text-topic-description-color);
    line-height: var(--text-topic-description-line-height);
  }
`;

