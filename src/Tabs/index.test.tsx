import React from "react";
import { mount } from "enzyme";

import Tabs from "./index";

const Test = props => (
    <Tabs {...props}>
        <Tabs.Tab title="c1" eventKey="c1">
            content1
        </Tabs.Tab>
        <Tabs.Tab title="c2" eventKey="c2">
            content2
        </Tabs.Tab>
    </Tabs>
);

describe("Tabs", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<Test />);
        expect(wrapper).toMatchSnapshot();
    });
    it("should match cards snapshot", () => {
        const wrapper = mount(<Test cards />);
        expect(wrapper).toMatchSnapshot();
    });
    it("should match fill snapshot", () => {
        const wrapper = mount(<Test fill />);
        expect(wrapper).toMatchSnapshot();
    });
    it("should match alt snapshot", () => {
        const wrapper = mount(<Test alt />);
        expect(wrapper).toMatchSnapshot();
    });
    it("should load first tab by default", () => {
        const wrapper = mount(<Test />);
        expect(wrapper.text().includes("content1")).toBeTruthy();
        expect(wrapper.text().includes("content2")).toBeFalsy();
    });
    it("should load defaultEventKey tab by default", () => {
        const wrapper = mount(<Test defaultEventKey="c2" />);
        expect(wrapper.text().includes("content1")).toBeFalsy();
        expect(wrapper.text().includes("content2")).toBeTruthy();
    });
    it("should switch tab by click", () => {
        const wrapper = mount(<Test defaultEventKey="c1" />);
        expect(wrapper.text().includes("content1")).toBeTruthy();
        wrapper
            .find("li")
            .at(1)
            .simulate("click");
        expect(wrapper.text().includes("content2")).toBeTruthy();
    });
});
