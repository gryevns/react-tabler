import React from "react";
import cn from "classnames";

const InputGroupLink = ({
    children,
    ...props
}: React.AnchorHTMLAttributes<HTMLElement>) => (
    <a {...props} className="input-group-link">
        {children}
    </a>
);

export interface InputGroupTextProps {
    children: React.ReactNode;
}

const InputGroupText = ({ children }: InputGroupTextProps) => (
    <span className="input-group-text">{children}</span>
);

export interface InputGroupProps {
    children: React.ReactNode;
    className?: string;
    flat?: boolean;
}

const InputGroup = ({ children, className, flat }: InputGroupProps) => {
    const classes = cn("input-group", { "input-group-flat": !!flat }, className);
    return <div className={classes}>{children}</div>;
};

InputGroup.Text = InputGroupText;
InputGroup.Link = InputGroupLink;

export default InputGroup;
