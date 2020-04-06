import * as React from "react";
import cn from "classnames";
import { Color } from "../common";

export interface AlertListProps {
    children: React.ReactNode;
    className?: string;
    stacked?: boolean;
}

const AvatarList = ({ children, className, stacked = false }: AlertListProps) => {
    const classes = cn("avatar-list", { "avatar-list-stacked": stacked }, className);
    return <div className={classes}>{children}</div>;
};

export type Shape = "rounded" | "rounded-circle" | "rounded-0" | "rounded-lg";

export type Size = "sm" | "md" | "lg" | "xl";

export interface AvatarProps {
    children?: React.ReactNode;
    className?: string;
    color?: Color;
    imageURL?: string;
    size?: Size;
    shape?: Shape;
    status?: Color;
    style?: React.CSSProperties;
}

export const Avatar = ({
    children,
    className,
    imageURL,
    shape,
    style,
    size,
    status,
    color,
}: AvatarProps) => {
    const classes = cn(
        {
            avatar: true,
            [shape]: true,
            [`avatar-${size}`]: !!size,
            [`bg-${color}-lt`]: !!color,
        },
        className,
    );
    const styles = imageURL
        ? { ...style, backgroundImage: `url(${imageURL})` }
        : style;

    return (
        <span className={classes} style={styles}>
            {status && <span className={`badge bg-${status}`}></span>}
            {children}
        </span>
    );
};

Avatar.List = AvatarList;

export default Avatar;
