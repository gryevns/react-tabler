import * as React from "react";
import cn from "classnames";

export interface ListGroupProps {
    className?: string;
    children: React.ReactNode;
    transparent?: boolean;
    isCardBody?: boolean;
}

function ListGroup({
    className,
    children,
    transparent,
    isCardBody,
}: ListGroupProps) {
    const classes = cn(
        "list-group",
        "mb-0",
        {
            "list-group-transparent": transparent,
            "card-list-group": isCardBody,
        },
        className,
    );
    return <div className={classes}>{children}</div>;
}

export default ListGroup;
