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

export interface InputGroupAppendProps {
    children: React.ReactNode;
}

const InputGroupAppend = ({ children }: InputGroupAppendProps) => (
    <div className="input-group-append">{children}</div>
);

export interface InputGroupPrependProps {
    children: React.ReactNode;
}

const InputGroupPrepend = ({ children }: InputGroupPrependProps) => (
    <div className="input-group-prepend">{children}</div>
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

InputGroup.Prepend = InputGroupPrepend;
InputGroup.Prepend = InputGroupPrepend;
InputGroup.Append = InputGroupAppend;
InputGroup.Text = InputGroupText;
InputGroup.Link = InputGroupLink;

export default InputGroup;
