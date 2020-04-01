import React from "react";
import cn from "classnames";

export interface ControlFeedbackProps {
    children: React.ReactNode;
}

const ControlFeedback = ({ children }: ControlFeedbackProps) => (
    <div className="invalid-feedback">{children}</div>
);

export interface ControlGroupProps {
    children: React.ReactNode;
    className?: string;
    inline?: boolean;
    toggle?: boolean;
}

const ControlGroup = ({
    children,
    className,
    inline,
    toggle,
}: ControlGroupProps) => {
    const classes = cn(
        "form-check",
        { "form-check-inline": inline, "form-switch": toggle },
        className,
    );
    return <label className={classes}>{children}</label>;
};

export interface ControlSelectProps
    extends React.InputHTMLAttributes<HTMLSelectElement> {
    className?: string;
}

const ControlSelect = React.forwardRef(
    (
        { className, children, ...props }: ControlSelectProps,
        ref: React.Ref<HTMLSelectElement>,
    ) => {
        const classes = cn("form-control form-select", className);
        return (
            <select ref={ref} {...props} className={classes}>
                {children}
            </select>
        );
    },
);

export interface ControlTextareaProps
    extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
}

const ControlTextarea = React.forwardRef(
    (
        { className, ...props }: ControlTextareaProps,
        ref: React.Ref<HTMLTextAreaElement>,
    ) => {
        const classes = cn("form-control", className);
        return <textarea ref={ref} {...props} className={classes}></textarea>;
    },
);

export interface ControlLabelProps {
    children: React.ReactNode;
    className?: string;
}

const ControlLabel = ({ children, className }: ControlLabelProps) => {
    const classes = cn("form-check-label", className);
    return <div className={classes}>{children}</div>;
};

export interface ControlProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    rounded?: boolean;
    flush?: boolean;
    valid?: boolean;
    outline?: boolean;
    // size?: "sm" | "md" | "lg";
    style?: React.CSSProperties;
}

const ControlInput = React.forwardRef(
    (
        { className, rounded, flush, valid, outline, ...props }: ControlProps,
        ref: React.Ref<HTMLInputElement>,
    ) => {
        const controlClassName = () => {
            switch (props.type) {
                case "radio":
                    return "form-check-input";
                case "checkbox":
                    return "form-check-input";
                case "range":
                    return "form-range";
                default:
                    return "form-control";
            }
        };
        const options = {
            "form-control-rounded": rounded,
            "form-control-flush": flush,
            "is-valid": valid === true,
            "is-invalid": valid === false,
            "is-valid-lite": outline === false,
            // "form-control-color": type === "color",
            // [`form-control-${size}`]: !!size,
        };
        const classes = cn(controlClassName(), options, className);
        return <input ref={ref} {...props} className={classes} />;
    },
);

const Control = () => {};

Control.Input = ControlInput;
Control.Textarea = ControlTextarea;
Control.Select = ControlSelect;
Control.Label = ControlLabel;
Control.Group = ControlGroup;
Control.Feedback = ControlFeedback;

export default Control;
