import React from "react";

import Payment from "../Payment";
import { select, withKnobs } from "@storybook/addon-knobs";

export default {
    title: "Payment",
    decorators: [withKnobs],
};

export const Default = () => {
    const context = require.context("../static/img/payments", true, /.svg$/);
    const providers = context
        .keys()
        .map(key => {
            return key.split("./")[1].split(".svg")[0];
        })
        .filter(provider => !provider.includes("-dark"));

    return providers.map(provider => (
        <Payment
            provider={provider}
            size={select(
                "Size",
                { Default: undefined, Large: "lg", XL: "xl" },
                "xl",
            )}
        />
    ));
};
