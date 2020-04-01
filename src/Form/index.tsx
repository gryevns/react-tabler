import React from "react";
import cn from "classnames";

import Control from "./control";
import SelectGroup from "./selectGroup";

export interface FormGroupProps {
    children: React.ReactNode;
    className?: string;
}

const FormGroup = ({ children, className }: FormGroupProps) => {
    const classes = cn(className);
    return <div className={classes}>{children}</div>;
};

export interface FormLabelProps {
    children: React.ReactNode;
    className?: string;
    required?: boolean;
}

const FormLabel = ({ children, className, required }: FormLabelProps) => {
    const classes = cn("form-label", { required }, className);
    return <label className={classes}>{children}</label>;
};

export interface FormProps extends React.FormHTMLAttributes<HTMLElement> {}

const Form = ({ children, onSubmit, ...props }: FormProps) => (
    <form onSubmit={onSubmit} {...props}>
        {children}
    </form>
);

Form.Group = FormGroup;
Form.Label = FormLabel;

export default Form;
export { Control, SelectGroup };
