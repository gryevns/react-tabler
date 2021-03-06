import React from "react";
import { shallow, mount } from "enzyme";

import Modal from "./index";

describe("Modal", () => {
    it("should match snapshot", () => {
        const handleClose = jest.fn();
        const wrapper = mount(
            <Modal show={true} onHide={handleClose}>
                <Modal.Header>Modal header</Modal.Header>
                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>
            </Modal>,
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(".modal-dialog")).toHaveLength(1);
        wrapper.find("button.close").simulate("click");
        expect(handleClose).toHaveBeenCalled();
    });
    it("should match size snapshot", () => {
        ["sm" as const, "md" as const, "lg" as const].map(size => {
            const wrapper = shallow(
                <Modal size={size} show onHide={null}>
                    test
                </Modal>,
            );
            expect(wrapper).toMatchSnapshot();
        });
    });
});
