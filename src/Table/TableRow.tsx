import * as React from "react";
import cn from "classnames";

export interface TableRowProps {
    className?: string;
    children: React.ReactNode;
}

function TableRow({ className, children, ...props }: TableRowProps) {
    const classes = cn(className);
    return (
        <tr className={classes} {...props}>
            {children}
        </tr>
    );
}

export default TableRow;
