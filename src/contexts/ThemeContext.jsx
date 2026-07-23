/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('default');

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === 'default' ? 'alternative' : 'default'
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
