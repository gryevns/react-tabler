import React from "react";
import { shallow } from "enzyme";

import List from "./index";

describe("List", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(
            <List>
                <List.Item>item</List.Item>
            </List>,
        );
        expect(wrapper).toMatchSnapshot();
    });
    it("should match unstyled snapshot", () => {
        const wrapper = shallow(
            <List unstyled>
                <List.Item>item</List.Item>
            </List>,
        );
        expect(wrapper).toMatchSnapshot();
    });
    it("should match item snapshot", () => {
        const wrapper = shallow(<List.Item>item</List.Item>);
        expect(wrapper).toMatchSnapshot();
    });
});
