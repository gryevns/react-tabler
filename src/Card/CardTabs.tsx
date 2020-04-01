import * as React from "react";
import cn from "classnames";

export interface CardTabsProps {
    className?: string;
    children: React.ReactNode;
}

function CardTabs({ className, children }: CardTabsProps) {
    const classes = cn("card-tabs", className);
    return <div className={classes}>{children}</div>;
}

export default CardTabs;
