import * as React from "react";
import cn from "classnames";
import { Color } from "../common";

export interface RibbonProps {
    bookmark?: boolean;
    children?: React.ReactNode;
    color?: Color;
    top?: boolean;
    right?: boolean;
    bottom?: boolean;
    left?: boolean;
}

export const Ribbon = ({
    children,
    top,
    right,
    bottom,
    left,
    bookmark,
    color,
}: RibbonProps) => {
    const classes = cn("ribbon", {
        "ribbon-top": top,
        "ribbon-right": right,
        "ribbon-bottom": bottom,
        "ribbon-left": left,
        [`bg-${color}`]: !!color,
        "ribbon-bookmark": bookmark,
    });
    return <div className={classes}>{children}</div>;
};

export default Ribbon;
