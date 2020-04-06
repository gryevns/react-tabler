import React from "react";

import { Control } from "../Form";
import ThemeProvider, { ThemeContext } from ".";

export default {
    title: "Theme",
};

export const Provider = () => {
    return (
        <ThemeProvider>
            <Control.Group toggle>
                <ThemeContext.Consumer>
                    {({ theme, toggleTheme }) => (
                        <>
                            <Control.Input type="checkbox" onChange={toggleTheme} />
                            <Control.Label>{theme}</Control.Label>
                        </>
                    )}
                </ThemeContext.Consumer>
            </Control.Group>
        </ThemeProvider>
    );
};
