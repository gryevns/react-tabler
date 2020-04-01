import React from "react";

import Breadcrumb from "../Breadcrumb";

export default {
    title: "Breadcrumb",
};

const types = [undefined, "dots" as const, "arrows" as const, "bullets" as const];

export const Types = () =>
    types.map(type => (
        <Breadcrumb type={type}>
            <Breadcrumb.Item>
                <a href="#">Home</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="#">Library</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
                <a href="#">Data</a>
            </Breadcrumb.Item>
        </Breadcrumb>
    ));

export const Alternate = () =>
    types.map(type => (
        <Breadcrumb alternate type={type}>
            <Breadcrumb.Item>
                <a href="#">Home</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="#">Library</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
                <a href="#">Data</a>
            </Breadcrumb.Item>
        </Breadcrumb>
    ));
