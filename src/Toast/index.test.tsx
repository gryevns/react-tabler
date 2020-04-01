import React from "react";
import { shallow, mount } from "enzyme";

import Toast from "./index";

describe("Toast", () => {
    it("should match toast snapshot", () => {
        const wrapper = shallow(
            <Toast>
                <Toast.Header>
                    <Toast.Title>title</Toast.Title>
                </Toast.Header>
                <Toast.Body>body</Toast.Body>
            </Toast>
        );
        expect(wrapper).toMatchSnapshot();
    });
    it("should match header snapshot", () => {
        const wrapper = shallow(
            <Toast.Header>
                <Toast.Title>title</Toast.Title>
            </Toast.Header>
        );
        expect(wrapper).toMatchSnapshot();
    });
    it("should match title snapshot", () => {
        const wrapper = shallow(<Toast.Title>title</Toast.Title>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should match body snapshot", () => {
        const wrapper = shallow(<Toast.Body>body</Toast.Body>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should hide on close", () => {
        const wrapper = mount(
            <Toast>
                <Toast.Header>
                    <Toast.Title>title</Toast.Title>
                </Toast.Header>
                <Toast.Body>body</Toast.Body>
            </Toast>
        );
        wrapper.find("button").simulate("click");
        expect(wrapper.isEmptyRender()).toBe(true);
    });
});
