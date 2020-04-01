import React from "react";
import { Bell, Search, Sliders, User, X } from "react-feather";

import { colors } from "../../common";
import Form, { Control } from "../../Form";
import Grid from "../../Grid";
import Button from "../../Button";

export default {
    title: "Form",
};

export const Styles = () => {
    const [value, setValue] = React.useState("value");
    const props = {
        value,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value),
    };
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Default</Form.Label>
                <Control.Input type="text" {...props} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Form control rounded</Form.Label>
                <Control.Input type="text" rounded {...props} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Flush</Form.Label>
                <Control.Input type="text" flush {...props} />
            </Form.Group>
        </Form>
    );
};

export const Icon = () => (
    <Form>
        <Form.Group>
            <Form.Label>Icon input</Form.Label>
            <div className="input-icon mb-3">
                <Control.Input type="text" />
                <span className="input-icon-addon">
                    <Search size={18} />
                </span>
            </div>
            <div className="input-icon mb-3">
                <span className="input-icon-addon">
                    <User size={18} />
                </span>
                <Control.Input type="text" />
            </div>
        </Form.Group>
    </Form>
);

export const Separated = () => (
    <Form>
        <Form.Group>
            <Form.Label>Separated Inputs</Form.Label>
            <Grid.Row size="sm">
                <Grid.Col>
                    <Control.Input type="text" />
                </Grid.Col>
                <Grid.Col auto>
                    <Button variant="secondary" icon>
                        <Search size={18} />
                    </Button>
                </Grid.Col>
            </Grid.Row>
        </Form.Group>
    </Form>
);

export const Validation = () => (
    <Form>
        <Form.Group className="mb-3">
            <Form.Label>Validation States</Form.Label>
            <Control.Input type="text" valid className="mb-2" />
            <Control.Input type="text" valid={false} />
            <Control.Feedback>Invalid feedback</Control.Feedback>
        </Form.Group>
        <Form.Group>
            <Form.Label>Subtle Validation States</Form.Label>
            <Control.Input type="text" valid outline={false} className="mb-2" />
            <Control.Input type="text" valid={false} outline={false} />
        </Form.Group>
    </Form>
);

export const Sizes = () => (
    <Form>
        <Form.Group>
            <Form.Label>Sizes</Form.Label>
            <Control.Input type="text" size="lg" className="mb-2" />
            <Control.Input type="text" className="mb-2" />
            <Control.Input type="text" size="sm" />
        </Form.Group>
    </Form>
);

export const Focus = () => {
    const ref = React.createRef<HTMLInputElement>();
    React.useEffect(() => ref.current && ref.current.focus());
    return <Control.Input ref={ref} placeholder="Some text..." />;
};

const images = [
    {
        src: "https://picsum.photos/id/237/300/200",
        alt: "abc",
    },
    {
        src: "https://picsum.photos/id/337/300/200",
        alt: "abc",
    },
    {
        src: "https://picsum.photos/id/437/300/200",
        alt: "abc",
    },
    {
        src: "https://picsum.photos/id/537/300/200",
        alt: "abc",
    },
    {
        src: "https://picsum.photos/id/637/300/200",
        alt: "abc",
    },
    {
        src: "https://picsum.photos/id/737/300/200",
        alt: "abc",
    },
    {
        src: "https://picsum.photos/id/837/300/200",
        alt: "abc",
    },
    {
        src: "https://picsum.photos/id/937/300/200",
        alt: "abc",
    },
    {
        src: "https://picsum.photos/id/1037/300/200",
        alt: "abc",
    },
];

export const ImageCheck = () => (
    <div style={{ width: 500 }}>
        <Form>
            <Form.Group>
                <Form.Label>Image Check</Form.Label>
                <Grid.Row>
                    {images.map(image => (
                        <Grid.Col width={6} sm={4}>
                            <label className="form-imagecheck mb-2">
                                <input
                                    name="form-imagecheck"
                                    type="checkbox"
                                    value="1"
                                    className="form-imagecheck-input"
                                />
                                <span className="form-imagecheck-figure">
                                    <img
                                        {...image}
                                        className="form-imagecheck-image"
                                    />
                                </span>
                            </label>
                        </Grid.Col>
                    ))}
                </Grid.Row>
            </Form.Group>
        </Form>
    </div>
);

export const InputColor = () => (
    <Form>
        <Form.Group>
            <Form.Label>Color Input</Form.Label>
            <Grid.Row>
                {colors.map(color => (
                    <Grid.Col auto>
                        <label className="form-colorinput">
                            <input
                                name="color"
                                type="radio"
                                value={color}
                                className="form-colorinput-input"
                            />
                            <span
                                className={`form-colorinput-color bg-${color}`}
                            ></span>
                        </label>
                    </Grid.Col>
                ))}
            </Grid.Row>
        </Form.Group>
    </Form>
);

export const Fieldset = () => (
    <fieldset className="form-fieldset">
        <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Control.Input type="text" />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Company</Form.Label>
            <Control.Input type="text" />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Control.Input type="email" />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Phone number</Form.Label>
            <Control.Input type="tel" />
        </Form.Group>
    </fieldset>
);

export const InputGroup = () => (
    <Form>
        <label className="form-label">Input Groups</label>
        <div className="input-group mb-2">
            <div className="input-group-prepend">
                <span className="input-group-text">@</span>
            </div>
            <input type="text" className="form-control" placeholder="username" />
        </div>
        <div className="input-group mb-2">
            <input type="text" className="form-control" placeholder="subdomain" />
            <div className="input-group-append">
                <span className="input-group-text">.tabler.io</span>
            </div>
        </div>
        <div className="input-group mb-2">
            <div className="input-group-prepend">
                <span className="input-group-text">https://</span>
            </div>
            <input type="text" className="form-control" placeholder="subdomain" />
            <div className="input-group-append">
                <span className="input-group-text">.tabler.io</span>
            </div>
        </div>
        <div className="input-group mb-2">
            <div className="input-group-prepend">
                <span className="input-group-text">
                    <input className="form-check-input m-0" type="checkbox" />
                </span>
            </div>
            <input type="text" className="form-control" />
        </div>
        <div className="input-group">
            <input type="text" className="form-control" />
            <div className="input-group-append">
                <span className="input-group-text">
                    <input className="form-check-input m-0" type="radio" checked />
                </span>
            </div>
        </div>
    </Form>
);

export const InputLink = () => (
    <Form>
        <div className="input-group input-group-flat">
            <input
                type="password"
                className="form-control"
                value="ultrastrongpassword"
            />
            <div className="input-group-append">
                <span className="input-group-text">
                    <a href="#" className="input-group-link">
                        Show password
                    </a>
                </span>
            </div>
        </div>
    </Form>
);

export const InputIcons = () => (
    <Form>
        <div className="input-group input-group-flat">
            <input type="text" className="form-control" />
            <div className="input-group-append">
                <span className="input-group-text">
                    <a
                        href="#"
                        className="link-secondary"
                        title="Clear search"
                        data-toggle="tooltip"
                    >
                        <X size={18} />
                    </a>
                    <a
                        href="#"
                        className="link-secondary ml-2"
                        title="Search settings"
                        data-toggle="tooltip"
                    >
                        <Sliders size={18} />
                    </a>
                    <a
                        href="#"
                        className="link-secondary ml-2 disabled"
                        title="Add notification"
                        data-toggle="tooltip"
                    >
                        <Bell size={18} />
                    </a>
                </span>
            </div>
        </div>
    </Form>
);
