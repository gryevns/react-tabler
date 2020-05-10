import React from "react";
import cn from "classnames";

import { Variant } from "../common";

interface LinkProps {
    children: React.ReactNode;
    variant?: Variant;
}

const Link = React.forwardRef(
    (
        {
            variant = "primary",
            ...props
        }: LinkProps & React.AnchorHTMLAttributes<HTMLElement>,
        ref: React.Ref<HTMLAnchorElement>,
    ) => {
        const classes = cn(`link-${variant}`);
        return (
            <a ref={ref} {...props} className={classes}>
                {props.children}
            </a>
        );
    },
);

export default Link;
