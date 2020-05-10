import React from "react";

import { colorOptions } from "../common";
import Progress from "../Progress";
import { select, withKnobs, boolean } from "@storybook/addon-knobs";

export default {
    title: "Progress",
    decorators: [withKnobs],
};

export const Default = () => (
    <Progress
        size={select("Size", { Small: "sm", Medium: "md" }, "md")}
        className="mb-2"
    >
        <Progress.Bar
            indeterminate={boolean("Indeterminate", false)}
            color={select("Color", colorOptions, "red")}
            width={24}
        />
    </Progress>
);
