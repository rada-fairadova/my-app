import React, { useState, useRef } from 'react';
import type{ ThemeType } from './types.ts';
import ThemedButton from './components/ThemedButton';
import ThemeContent from './components/ThemeContent';
import { withTheme } from './hoc/withTheme';

const ThemedButtonWithTheme = withTheme(ThemedButton);
const ThemeContentWithTheme = withTheme(ThemeContent);

const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemeType>('light');

  const buttonRef = useRef<HTMLButtonElement>(null);
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  const handleButtonClick = () => {
    console.log('Кнопка нажата!');
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  };
  
  const appStyle: React.CSSProperties = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    minHeight: '100vh',
    backgroundColor: theme === 'light' ? '#ffffff' : '#1a1a1a',
    color: theme === 'light' ? '#000000' : '#ffffff',
    transition: 'all 0.3s ease',
  };
  
  return (
    <div style={appStyle}>
      <h1>Theme Management Demo</h1>
      <p>Current theme: <strong>{theme}</strong></p>
      
      <div style={{ margin: '20px 0' }}>
        <button 
          onClick={toggleTheme}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            marginBottom: '20px',
          }}
        >
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </div>
      
      <div>
        <h2>Component with Theme via HOC:</h2>

        <ThemedButtonWithTheme
          ref={buttonRef}
          theme={theme}
          onClick={handleButtonClick}
          style={{ marginRight: '10px' }}
        >
          Themed Button
        </ThemedButtonWithTheme>

        <ThemeContentWithTheme
          theme={theme}
          title="Theme Example"
          description="This component receives theme via HOC and changes its appearance accordingly."
        />
        
        <ThemedButtonWithTheme
          theme={theme}
          onClick={() => alert('Another themed button clicked!')}
        >
          Another Button
        </ThemedButtonWithTheme>
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <h3>Instructions:</h3>
        <ul>
          <li>Click the "Switch Theme" button to toggle between light and dark themes</li>
          <li>Observe how both components change their appearance</li>
          <li>Check React DevTools to see the displayName with HOC prefix</li>
          <li>The button supports ref forwarding through the HOC</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
