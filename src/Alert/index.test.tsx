import React from "react";
import { shallow } from "enzyme";

import { variants, Variant } from "../common";
import Alert from "./index";

describe("Alert", () => {
    it("should match variant snapshot", () => {
        variants.map((variant: Variant) => {
            const wrapper = shallow(<Alert variant={variant}>Content</Alert>);
            expect(wrapper).toMatchSnapshot();
        });
    });
    it("should render null if invisible", () => {
        const wrapper = shallow(
            <Alert variant="primary" visible={false}>
                Hidden
            </Alert>,
        );
        expect(wrapper.isEmptyRender()).toBe(true);
    });
    it("should hide on close", () => {
        const wrapper = shallow(<Alert variant="primary">Content</Alert>);
        expect(wrapper.isEmptyRender()).toBe(false);
        wrapper.find("a").simulate("click", { preventDefault: () => {} });
        expect(wrapper.isEmptyRender()).toBe(true);
    });
});
