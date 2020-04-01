import * as React from "react";
import cn from "classnames";

export interface CardHeaderProps {
    className?: string;
    children: React.ReactNode;
}

function CardHeader({ className, children }: CardHeaderProps) {
    const classes = cn("card-header", className);
    return <div className={classes}>{children}</div>;
}

export default CardHeader;
