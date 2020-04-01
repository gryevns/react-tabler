import React from "react";

import { colors } from "../common";
import Badge from "../Badge";

export default {
    title: "Badge",
};

export const Colors = () =>
    colors.map(color => (
        <Badge color={color} className="mr-1">
            {color}
        </Badge>
    ));

export const Pill = () =>
    colors.map(color => (
        <Badge color={color} pill className="mr-1">
            {color}
        </Badge>
    ));

export const Soft = () =>
    colors.map(color => (
        <Badge color={color} soft className="mr-1">
            {color}
        </Badge>
    ));

export const Link = () =>
    colors.map(color => (
        <Badge link="#" color={color} className="mr-1">
            {color}
        </Badge>
    ));

export const Empty = () =>
    colors.map(color => <Badge color={color} className="mr-1" />);

export const Addons = () => (
    <>
        <Badge color="green">
            Task<Badge.Addon>Finished</Badge.Addon>
        </Badge>
        <Badge color="purple">
            bundle<Badge.Addon>passing</Badge.Addon>
        </Badge>
        <Badge color="red" soft>
            XSS gzip size<Badge.Addon color="red">20.9kB</Badge.Addon>
        </Badge>
    </>
);

export const Avatar = () => (
    <>
        <Badge color="blue">
            <Badge.Avatar imageURL="https://picsum.photos/id/353/128/128">
                JL
            </Badge.Avatar>
            Paweł Kuna
        </Badge>
        <Badge color="blue">
            <Badge.Avatar>JL</Badge.Avatar>
            Jeffie Lewzey
        </Badge>
    </>
);
