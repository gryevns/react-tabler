import React from "react";
import { shallow } from "enzyme";

import Progress from "./index";

describe("Progress", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(
            <Progress size="md">
                <Progress.Bar width={66} />
            </Progress>,
        );
        expect(wrapper).toMatchSnapshot();
    });
    it("should match in snapshot", () => {
        const wrapper = shallow(<Progress.Bar color="red" indeterminate />);
        expect(wrapper).toMatchSnapshot();
    });
});
