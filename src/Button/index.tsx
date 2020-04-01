import React from "react";
import cn from "classnames";
import { Color, Variant } from "../common";

export interface ButtonListProps {
    className?: string;
    children: React.ReactNode;
}

const ButtonList = ({ className, children }: ButtonListProps) => {
    const classes = cn(`btn-list`, className);
    return <div className={classes}>{children}</div>;
};

export type Size = "sm" | "md" | "lg";

interface ButtonInjectedProps {
    className: string;
    children: React.ReactNode;
    onClick: (e: React.MouseEvent) => any;
    style: React.CSSProperties;
}

interface ButtonProps {
    className?: string;
    render: (props: ButtonInjectedProps) => JSX.Element;
    children?: React.ReactNode;
    onClick?: (e: React.MouseEvent) => any;
    size?: Size;
    outline?: boolean;
    link?: boolean;
    icon?: boolean;
    block?: boolean;
    disabled?: boolean;
    color?: Color;
    variant?: Variant | "link";
    square?: boolean;
    pill?: boolean;
    loading?: boolean;
    style?: React.CSSProperties;
}

function Button({
    color,
    children,
    className,
    onClick,
    render,
    size,
    icon,
    outline,
    link,
    disabled,
    variant,
    square,
    pill,
    loading,
    block,
    style,
}: ButtonProps) {
    const classes = cn(
        {
            btn: true,
            [`btn-${size}`]: !!size,
            [`btn-block`]: block,
            [`btn-outline-${variant}`]: outline && !!variant,
            [`btn-link`]: link,
            disabled: disabled,
            [`btn-${color}`]: !!color && !outline,
            [`btn-${variant}`]: !!variant && !outline,
            "btn-square": square,
            "btn-pill": pill,
            "btn-icon": icon,
            "btn-loading": loading,
        },
        className,
    );
    return render({ className: classes, children, onClick, style });
}

const defaultProps: Pick<ButtonProps, "render"> = {
    render: props => <button {...props} />,
};

Button.defaultProps = defaultProps;

Button.List = ButtonList;

export default Button;
