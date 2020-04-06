import React from "react";
import cn from "classnames";
import { Color } from "../common";

export interface StepProps extends React.AnchorHTMLAttributes<HTMLElement> {
    active?: boolean;
    children?: React.ReactNode;
}

const Step = React.forwardRef(
    (
        { active, children, ...props }: StepProps,
        ref: React.Ref<HTMLAnchorElement>,
    ) => {
        const classes = cn("step-item", { active });
        return (
            <a ref={ref} {...props} className={classes}>
                {children}
            </a>
        );
    },
);

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
