import * as React from "react";
import cn from "classnames";

export interface ListGroupItemProps {
    className?: string;
    children: React.ReactNode;
    as?: React.ElementType;
    active?: boolean;
    action?: boolean;
    to?: string;
}

function ListGroupItem({
    className,
    children,
    as = "a",
    active,
    action,
}: ListGroupItemProps) {
    const classes = cn(
        "list-group-item",
        {
            "list-group-item-action": action,
        },
        {
            active: active,
        },
        className,
    );
    const Component = as;
    return <Component className={classes}>{children}</Component>;
}

export default ListGroupItem;
