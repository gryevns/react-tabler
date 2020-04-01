import React from "react";
import { shallow } from "enzyme";

import { colors, Color, sizes, Size } from "../common";
import Avatar, { Shape } from "./index";

describe("Avatar", () => {
    it("should match color snapshot", () => {
        colors.map((color: Color) => {
            const wrapper = shallow(<Avatar color={color} />);
            expect(wrapper).toMatchSnapshot();
        });
    });
    it("should match size snapshot", () => {
        sizes.map((size: Size) => {
            const wrapper = shallow(<Avatar size={size} />);
            expect(wrapper).toMatchSnapshot();
        });
    });
    it("should match status snapshot", () => {
        colors.map((color: Color) => {
            const wrapper = shallow(<Avatar status={color} />);
            expect(wrapper).toMatchSnapshot();
        });
    });
    it("should match shape snapshot", () => {
        const shapes = ["", "rounded", "rounded-circle", "rounded-0", "rounded-lg"];
        shapes.map((shape: Shape) => {
            const wrapper = shallow(<Avatar shape={shape} />);
            expect(wrapper).toMatchSnapshot();
        });
    });
    it("should match list snapshot", () => {
        const wrapper = shallow(
            <Avatar.List>
                <Avatar>1</Avatar>
                <Avatar>2</Avatar>
            </Avatar.List>,
        );
        expect(wrapper).toMatchSnapshot();
    });
    it("should match stacked snapshot", () => {
        const wrapper = shallow(
            <Avatar.List stacked>
                <Avatar>1</Avatar>
                <Avatar>2</Avatar>
            </Avatar.List>,
        );
        expect(wrapper).toMatchSnapshot();
    });
});
