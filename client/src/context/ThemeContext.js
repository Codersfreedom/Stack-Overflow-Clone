import React, { createContext, useContext, useState,useEffect } from 'react';

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);


  
  useEffect(() => {

    // Getting the current hour from the system time
    const currentHour = new Date().getHours();

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
