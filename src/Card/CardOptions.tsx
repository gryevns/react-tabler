import * as React from "react";
import cn from "classnames";

export interface CardOptionsProps {
    className?: string;
    children: React.ReactNode;
}

function CardOptions({ className, children }: CardOptionsProps) {
    const classes = cn("card-options", className);
    return <div className={classes}>{children}</div>;
}

export default CardOptions;
