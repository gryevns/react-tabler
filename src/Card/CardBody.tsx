import React from "react";
import cn from "classnames";

export interface CardBodyProps {
    className?: string;
    children?: React.ReactNode;
    loading?: boolean;
    style?: React.CSSProperties;
}

const Loading = ({ children }) => (
    <div className="dimmer active">
        <div className="loader"></div>
        <div className="dimmer-content">{children}</div>
    </div>
);

function CardBody({ className, children, style, loading = false }: CardBodyProps) {
    const classes = cn("card-body", className);
    return (
        <div className={classes} style={style}>
            {loading ? <Loading>{children}</Loading> : children}
        </div>
    );
}

export default CardBody;
