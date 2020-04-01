import React from "react";
import cn from "classnames";

export type Size = "0" | "sm" | "md" | "lg";

export interface RowProps {
    className?: string;
    children: React.ReactNode;
    cards?: boolean;
    deck?: boolean;
    gutters?: boolean;
    alignItems?: string;
    justifyContent?: boolean;
    size?: Size;
    style?: React.CSSProperties;
}

const Row = ({
    className,
    children,
    cards,
    deck,
    gutters,
    alignItems,
    justifyContent,
    size,
    style,
}: RowProps) => {
    const classes: string = cn(
        "row",
        {
            "row-cards": cards,
            "row-deck": deck,
            "no-gutters": gutters === false,
            [`align-items-${alignItems}`]: alignItems,
            [`justify-content-${justifyContent}`]: justifyContent,
            [`row-${size}`]: size,
        },
        className,
    );
    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
};

export interface ColProps {
    className?: string;
    children: React.ReactNode;
    width?: number;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xsAuto?: boolean;
    smAuto?: boolean;
    mdAuto?: boolean;
    lgAuto?: boolean;
    xlAuto?: boolean;
    auto?: boolean;
    offset?: number;
    offsetXs?: number;
    offsetSm?: number;
    offsetMd?: number;
    offsetLg?: number;
    offsetXl?: number;
    ignoreCol?: boolean;
}

const Col = ({
    className,
    children,
    width = 0,
    xs = 0,
    sm = 0,
    md = 0,
    lg = 0,
    xl = 0,
    xsAuto,
    smAuto,
    mdAuto,
    lgAuto,
    xlAuto,
    auto,
    offset = 0,
    offsetXs = 0,
    offsetSm = 0,
    offsetMd = 0,
    offsetLg = 0,
    offsetXl = 0,
    ignoreCol = false,
}: ColProps) => {
    const classes = cn(
        {
            col: !ignoreCol,
            [`col-${width}`]: width,
            [`col-xs-${xs}`]: xs,
            [`col-xs-auto`]: xsAuto,
            [`col-sm-${sm}`]: sm,
            [`col-sm-auto`]: smAuto,
            [`col-md-${md}`]: md,
            [`col-md-auto`]: mdAuto,
            [`col-lg-${lg}`]: lg,
            [`col-lg-auto`]: lgAuto,
            [`col-xl-${xl}`]: xl,
            [`col-xl-auto`]: xlAuto,
            "col-auto": auto,
            [`offset-${offset}`]: offset,
            [`offset-xs-${offsetXs}`]: offsetXs,
            [`offset-sm-${offsetSm}`]: offsetSm,
            [`offset-md-${offsetMd}`]: offsetMd,
            [`offset-lg-${offsetLg}`]: offsetLg,
            [`offset-xl-${offsetXl}`]: offsetXl,
        },
        className,
    );
    return <div className={classes}>{children}</div>;
};

const Grid = ({ children }) => ({ children });

Grid.Row = Row;
Grid.Col = Col;

export default Grid;
