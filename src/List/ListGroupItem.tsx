import * as React from "react";
import cn from "classnames";

export interface ListGroupItemProps {
    className?: string;
    children: React.ReactNode;
    as?: React.ElementType;
    active?: boolean;
    action?: boolean;
    icon?: string;
    to?: string;
}

function ListGroupItem({
    className,
    children,
    as = "a",
    active,
    action,
    icon,
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
    return (
        <Component className={classes}>
            {icon && <span className="mr-3 icon">TODO</span>}
            {children}
        </Component>
    );
}

export default ListGroupItem;
