import React from "react";
import cn from "classnames";

export type Theme = "light" | "dark";

interface ContextState {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = React.createContext({
    theme: "light",
} as ContextState);

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = React.useState<Theme>("light");
    const [bodyClasses, setBodyClasses] = React.useState("");
    const bodyElement = document.getElementsByTagName("BODY")[0];
    const toggleTheme = () => {
        const body = bodyElement;
        const isDark = theme === "dark";
        body.className = cn(bodyClasses, { "theme-dark": !isDark });
        setTheme(isDark ? "light" : "dark");
    };
    const state = {
        theme,
        toggleTheme,
    };
    React.useEffect(() => {
        setBodyClasses(bodyElement.className);
        return () => {
            bodyElement.className = bodyClasses;
        };
    }, []);
    return <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
