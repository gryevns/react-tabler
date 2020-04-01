import React from "react";
import { shallow } from "enzyme";

import { variants, Variant, colors, Color } from "../common";
import Button from "./index";

describe("Button", () => {
    it("should match button snapshot", () => {
        const wrapper = shallow(<Button>button</Button>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should match anchor snapshot", () => {
        const render = props => (
            <a {...props} href="#">
                Anchor Button
            </a>
        );
        const wrapper = shallow(<Button render={render} />);
        expect(wrapper).toMatchSnapshot();
    });
    it("should match variant snapshot", () => {
        variants.map((variant: Variant) => {
            const wrapper = shallow(<Button variant={variant} />);
            expect(wrapper).toMatchSnapshot();
        });
    });
    it("should match color snapshot", () => {
        colors.map((color: Color) => {
            const wrapper = shallow(<Button color={color} />);
            expect(wrapper).toMatchSnapshot();
        });
    });
    it("should match disabled snapshot", () => {
        const wrapper = shallow(<Button disabled />);
        expect(wrapper).toMatchSnapshot();
    });
    it("should match square snapshot", () => {
        const wrapper = shallow(<Button square />);
        expect(wrapper).toMatchSnapshot();
    });
    it("should match pill snapshot", () => {
        const wrapper = shallow(<Button pill />);
        expect(wrapper).toMatchSnapshot();
    });
    it("should match outline snapshot", () => {
        const wrapper = shallow(<Button outline />);
        expect(wrapper).toMatchSnapshot();
    });
    it("should match loading snapshot", () => {
        const wrapper = shallow(<Button loading />);
        expect(wrapper).toMatchSnapshot();
    });
    it("should match size snapshot", () => {
        ["sm" as const, "md" as const, "lg" as const].map(size => {
            const wrapper = shallow(<Button size={size} />);
            expect(wrapper).toMatchSnapshot();
        });
    });
    it("should match icon snapshot", () => {
        const wrapper = shallow(<Button icon />);
        expect(wrapper).toMatchSnapshot();
    });
    it("should fire onClick", () => {
        const func = jest.fn();
        const wrapper = shallow(<Button onClick={func} />);
        wrapper.find("button").simulate("click");
        expect(func).toHaveBeenCalled();
    });
});
