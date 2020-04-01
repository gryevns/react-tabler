import React from "react";
import { Bell, Sliders, X } from "react-feather";

import Form, { Control, InputGroup } from "../../Form";

export default {
    title: "Form/Input Group",
};

export const Prepend = () => (
    <Form>
        <InputGroup className="mb-2">
            <InputGroup.Prepend>
                <InputGroup.Text>@</InputGroup.Text>
            </InputGroup.Prepend>
            <Control.Input type="text" placeholder="username" />
        </InputGroup>
    </Form>
);

export const Append = () => (
    <Form>
        <InputGroup className="mb-2">
            <Control.Input type="text" placeholder="username" />
            <InputGroup.Append>
                <InputGroup.Text>.tabler.io</InputGroup.Text>
            </InputGroup.Append>
        </InputGroup>
    </Form>
);

export const Both = () => (
    <Form>
        <InputGroup className="mb-2">
            <InputGroup.Prepend>
                <InputGroup.Text>https://</InputGroup.Text>
            </InputGroup.Prepend>
            <Control.Input type="text" placeholder="username" />
            <InputGroup.Append>
                <InputGroup.Text>.tabler.io</InputGroup.Text>
            </InputGroup.Append>
        </InputGroup>
    </Form>
);

export const PrependInput = () => (
    <Form>
        <InputGroup className="mb-2">
            <InputGroup.Prepend>
                <InputGroup.Text>
                    <Control.Input type="checkbox" className="m-0" />
                </InputGroup.Text>
            </InputGroup.Prepend>
            <Control.Input type="text" />
        </InputGroup>
    </Form>
);

export const AppendInput = () => (
    <Form>
        <InputGroup className="mb-2">
            <Control.Input type="text" />
            <InputGroup.Append>
                <InputGroup.Text>
                    <Control.Input type="radio" checked className="m-0" />
                </InputGroup.Text>
            </InputGroup.Append>
        </InputGroup>
    </Form>
);

export const InputLink = () => (
    <InputGroup flat>
        <Control.Input type="password" value="password" />
        <InputGroup.Append>
            <InputGroup.Text>
                <InputGroup.Link>Show password</InputGroup.Link>
            </InputGroup.Text>
        </InputGroup.Append>
    </InputGroup>
);

export const InputIcons = () => (
    <InputGroup flat>
        <Control.Input type="text" />
        <InputGroup.Append>
            <InputGroup.Text>
                <a href="#" className="link-secondary">
                    <X size={18} />
                </a>
                <a href="#" className="link-secondary ml-2">
                    <Sliders size={18} />
                </a>
                <a href="#" className="link-secondary ml-2 disabled">
                    <Bell size={18} />
                </a>
            </InputGroup.Text>
        </InputGroup.Append>
    </InputGroup>
);
