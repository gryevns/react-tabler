import React from "react";
import { shallow } from "enzyme";

import Grid from "./index";

describe("Grid", () => {
    it("should match grid snapshot", () => {
        const wrapper = shallow(
            <Grid.Row>
                <Grid.Col>1 of 2</Grid.Col>
                <Grid.Col>2 of 2</Grid.Col>
            </Grid.Row>,
        );
        expect(wrapper).toMatchSnapshot();
    });
    it("should match col snapshot", () => {
        const wrapper = shallow(<Grid.Col>test</Grid.Col>);
        expect(wrapper).toMatchSnapshot();
    });
});
