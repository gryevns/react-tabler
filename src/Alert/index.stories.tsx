import React from "react";
import { Bell, Check, AlertTriangle } from "react-feather";

import Alert from "./index";
import Button from "../Button";
import { variants } from "../common";

export default {
    title: "Alert",
};

export const Variants = () =>
    variants.map(variant => (
        <Alert variant={variant}>This is a {variant} alert - check it out!</Alert>
    ));

export const Dismissible = () => (
    <>
        <Alert variant="warning" dismiss>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Alert>
        <Alert variant="warning" dismiss={false}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Alert>
    </>
);

export const Icon = () => (
    <>
        <Alert variant="info">
            <Bell size={18} className="mr-1" /> You have done 5 actions.
        </Alert>
        <Alert variant="success">
            <Check size={18} className="mr-1" />
            The page has been added.
        </Alert>
        <Alert variant="danger">
            <AlertTriangle size={18} className="mr-1" />
            The daily report has failed. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Alert>
    </>
);

export const Children = () => (
    <Alert variant="success">
        <h4>Some Message</h4>
        <p>
            Lorem ipsum Minim ad pariatur eiusmod ea ut nulla aliqua est quis id
            dolore minim voluptate.
        </p>
        <Button.List>
            <Button variant="success">Okay</Button>
            <Button variant="secondary">No, thanks</Button>
        </Button.List>
    </Alert>
);
