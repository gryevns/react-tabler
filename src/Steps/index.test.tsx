import React from "react";
import { shallow } from "enzyme";

import Steps from "./index";

describe("Steps", () => {
    it("should match steps snapshot", () => {
        const wrapper = shallow(
            <Steps color="red">
                <Steps.Step>Step 1</Steps.Step>
                <Steps.Step active>Step 2</Steps.Step>
                <Steps.Step>Step 3</Steps.Step>
                <Steps.Step>Step 4</Steps.Step>
            </Steps>,
        );
        expect(wrapper).toMatchSnapshot();
    });
    it("should match step snapshot", () => {
        const wrapper = shallow(<Steps.Step>Step 1</Steps.Step>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should match active step snapshot", () => {
        const wrapper = shallow(<Steps.Step active>Step 1</Steps.Step>);
        expect(wrapper).toMatchSnapshot();
    });
});
