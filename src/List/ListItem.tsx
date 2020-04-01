import * as React from "react";
import cn from "classnames";

interface ListItemProps {
    className?: string;
    children: React.ReactNode;
    inline?: boolean;
    separated?: boolean;
}

function ListItem({ className, children, inline, separated }: ListItemProps) {
    const classes = cn(
        { "list-inline-item": inline, "list-separated-item": separated },
        className,
    );
    return <li className={classes}>{children}</li>;
}

export default ListItem;
