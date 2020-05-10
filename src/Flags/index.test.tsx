import React from "react";
import { shallow } from "enzyme";

import Flag from "./index";

describe("Flag", () => {
    it("should match country snapshot", () => {
        const wrapper = shallow(<Flag country="gb" />);
        expect(wrapper).toMatchSnapshot();
    });
    it("should match size snapshot", () => {
        ["xl" as const, "lg" as const, "md" as const].map(size => {
            const wrapper = shallow(<Flag country="gb" size={size} />);
            expect(wrapper).toMatchSnapshot();
        });
    });
});
