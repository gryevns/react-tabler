import React from "react";

import Buttons from "../Buttons";
import Modal from "../Modal";

export default {
    title: "Modal",
};

export const Active = () => {
    const [show, setShow] = React.useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>Modal header</Modal.Header>
                <Modal.Body>
                    <p>Modal body text goes here.</p>
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
