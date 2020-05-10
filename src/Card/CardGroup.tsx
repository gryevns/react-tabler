import React from "react";
import cn from "classnames";

export interface CardGroupProps {
    className?: string;
    children?: React.ReactNode;
}

function CardGroup({ className, children }: CardGroupProps) {
    const classes = cn("card-group", className);
    return <div className={classes}>{children}</div>;
}

export default CardGroup;
