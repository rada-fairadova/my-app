import React from 'react';
import type{ ThemeProps, ThemeType, ThemeColors } from '../types.ts';

const themeColors: Record<ThemeType, ThemeColors> = {
  light: {
    background: '#f5f5f5',
    text: '#333333',
    buttonBackground: '#f0f0f0',
    buttonText: '#333333',
    border: '#cccccc',
  },
  dark: {
    background: '#2d2d2d',
    text: '#f5f5f5',
    buttonBackground: '#333333',
    buttonText: '#ffffff',
    border: '#666666',
  },
};

interface ThemeContentProps extends ThemeProps {
  title: string;
  description: string;
}

const ThemeContent: React.FC<ThemeContentProps> = ({ 
  theme, 
  title, 
  description 
}) => {
  const colors = themeColors[theme];
  
  const containerStyle: React.CSSProperties = {
    backgroundColor: colors.background,
    color: colors.text,
    padding: '20px',
    borderRadius: '8px',
    border: `1px solid ${colors.border}`,
    margin: '20px 0',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={containerStyle}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Current theme: <strong>{theme}</strong></p>
    </div>
  );
};

ThemeContent.displayName = 'ThemeContent';

export default ThemeContent;
