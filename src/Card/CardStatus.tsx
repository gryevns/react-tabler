import * as React from "react";
import cn from "classnames";
import { Color } from "../common";

export interface CardStatusProps {
    color: Color;
    top?: boolean;
    right?: boolean;
    bottom?: boolean;
    left?: boolean;
}

function CardStatus({ color, top, right, bottom, left }: CardStatusProps) {
    const classes = cn({
        "card-status": true,
        [`bg-${color}`]: true,
        "card-status-top": top,
        "card-status-right": right,
        "card-status-bottom": bottom,
        "card-status-left": left,
    });
    return <div className={classes} />;
}

export default CardStatus;
