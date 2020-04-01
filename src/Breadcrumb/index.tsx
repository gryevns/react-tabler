import React from "react";
import cn from "classnames";

export interface BreadcrumbItemProps {
    children: React.ReactNode;
    className?: string;
    active?: boolean;
}

const BreadcrumbItem = ({ children, className, active }: BreadcrumbItemProps) => {
    const classes = cn(`breadcrumb-item`, { active }, className);
    const props = {};
    if (active) {
        props["aria-current"] = "page";
    }
    return (
        <li className={classes} {...props}>
            {children}
        </li>
    );
};

export type Type = "dots" | "arrows" | "bullets";

export interface BreadcrumbProps {
    children: React.ReactNode;
    className?: string;
    type?: Type;
    alternate?: boolean;
}

const Breadcrumb = ({
    children,
    className,
    type,
    alternate = false,
}: BreadcrumbProps) => {
    const classes = cn(
        `breadcrumb`,
        {
            "breadcrumb-dots": type === "dots",
            "breadcrumb-arrows": type === "arrows",
            "breadcrumb-bullets": type === "bullets",
            "breadcrumb-alternate": alternate,
        },
        className,
    );
    return (
        <ol className={classes} aria-label="breadcrumbs">
            {children}
        </ol>
    );
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
