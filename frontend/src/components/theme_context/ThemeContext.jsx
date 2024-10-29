import {createContext, useContext, useState} from 'react';

export const ThemeContext = createContext();
// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
        document.body.className = !isDarkMode ? "dark-mode" : "light-mode";
    }
    return (
        <ThemeContext.Provider value={{isDarkMode, setIsDarkMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}
