import React from "react";
import { shallow } from "enzyme";

import Header from "./index";
import Page from "../Page";

describe("Header", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(
            <Header>
                <Page.Container>
                    <Header.Title href="#">Title</Header.Title>
                </Page.Container>
            </Header>,
        );
        expect(wrapper).toMatchSnapshot();
    });
});
