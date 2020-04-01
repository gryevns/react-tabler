import React from "react";
import cn from "classnames";
import { Variant } from "../common";

export interface AlertProps {
    children: React.ReactNode;
    variant: Variant;
    className?: string;
    dismiss?: boolean;
    style?: React.CSSProperties;
    visible?: boolean;
}

const Alert = ({
    children,
    className,
    dismiss = true,
    style,
    variant,
    visible = true,
}: AlertProps) => {
    const [isVisible, setVisible] = React.useState(visible);
    if (!isVisible) {
        return null;
    }
    const classes = cn(
        "alert",
        `alert-${variant}`,
        {
            "alert-dismissible": dismiss,
        },
        className,
    );
    const onClick = (e: React.MouseEvent) => {
        setVisible(false);
        e.preventDefault();
    };
    return (
        <div className={classes} style={style} role="alert">
            {dismiss && (
                <a
                    href="#"
                    className="close"
                    data-dismiss="alert"
                    aria-label="close"
                    onClick={onClick}
                >
                    &times;
                </a>
            )}
            {children}
        </div>
    );
};

export default Alert;
