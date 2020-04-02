import React from "react";

import { colors } from "../common";
import Avatar from "../Avatar";

export default {
    title: "Avatar",
};

const Default = () => (
    <>
        <Avatar>AA</Avatar>
        <Avatar color="red">BB</Avatar>
        <Avatar imageURL="https://picsum.photos/id/128/128">CC</Avatar>
    </>
);

export const Colors = () =>
    colors.map(color => <Avatar color={color} className="mr-1" />);

const sizes = ["sm" as const, "md" as const, "lg" as const, "xl" as const];

export const Sizes = () => sizes.map(size => <Avatar size={size}>{size}</Avatar>);

export const Status = () =>
    colors.map(color => (
        <Avatar status={color} className="mr-1">
            S
        </Avatar>
    ));

const shapes = [
    undefined,
    "rounded" as const,
    "rounded-circle" as const,
    "rounded-0" as const,
    "rounded-lg" as const,
];

export const Shapes = () =>
    shapes.map(shape => (
        <Avatar
            imageURL="https://picsum.photos/id/128/128"
            shape={shape}
            className="mr-1"
        />
    ));

export const List = () => (
    <Avatar.List>
        <Default />
    </Avatar.List>
);

export const Stacked = () => (
    <Avatar.List stacked>
        <Default />
    </Avatar.List>
);
