import * as React from "react";
import cn from "classnames";
import { Color, Variant } from "../common";

export interface AddonProps {
    children: React.ReactNode;
    color?: Color;
}

const Addon = ({ children, color }: AddonProps) => {
    const classes = cn("badge-addon", { [`bg-${color}`]: color });
    return <span className={classes}>{children}</span>;
};

export interface AvatarProps {
    children?: React.ReactNode;
    imageURL?: string;
    style?: React.CSSProperties;
}

const Avatar = ({ children, imageURL, style = {} }: AvatarProps) => (
    <span
        className="badge-avatar"
        style={{ ...style, backgroundImage: `url(${imageURL})` }}
    >
        {children}
    </span>
);

export interface BadgeProps {
    children?: React.ReactNode;
    className?: string;
    pill?: boolean;
    soft?: boolean;
    style?: React.CSSProperties;
    color?: Color;
    link?: string;
    variant?: Variant;
}

export const Badge = ({
    className,
    children,
    pill = false,
    soft = false,
    style,
    color,
    variant,
    link = null,
}: BadgeProps) => {
    const classes = cn(
        {
            badge: true,
            "badge-pill": pill,
            [`bg-${variant}`]: !!variant,
            [!soft ? `bg-${color}` : `bg-${color}-lt`]: color,
        },
        className,
    );
    if (link) {
        return (
            <a className={classes} href={link}>
                {children}
            </a>
        );
    }
    return (
        <span style={style} className={classes}>
            {children}
        </span>
    );
};

Badge.Addon = Addon;
Badge.Avatar = Avatar;

export default Badge;
