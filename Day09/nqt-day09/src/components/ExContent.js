import React, { useState, createContext } from 'react';
import Info from './Info';

export const ThemeContext = createContext();

function Content() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ padding: '50px' }}>
        <button onClick={toggleTheme}>Toggle theme</button>
        <Info />
      </div>
    </ThemeContext.Provider>
  );
}

export default Content;