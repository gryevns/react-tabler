import React from "react";
import cn from "classnames";
import { Color } from "../common";

export interface StepProps {
    active?: boolean;
    children?: React.ReactNode;
}

const Step = ({ active, children }: StepProps) => {
    const classes = cn("step-item", { active });
    return (
        <a href="#" className={classes}>
            {children}
        </a>
    );
};

export interface StepsProps {
    className?: string;
    children: React.ReactNode;
    color?: Color;
    numbers?: boolean;
}

const Steps = ({ className, children, color, numbers }: StepsProps) => {
    const classes = cn(
        "steps",
        {
            [`steps-${color}`]: !!color,
            "steps-counter": numbers,
        },
        className,
    );
    return <div className={classes}>{children}</div>;
};

Steps.Step = Step;

export default Steps;
