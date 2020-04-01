import React from "react";

import Flag from "../Flags";

export default {
    title: "Flags",
};

export const Flags = () => {
    const context = require.context("../static/img/flags", true, /.svg$/);

    const countries = context.keys().map(key => {
        return key.split("./")[1].split(".svg")[0];
    });
    return countries.map(country => (
        <Flag country={country} size="md" className="mr-1" />
    ));
};

const sizes = ["xl" as const, "lg" as const, "md" as const, "sm" as const];

export const Sizes = () =>
    sizes.map(size => <Flag size={size} country="pl" className="mr-1" />);
