import React from "react";
import cn from "classnames";

export interface TableColHeaderProps {
    className?: string;
    children?: React.ReactNode;
    alignContent?: "left" | "center" | "right";
    colspan?: number;
}

function TableColHeader({
    className,
    children,
    alignContent,
    colspan = 1,
}: TableColHeaderProps) {
    const classes = cn({ [`text-${alignContent}`]: alignContent }, className);
    return (
        <th className={classes} colSpan={colspan}>
            {children}
        </th>
    );
}

export default TableColHeader;
