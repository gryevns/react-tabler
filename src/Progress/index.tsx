import * as React from "react";
import cn from "classnames";

import { Color } from "../common";

export interface ProgressBarProps {
    className?: string;
    color?: Color;
    width?: number;
    indeterminate?: boolean;
    style?: React.CSSProperties;
}

const ProgressBar = ({
    className,
    color,
    indeterminate = false,
    width = 0,
    style,
    ...rest
}: ProgressBarProps) => {
    const classes = cn(
        "progress-bar",
        {
            [`bg-${color}`]: !!color,
            "progress-bar-indeterminate": indeterminate,
        },
        className,
    );
    return (
        <div
            className={classes}
            style={{ width: `${width}%`, ...style }}
            {...rest}
            role="progressbar"
            aria-valuenow={width}
            aria-valuemin={0}
            aria-valuemax={100}
        >
            <span className="sr-only">{width}% Complete</span>
        </div>
    );
};

export interface ProgressProps {
    className?: string;
    children?: React.ReactNode;
    card?: boolean;
    size?: "xs" | "sm" | "md";
}

function Progress({ className, children, card, size, ...rest }: ProgressProps) {
    const classes = cn(
        `progress`,
        { [`progress-${size}`]: !!size, "card-progress": card },
        className,
    );
    return (
        <div className={classes} {...rest}>
            {children}
        </div>
    );
}

Progress.Bar = ProgressBar;

export default Progress;
