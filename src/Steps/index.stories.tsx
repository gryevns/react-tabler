import React from "react";

import { colors } from "../common";
import Steps from "../Steps";
import Tooltip from "../Tooltip";

export default {
    title: "Steps",
};

export const Default = () => (
    <Steps>
        <Steps.Step>Step 1</Steps.Step>
        <Steps.Step>Step 2</Steps.Step>
        <Steps.Step>Step 3</Steps.Step>
        <Steps.Step>Step 4</Steps.Step>
    </Steps>
);

export const Tooltips = () => (
    <Steps>
        <Tooltip placement="bottom" content="one">
            <Steps.Step>Step 1</Steps.Step>
        </Tooltip>
        <Tooltip placement="bottom" content="two">
            <Steps.Step>Step 2</Steps.Step>
        </Tooltip>
        <Tooltip placement="bottom" content="three">
            <Steps.Step>Step 3</Steps.Step>
        </Tooltip>
    </Steps>
);

export const Colors = () =>
    colors.map((color) => (
        <Steps color={color}>
            <Steps.Step>Step 1</Steps.Step>
            <Steps.Step>Step 2</Steps.Step>
            <Steps.Step>Step 3</Steps.Step>
            <Steps.Step>Step 4</Steps.Step>
        </Steps>
    ));

export const Basic = () => (
    <Steps>
        <Steps.Step />
        <Steps.Step />
        <Steps.Step active />
        <Steps.Step />
    </Steps>
);

export const Numbers = () => (
    <Steps numbers>
        <Steps.Step />
        <Steps.Step active />
        <Steps.Step />
        <Steps.Step />
    </Steps>
);
