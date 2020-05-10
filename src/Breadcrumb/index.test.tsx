import React from "react";
import { shallow } from "enzyme";

import Breadcrumb from "./index";

describe("Breadcrumb", () => {
    it("should match types snapshot", () => {
        [undefined, "dots" as const, "arrows" as const, "bullets" as const].map(
            type => {
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
            },
        );
    });
});
