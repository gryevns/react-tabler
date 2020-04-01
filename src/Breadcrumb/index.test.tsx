import React from "react";
import { shallow } from "enzyme";

import Breadcrumb, { Type } from "./index";

describe("Breadcrumb", () => {
    it("should match types snapshot", () => {
        [undefined, "dots", "arrows", "bullets"].map((type: Type) => {
            const wrapper = shallow(
                <Breadcrumb type={type}>
                    <Breadcrumb.Item>
                        <a href="#">Home</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="#">Library</a>
                    </Breadcrumb.Item>
                </Breadcrumb>,
            );
            expect(wrapper).toMatchSnapshot();
        });
    });
});
