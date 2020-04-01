import React from "react";
import cn from "classnames";

export interface TableHeaderProps {
    className?: string;
    children: React.ReactNode;
}

function TableHeader({ className, children, ...props }: TableHeaderProps) {
    const classes = cn(className);
    return (
        <thead className={classes} {...props}>
            {children}
        </thead>
    );
}

export default TableHeader;
