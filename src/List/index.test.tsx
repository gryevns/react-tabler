import React from "react";
import { shallow } from "enzyme";

import List from "./index";

describe("List", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(
            <List>
                <List.Item>An Item</List.Item>
                <List.Item>Another Item</List.Item>
                <List.Item>A third item</List.Item>
            </List>,
        );
        expect(wrapper).toMatchSnapshot();
    });
    it("should match snapshot", () => {
        const wrapper = shallow(
            <List unstyled>
                <List.Item>An Item</List.Item>
                <List.Item>Another Item</List.Item>
                <List.Item>A third item</List.Item>
            </List>,
        );
        expect(wrapper).toMatchSnapshot();
    });
});
