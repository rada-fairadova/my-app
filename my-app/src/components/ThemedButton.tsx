import React, { forwardRef } from 'react';
import type{ ThemeProps, ThemeType, ThemeColors } from '../types.ts';

const themeColors: Record<ThemeType, ThemeColors> = {
  light: {
    background: '#ffffff',
    text: '#000000',
    buttonBackground: '#f0f0f0',
    buttonText: '#333333',
    border: '#cccccc',
  },
  dark: {
    background: '#1a1a1a',
    text: '#ffffff',
    buttonBackground: '#333333',
    buttonText: '#ffffff',
    border: '#666666',
  },
};

interface ThemedButtonProps extends ThemeProps {
  onClick?: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const ThemedButton = forwardRef<HTMLButtonElement, ThemedButtonProps>(
  ({ theme, onClick, children, style = {} }, ref) => {
    const colors = themeColors[theme];
    
    const buttonStyle: React.CSSProperties = {
      backgroundColor: colors.buttonBackground,
      color: colors.buttonText,
      border: `1px solid ${colors.border}`,
      padding: '10px 20px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'all 0.3s ease',
      ...style,
    };

    return (
      <button
        ref={ref}
        onClick={onClick}
        style={buttonStyle}
        data-theme={theme}
      >
        {children}
      </button>
    );
  }
);

ThemedButton.displayName = 'ThemedButton';

export default ThemedButton;
