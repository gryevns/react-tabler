import React from "react";
import { Search, User } from "react-feather";

import Form from ".";
import Control from "./Control";
import Grid from "../Grid";
import Buttons from "../Buttons";

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
        <Control.Icon className="mb-3">
            <Control.Input type="text" />
            <Control.Addon>
                <Search size={18} />
            </Control.Addon>
        </Control.Icon>
        <Control.Icon className="mb-3">
            <Control.Addon>
                <User size={18} />
            </Control.Addon>
            <Control.Input type="text" />
        </Control.Icon>
    </Form>
);

export const Separated = () => (
    <Form>
        <Grid.Row size="sm">
            <Grid.Col>
                <Control.Input type="text" />
            </Grid.Col>
            <Grid.Col auto>
                <Buttons.Button color="white" icon>
                    <Search size={18} />
                </Buttons.Button>
            </Grid.Col>
        </Grid.Row>
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
        <Control.Input type="text" padding="lg" className="mb-2" />
        <Control.Input type="text" className="mb-2" />
        <Control.Input type="text" padding="sm" />
    </Form>
);

export const Focus = () => {
    const ref = React.createRef<HTMLInputElement>();
    React.useEffect(() => ref.current && ref.current.focus());
    return <Control.Input ref={ref} placeholder="Some text..." />;
};

export const Fieldset = () => (
    <Form.Fieldset>
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
    </Form.Fieldset>
);
