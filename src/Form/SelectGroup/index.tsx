import React from "react";
import cn from "classnames";

export interface SelectGroupCheckProps {
    className?: string;
}

const SelectGroupCheck = ({ className }: SelectGroupCheckProps) => {
    const classes = cn("form-selectgroup-check", className);
    return <span className={classes}></span>;
};

export interface SelectGroupBoxProps {
    children: React.ReactNode;
    className?: string;
}

const SelectGroupBox = ({ children, className }: SelectGroupBoxProps) => {
    const classes = cn("form-selectgroup-box", className);
    return <span className={classes}>{children}</span>;
};

export interface SelectGroupLabelProps {
    children: React.ReactNode;
}

const SelectGroupLabel = ({ children }: SelectGroupLabelProps) => (
    <span className="form-selectgroup-label">{children}</span>
);

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
    pills?: boolean;
}

const SelectGroup = ({ children, boxes, className, pills }: SelectGroupProps) => {
    const classes = cn(
        "form-selectgroup",
        { "form-selectgroup-boxes": boxes, "form-selectgroup-pills": pills },
        className,
    );
    return <div className={classes}>{children}</div>;
};

SelectGroup.Item = SelectGroupItem;
SelectGroup.Input = SelectGroupInput;
SelectGroup.Label = SelectGroupLabel;
SelectGroup.Box = SelectGroupBox;
SelectGroup.Check = SelectGroupCheck;

export default SelectGroup;
