import React from "react";
import cn from "classnames";

type Size = "md" | "lg" | "xl";

interface FlagProps {
    className?: string;
    country: string;
    size?: Size;
}

export const Flag = ({ className, country, size }: FlagProps) => {
    const classes = cn(
        `flag flag-country-${country}`,
        { [`flag-${size}`]: !!size },
        className,
    );
    return <span className={classes}></span>;
};

export default Flag;
