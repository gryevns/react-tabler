import React from "react";

import Payment from "../Payment";

export default {
    title: "Payment",
};

export const All = () => {
    const context = require.context("../static/img/payments", true, /.svg$/);

    const providers = context
        .keys()
        .map(key => {
            return key.split("./")[1].split(".svg")[0];
        })
        .filter(provider => !provider.includes("-dark"));

    return providers.map(provider => <Payment provider={provider} size="xl" />);
};

export const Sizes = () =>
    [undefined, "lg" as const, "xl" as const].map(size => (
        <Payment provider="paypal" size={size} />
    ));
