import React from "react";
import cn from "classnames";
import { Color } from "../common";

export interface SpinnerProps {
    className?: string;
    color?: Color;
    size?: "sm";
    grow?: boolean;
}

const Spinner = ({ className, color, size, grow = false }: SpinnerProps) => {
    const classes = cn(
        grow ? "spinner-grow" : "spinner-border",
        {
            [`text-${color}`]: !!color,
            [`spinner-border-${size}`]: !!size,
        },
        className,
    );
    return <div className={classes} role="status"></div>;
};

export default Spinner;
