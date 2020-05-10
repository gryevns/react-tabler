import * as React from "react";
import cn from "classnames";

export interface CardTitleProps {
    className?: string;
    children: React.ReactNode;
}

export const CardTitle = ({ className, children }: CardTitleProps) => {
    const classes = cn("card-title", className);
    return <h3 className={classes}>{children}</h3>;
};

export interface CardSubtitleProps {
    className?: string;
    children: React.ReactNode;
}

export const CardSubtitle = ({ className, children }: CardSubtitleProps) => {
    const classes = cn("card-subtitle", className);
    return <div className={classes}>{children}</div>;
};
