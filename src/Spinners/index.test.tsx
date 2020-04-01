import React from "react";
import { shallow } from "enzyme";

import Spinner from "./index";

describe("Spinners", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<Spinner color="red" size="sm" grow />);
        expect(wrapper).toMatchSnapshot();
    });
});
