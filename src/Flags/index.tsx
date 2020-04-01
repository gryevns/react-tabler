import React from "react";
import cn from "classnames";

export type Size = "sm" | "md" | "lg" | "xl";

export interface FlagProps {
    className?: string;
    country: string;
    size?: Size;
}

const Flag = ({ className, country, size }: FlagProps) => {
    const classes = cn(
        `flag flag-country-${country}`,
        { [`flag-${size}`]: !!size },
        className,
    );
    return <span className={classes}></span>;
};

export default Flag;
