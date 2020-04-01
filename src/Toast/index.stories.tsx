import React from "react";

import Toast from "../Toast";

export default {
    title: "Toast"
};

const Basic = ({ show = true, children, ...props }) => (
    <Toast {...props}>
        <Toast.Header>
            <Toast.Title>Toast Title</Toast.Title>
            <small className="ml-3">11 mins ago</small>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
    </Toast>
);

export const Stacked = () => (
    <div style={{ position: "absolute", top: 0, right: 0 }}>
        <Basic delay={1000}>A</Basic>
        <Basic delay={2000}>B</Basic>
        <Basic>C</Basic>
    </div>
);

export const Timeout = () => (
    <Basic delay={1000} fade>
        Toast content.
    </Basic>
);
