import * as React from "react";
import cn from "classnames";

export interface CardTitleProps {
    className?: string;
    children: React.ReactNode;
}

function CardTitle({ className, children }: CardTitleProps) {
    const classes = cn("card-title", className);
    return <h3 className={classes}>{children}</h3>;
}

export default CardTitle;
