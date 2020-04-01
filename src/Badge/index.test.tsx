import React from "react";
import { shallow } from "enzyme";

import { colors, Color } from "../common";
import Badge from "./index";

describe("Badge", () => {
    it("should match color snapshot", () => {
        colors.map((color: Color) => {
            const wrapper = shallow(<Badge color={color} />);
            expect(wrapper).toMatchSnapshot();
        });
    });
    it("should match pill snapshot", () => {
        const wrapper = shallow(<Badge pill />);
        expect(wrapper).toMatchSnapshot();
    });
    it("should match soft snapshot", () => {
        const wrapper = shallow(<Badge soft />);
        expect(wrapper).toMatchSnapshot();
    });
    it("should match link snapshot", () => {
        const wrapper = shallow(<Badge link="https://www.test.com" />);
        expect(wrapper).toMatchSnapshot();
    });
    it("should match empty snapshot", () => {
        const wrapper = shallow(<Badge />);
        expect(wrapper).toMatchSnapshot();
    });
    it("should match addon snapshot", () => {
        const wrapper = shallow(
            <Badge color="green">
                Task<Badge.Addon>Finished</Badge.Addon>
            </Badge>,
        );
        expect(wrapper).toMatchSnapshot();
    });
    it("should match avatar snapshot", () => {
        const wrapper = shallow(
            <Badge color="blue">
                <Badge.Avatar imageURL="https://picsum.photos/id/353/128/128">
                    JL
                </Badge.Avatar>
                ABC DEF
            </Badge>,
        );
        expect(wrapper).toMatchSnapshot();
    });
});
