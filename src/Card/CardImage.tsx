import React from "react";
import cn from "classnames";

export interface CardImageProps extends React.ImgHTMLAttributes<HTMLElement> {
    className?: string;
    top?: boolean;
    bottom?: boolean;
}

const CardImage = ({ className, top, bottom, ...props }: CardImageProps) => {
    const classes = cn(
        { "card-img-bottom": bottom, "card-img-top": top },
        className,
    );
    return <img className={classes} {...props} />;
};

export default CardImage;
