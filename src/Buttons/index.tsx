import React from "react";
import cn from "classnames";
import { Color, Variant } from "../common";

export interface ListProps {
    className?: string;
    children: React.ReactNode;
}

export const List = ({ className, children }: ListProps) => {
    const classes = cn(`btn-list`, className);
    return <div className={classes}>{children}</div>;
};

export type Size = "sm" | "md" | "lg";

interface ButtonProps {
    className?: string;
    children?: React.ReactNode;
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
    social?: string;
}

const getClassName = ({
    size,
    block,
    variant,
    outline,
    link,
    disabled,
    color,
    pill,
    icon,
    loading,
    square,
    social,
    className,
}: ButtonProps) => {
    const classes = cn(
        {
            btn: true,
            [`btn-${size}`]: !!size,
            [`btn-block`]: block,
            [`btn-outline-${variant}`]: outline && !!variant,
            [`btn-link`]: link,
            disabled: disabled,
            [`btn-${social}`]: !!social,
            [`btn-${color}`]: !!color && !outline,
            [`btn-${variant}`]: !!variant && !outline,
            "btn-square": square,
            "btn-pill": pill,
            "btn-icon": icon,
            "btn-loading": loading,
        },
        className,
    );
    return classes;
};

export const Anchor = React.forwardRef(
    (
        props: ButtonProps & React.AnchorHTMLAttributes<HTMLElement>,
        ref: React.Ref<HTMLAnchorElement>,
    ) => {
        const classes = getClassName(props);
        return (
            <a ref={ref} {...props} className={classes}>
                {props.children}
            </a>
        );
    },
);

export const Input = React.forwardRef(
    (
        props: ButtonProps & React.InputHTMLAttributes<HTMLElement>,
        ref: React.Ref<HTMLInputElement>,
    ) => {
        const classes = getClassName(props);
        return <input type="button" ref={ref} {...props} className={classes} />;
    },
);

export const Button = React.forwardRef(
    (
        props: ButtonProps & React.ButtonHTMLAttributes<HTMLElement>,
        ref: React.Ref<HTMLButtonElement>,
    ) => {
        const classes = getClassName(props);
        return (
            <button ref={ref} {...props} className={classes}>
                {props.children}
            </button>
        );
    },
);

const Buttons = () => {};

Buttons.Anchor = Anchor;
Buttons.Button = Button;
Buttons.Input = Input;
Buttons.List = List;

export default Buttons;
