import React, { createContext, useContext, useState,useEffect } from 'react';

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);


  
  useEffect(() => {
    // Get the current hour from the system time
    const currentHour = new Date().getHours();

    // Determine the initial theme based on the time (e.g., switch at 6 PM)
    setIsDarkTheme(currentHour >= 18 || currentHour < 6);
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme,toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
