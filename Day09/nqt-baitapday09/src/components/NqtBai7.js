import React, { createContext, useContext, useState } from 'react';

// Tạo Context cho theme
export const ThemeContext = createContext();

export function TvcThemedComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ 
      padding: "20px", 
      backgroundColor: theme === "light" ? "#fff" : "#333", 
      color: theme === "light" ? "#000" : "#fff" 
    }}>
      <h2>Chế độ hiện tại: {theme}</h2>
      <button onClick={toggleTheme}>Chuyển đổi theme</button>
    </div>
  );
}

// Provider để quản lý theme
export default function TvcThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
