import React from "react";
import { shallow, mount } from "enzyme";

import Dropdown from "./index";

describe("Dropdown", () => {
    it("should match snapshot", () => {
        const component = shallow(
            <Dropdown>
                <Dropdown.Button variant="secondary">Click Me!</Dropdown.Button>
                <Dropdown.Menu>
                    <Dropdown.Item>Dropdown link</Dropdown.Item>
                    <Dropdown.Item>Dropdown link</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>,
        );
        expect(component).toMatchSnapshot();
    });
    it("should match link snapshot", () => {
        const component = shallow(
            <Dropdown>
                <Dropdown.Link>Click Me!&nbsp;</Dropdown.Link>
                <Dropdown.Menu arrow>
                    <Dropdown.Item>Dropdown link</Dropdown.Item>
                    <Dropdown.Item>Dropdown link</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>,
        );
        expect(component).toMatchSnapshot();
    });
    it("should render dropdown on click", () => {
        const component = mount(
            <Dropdown>
                <Dropdown.Button variant="secondary">Click Me!</Dropdown.Button>
                <Dropdown.Menu>
                    <Dropdown.Item>Dropdown link</Dropdown.Item>
                    <Dropdown.Item>Dropdown link</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>,
        );
        expect(component.find(".dropdown-menu").prop("className")).not.toContain(
            "show",
        );
        component.find("button").simulate("click");
        expect(component.find(".dropdown-menu").prop("className")).toContain("show");
    });
});
