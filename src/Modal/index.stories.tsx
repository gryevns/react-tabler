import React from "react";

import Button from "../Button";
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
            <Button variant="primary" onClick={handleShow}>
                Show Modal
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>Modal header</Modal.Header>
                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
