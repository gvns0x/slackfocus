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
    
    // Text Colors
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.8)',
      tertiary: 'rgba(255, 255, 255, 0.6)',
      muted: 'rgba(255, 255, 255, 0.4)',
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
  
  // Typography
  typography: {
    fontFamily: {
      primary: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      mono: '"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", monospace',
    },
    
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
    },
    
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
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
    
    --color-text-primary: ${designSystem.colors.text.primary};
    --color-text-secondary: ${designSystem.colors.text.secondary};
    --color-text-tertiary: ${designSystem.colors.text.tertiary};
    --color-text-muted: ${designSystem.colors.text.muted};
    
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

