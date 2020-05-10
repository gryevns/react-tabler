import React from "react";
import { shallow } from "enzyme";

import { colors, variants } from "../common";
import Buttons from "./index";

describe("Buttons", () => {
    it("should match button snapshot", () => {
        const wrapper = shallow(<Buttons.Button>Test</Buttons.Button>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should handle onClick for button", () => {
        const mock = jest.fn();
        const wrapper = shallow(
            <Buttons.Button onClick={mock}>Test</Buttons.Button>,
        );
        wrapper.find("button").simulate("click");
        expect(mock).toHaveBeenCalled();
    });
    it("should match anchor snapshot", () => {
        const wrapper = shallow(<Buttons.Anchor>Test</Buttons.Anchor>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should handle onClick for anchor", () => {
        const mock = jest.fn();
        const wrapper = shallow(
            <Buttons.Anchor onClick={mock}>Test</Buttons.Anchor>,
        );
        wrapper.find("a").simulate("click");
        expect(mock).toHaveBeenCalled();
    });
    it("should match input snapshot", () => {
        const wrapper = shallow(<Buttons.Input>Test</Buttons.Input>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should handle onClick for input", () => {
        const mock = jest.fn();
        const wrapper = shallow(<Buttons.Input onClick={mock}>Test</Buttons.Input>);
        wrapper.find("input").simulate("click");
        expect(mock).toHaveBeenCalled();
    });
    it("should match variant snapshot", () => {
        [...variants, "light" as const, "dark" as const, "link" as const].map(
            variant => {
                const wrapper = shallow(
                    <Buttons.Button variant={variant}>{variant}</Buttons.Button>,
                );
                expect(wrapper).toMatchSnapshot();
            },
        );
    });
    it("should match color snaphot", () => {
        colors.map(color => {
            const wrapper = shallow(
                <Buttons.Button color={color}>{color}</Buttons.Button>,
            );
            expect(wrapper).toMatchSnapshot();
        });
    });
    it("should match ghost snapshot", () => {
        const wrapper = shallow(<Buttons.Button ghost>Test</Buttons.Button>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should match disabled snapshot", () => {
        const wrapper = shallow(<Buttons.Button disabled>Test</Buttons.Button>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should match square snapshot", () => {
        const wrapper = shallow(<Buttons.Button square>Test</Buttons.Button>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should match pill snapshot", () => {
        const wrapper = shallow(<Buttons.Button pill>Test</Buttons.Button>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should match outline snapshot", () => {
        const wrapper = shallow(<Buttons.Button outline>Test</Buttons.Button>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should match loading snapshot", () => {
        const wrapper = shallow(<Buttons.Button loading>Test</Buttons.Button>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should match sizes snapshot", () => {
        ["sm" as const, "md" as const, "lg" as const].map(size => {
            const wrapper = shallow(
                <Buttons.Button size={size}>{size}</Buttons.Button>,
            );
            expect(wrapper).toMatchSnapshot();
        });
    });
    it("should match icon snapshot", () => {
        const wrapper = shallow(<Buttons.Button icon>Icon</Buttons.Button>);
        expect(wrapper).toMatchSnapshot();
    });
});
