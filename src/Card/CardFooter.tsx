import React from "react";
import cn from "classnames";

export interface CardFooterProps {
    className?: string;
    children: React.ReactNode;
}

function CardFooter({ className, children }: CardFooterProps) {
    const classes = cn("card-footer", className);
    return <div className={classes}>{children}</div>;
}

export default CardFooter;
