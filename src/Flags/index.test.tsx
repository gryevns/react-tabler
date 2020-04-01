import React from "react";
import { shallow } from "enzyme";

import Flag, { Size } from "./index";

describe("Flag", () => {
    it("should match country snapshot", () => {
        const wrapper = shallow(<Flag country="gb" />);
        expect(wrapper).toMatchSnapshot();
    });
    it("should match size snapshot", () => {
        ["xl", "lg", "md", "sm"].map((size: Size) => {
            const wrapper = shallow(<Flag country="gb" />);
            expect(wrapper).toMatchSnapshot();
        });
    });
});
