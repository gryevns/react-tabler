import React from "react";

import { colors } from "../common";
import Spinner from "../Spinners";

export default {
    title: "Spinner",
};

export const Colors = () =>
    colors.map(color => <Spinner color={color} className="mr-1" />);

export const Sizes = () => (
    <>
        <Spinner className="mr-1" />
        <Spinner size="sm" className="mr-1" />
    </>
);

export const Grow = () =>
    colors.map(color => <Spinner color={color} grow className="mr-1" />);
