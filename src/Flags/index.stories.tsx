import React from "react";

import Flag from "../Flags";
import { select, withKnobs } from "@storybook/addon-knobs";

export default {
    title: "Flags",
    decorators: [withKnobs],
};

export const Default = () => {
    const context = require.context("../static/img/flags", true, /.svg$/);
    const countries = context.keys().map(key => {
        return key.split("./")[1].split(".svg")[0];
    });
    return countries.map(country => (
        <Flag
            country={country}
            size={select(
                "Size",
                { Medium: "md", Large: "lg", "Extra Large": "xl" },
                "md",
            )}
            className="mr-1"
        />
    ));
};
