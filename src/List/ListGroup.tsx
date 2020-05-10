import * as React from "react";
import cn from "classnames";

export interface ListGroupProps {
    className?: string;
    children: React.ReactNode;
    transparent?: boolean;
    card?: boolean;
}

function ListGroup({ className, children, transparent, card }: ListGroupProps) {
    const classes = cn(
        "list-group",
        "mb-0",
        {
            "list-group-transparent": transparent,
            "card-list-group": card,
        },
        className,
    );
    return <div className={classes}>{children}</div>;
}

export default ListGroup;
