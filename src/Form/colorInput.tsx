import React from "react";
import cn from "classnames";

import { Color } from "../common";

export interface ColorInputColor {
    color: Color;
    className?: string;
}

const ColorInputColor = ({ color, className }: ColorInputColor) => {
    const classes = cn("form-colorinput-color", `bg-${color}`, className);
    return <span className={classes} />;
};

const ColorInputEl = ({ ...props }: React.InputHTMLAttributes<HTMLElement>) => {
    return <input type="radio" {...props} className="form-colorinput-input" />;
};

export interface ColorInputLabel {
    children: React.ReactNode;
}

const ColorInputLabel = ({ children }: ColorInputLabel) => {
    return <label className="form-colorinput">{children}</label>;
};

const ColorInput = () => {};

ColorInput.Label = ColorInputLabel;
ColorInput.Input = ColorInputEl;
ColorInput.Color = ColorInputColor;

export default ColorInput;
