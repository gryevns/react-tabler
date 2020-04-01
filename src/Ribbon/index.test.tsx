import React from "react";
import { shallow } from "enzyme";

import { colors, Color } from "../common";
import Ribbon from "./index";

describe("Ribbon", () => {
    it("should match color snapshot", () => {
        colors.map((color: Color) => {
            const component = shallow(<Ribbon color={color} />);
            expect(component).toMatchSnapshot();
        });
    });
    it("should match top snapshot", () => {
        const component = shallow(<Ribbon top />);
        expect(component).toMatchSnapshot();
    });
    it("should match right snapshot", () => {
        const component = shallow(<Ribbon right />);
        expect(component).toMatchSnapshot();
    });
    it("should match bottom snapshot", () => {
        const component = shallow(<Ribbon bottom />);
        expect(component).toMatchSnapshot();
    });
    it("should match left snapshot", () => {
        const component = shallow(<Ribbon left />);
        expect(component).toMatchSnapshot();
    });
    it("should match bookmark snapshot", () => {
        const component = shallow(<Ribbon bookmark />);
        expect(component).toMatchSnapshot();
    });
});
