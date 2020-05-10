import React from "react";
import cn from "classnames";
import CardOptions from "./CardOptions";
import CardStatus from "./CardStatus";
import CardHeader from "./CardHeader";
import { CardTitle, CardSubtitle } from "./CardTitle";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardGroup from "./CardGroup";
import CardImage from "./CardImage";

type Size = "sm" | "md" | "lg";

interface CardProps {
    className?: string;
    children?: React.ReactNode;
    active?: boolean;
    inactive?: boolean;
    stacked?: boolean;
    aside?: boolean;
    size?: Size;
    style?: React.CSSProperties;
}

export const Card = function({
    className,
    children,
    aside,
    active,
    inactive,
    stacked,
    size,
    style,
}: CardProps) {
    const classes = cn(
        "card",
        {
            aside,
            "card-active": active,
            "card-inactive": inactive,
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
Card.Subtitle = CardSubtitle;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Options = CardOptions;
Card.Status = CardStatus;
Card.Group = CardGroup;
Card.Image = CardImage;

export default Card;
