import React from "react";
import cn from "classnames";

const ImageCheckFigure = ({ ...props }: React.ImgHTMLAttributes<HTMLElement>) => (
    <span className="form-imagecheck-figure">
        <img {...props} className="form-imagecheck-image" />
    </span>
);

const ImageCheckInput = ({ ...props }: React.InputHTMLAttributes<HTMLElement>) => (
    <input type="checkbox" {...props} className="form-imagecheck-input" />
);

export interface ImageCheckLabelProps {
    className?: string;
    children: React.ReactNode;
}

const ImageCheckLabel = ({ className, children }: ImageCheckLabelProps) => {
    const classes = cn("form-imagecheck", className);
    return <label className={classes}>{children}</label>;
};

const ImageCheck = () => {};

ImageCheck.Label = ImageCheckLabel;
ImageCheck.Input = ImageCheckInput;
ImageCheck.Figure = ImageCheckFigure;

export default ImageCheck;
