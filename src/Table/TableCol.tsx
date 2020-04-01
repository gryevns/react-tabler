import * as React from "react";
import cn from "classnames";

export interface TableColProps {
    className?: string;
    children: React.ReactNode;
    alignContent?: "left" | "center" | "right";
    width?: number;
}

function TableCol({ className, children, alignContent, ...rest }: TableColProps) {
    const classes = cn({ [`text-${alignContent}`]: alignContent }, className);
    return (
        <td className={classes} {...rest}>
            {children}
        </td>
    );
}

export default TableCol;
