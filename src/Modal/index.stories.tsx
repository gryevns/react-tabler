import React from "react";
import { select, withKnobs, boolean } from "@storybook/addon-knobs";

import Buttons from "../Buttons";
import Modal from "../Modal";

export default {
    title: "Modal",
    decorators: [withKnobs],
};

export const Active = () => {
    const [show, setShow] = React.useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const size = select(
        "Size",
        { Small: "sm", Medium: undefined, Large: "lg" },
        undefined,
    );
    return (
        <div
            style={{
                backgroundImage: "url(https://picsum.photos/id/128/1200)",
                height: "100vh",
            }}
        >
            <Buttons.Button variant="primary" onClick={handleShow}>
                Show Modal
            </Buttons.Button>
            <Modal
                show={show}
                onHide={handleClose}
                size={size}
                fullWidth={boolean("Full Width", false)}
                scrollable={boolean("Scrollable", false)}
            >
                <Modal.Header>Modal header</Modal.Header>
                <Modal.Body>
                    Modal body text goes here <a href="#">test</a>.
                </Modal.Body>
                <Modal.Footer>
                    <Buttons.Button variant="secondary" onClick={handleClose}>
                        Close
                    </Buttons.Button>
                    <Buttons.Button variant="primary" onClick={handleClose}>
                        Save changes
                    </Buttons.Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
