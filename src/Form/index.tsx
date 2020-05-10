import React from "react";
import cn from "classnames";

interface FormGroupProps {
    children: React.ReactNode;
    className?: string;
}

const FormGroup = ({ children, className }: FormGroupProps) => {
    const classes = cn(className);
    return <div className={classes}>{children}</div>;
};

interface FormLabelProps {
    children: React.ReactNode;
    className?: string;
    required?: boolean;
}

const FormLabel = ({ children, className, required }: FormLabelProps) => {
    const classes = cn("form-label", { required }, className);
    return <label className={classes}>{children}</label>;
};

interface FormFieldsetProps {
    children: React.ReactNode;
}

const FormFieldset = ({ children }: FormFieldsetProps) => {
    return <fieldset className="form-fieldset">{children}</fieldset>;
};

interface FormProps extends React.FormHTMLAttributes<HTMLElement> {}

export const Form = ({ children, onSubmit, ...props }: FormProps) => (
    <form onSubmit={onSubmit} {...props}>
        {children}
    </form>
);

Form.Group = FormGroup;
Form.Label = FormLabel;
Form.Fieldset = FormFieldset;

export default Form;
