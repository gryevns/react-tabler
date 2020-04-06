import React from "react";
import cn from "classnames";
import CardOptions from "./CardOptions";
import CardStatus from "./CardStatus";
import CardHeader from "./CardHeader";
import CardTitle from "./CardTitle";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

export type Size = "sm" | "md" | "lg";

export interface CardProps {
    className?: string;
    children?: React.ReactNode;
    stacked?: boolean;
    aside?: boolean;
    size?: Size;
    style?: React.CSSProperties;
}

const Card = function ({
    className,
    children,
    aside,
    stacked,
    size,
    style,
}: CardProps) {
    const classes = cn(
        {
            card: true,
            aside: aside,
            [`card-${size}`]: size,
            "card-stacked": stacked,
        },
        className,
    );

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
};

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Options = CardOptions;
Card.Status = CardStatus;

export default Card;
