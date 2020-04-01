import * as React from "react";
import cn from "classnames";

export interface TableBodyProps {
    children?: React.ReactNode;
    className?: string;
}

function TableBody({ className, children, ...props }: TableBodyProps) {
    const classes = cn(className);
    return (
        <tbody className={classes} {...props}>
            {children}
        </tbody>
    );
}

export default TableBody;
