import React from "react";
import { shallow } from "enzyme";

import Link from "./index";
import { variants } from "../common";

describe("Link", () => {
    it("should match snapshot", () => {
        variants.map(variant => {
            const wrapper = shallow(<Link variant={variant}>link</Link>);
            expect(wrapper).toMatchSnapshot();
        });
    });
});
