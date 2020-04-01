import React from "react";
import { shallow } from "enzyme";

import Grid from "./index";

describe("Grid", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(
            <Grid.Row>
                <Grid.Col>1 of 2</Grid.Col>
                <Grid.Col>2 of 2</Grid.Col>
            </Grid.Row>,
        );
        expect(wrapper).toMatchSnapshot();
    });
});
