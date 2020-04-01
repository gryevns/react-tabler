import React from "react";
import cn from "classnames";

export type Size = "lg" | "xl";

export interface PaymentProps {
    className?: string;
    provider: string;
    size?: Size;
}

const Payment = ({ className, provider, size }: PaymentProps) => {
    const classes = cn(
        "payment payment-sm",
        { [`payment-provider-${provider}`]: provider, [`payment-${size}`]: !!size },
        className,
    );
    return <span className={classes}></span>;
};

export default Payment;
