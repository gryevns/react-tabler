import React from "react";
import cn from "classnames";

const SelectGroupCheck = ({}) => <span className="form-selectgroup-check"></span>;

export interface SelectGroupBoxProps {
    children: React.ReactNode;
    className?: string;
}

const SelectGroupBox = ({ children, className }: SelectGroupBoxProps) => {
    const classes = cn("form-selectgroup-box", className);
    return <span className={classes}>{children}</span>;
};

export interface SelectGroupInputProps
    extends React.InputHTMLAttributes<HTMLElement> {}

const SelectGroupInput = ({ ...props }: SelectGroupInputProps) => {
    return <input {...props} className="form-selectgroup-input" />;
};

export interface SelectGroupItemProps {
    children: React.ReactNode;
    className?: string;
}

const SelectGroupItem = ({ children, className }: SelectGroupItemProps) => {
    const classes = cn("form-selectgroup-item", className);
    return <label className={classes}>{children}</label>;
};

export interface SelectGroupProps {
    boxes?: boolean;
    children: React.ReactNode;
    className?: string;
}

const SelectGroup = ({ children, boxes, className }: SelectGroupProps) => {
    const classes = cn(
        "form-selectgroup",
        { "form-selectgroup-boxes": boxes },
        className,
    );
    return <div className={classes}>{children}</div>;
};

SelectGroup.Item = SelectGroupItem;
SelectGroup.Input = SelectGroupInput;
SelectGroup.Box = SelectGroupBox;
SelectGroup.Check = SelectGroupCheck;

export default SelectGroup;
