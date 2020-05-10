import React from "react";
import { shallow } from "enzyme";

import Tooltip from "./index";

describe("Tooltip", () => {
    it("should match toast snapshot", () => {
        const wrapper = shallow(
            <Tooltip placement="bottom" content="test">
                <div />
            </Tooltip>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
