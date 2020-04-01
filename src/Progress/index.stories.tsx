import React from "react";

import Progress from "../Progress";

export default {
    title: "Progress",
};

export const Default = () => (
    <Progress size="md">
        <Progress.Bar color="blue" width={66} />
    </Progress>
);

export const Indeterminate = () => (
    <Progress>
        <Progress.Bar indeterminate />
    </Progress>
);

export const Colors = () => (
    <>
        <Progress size="sm" className="mb-2">
            <Progress.Bar color="red" width={24} />
        </Progress>
        <Progress size="sm" className="mb-2">
            <Progress.Bar color="green" width={45} />
        </Progress>
        <Progress size="sm" className="mb-2">
            <Progress.Bar color="purple" width={64} />
        </Progress>
        <Progress size="sm" className="mb-2">
            <Progress.Bar indeterminate color="pink" />
        </Progress>
    </>
);
