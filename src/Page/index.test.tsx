import React from "react";
import { shallow } from "enzyme";

import Page from "./index";

describe("Page", () => {
    it("should match page snapshot", () => {
        const wrapper = shallow(<Page>Page</Page>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should match page content snapshot", () => {
        const wrapper = shallow(<Page.Content>Content</Page.Content>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should match page container snapshot", () => {
        const wrapper = shallow(<Page.Container>Container</Page.Container>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should match page header snapshot", () => {
        const wrapper = shallow(<Page.Header>Header</Page.Header>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should match page pretitle snapshot", () => {
        const wrapper = shallow(<Page.Pretitle>Pretitle</Page.Pretitle>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should match page title snapshot", () => {
        const wrapper = shallow(<Page.Title>Title</Page.Title>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should match page subtitle snapshot", () => {
        const wrapper = shallow(<Page.SubTitle>SubTitle</Page.SubTitle>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should match page subfooter snapshot", () => {
        const wrapper = shallow(<Page.SubFooter>SubFooter</Page.SubFooter>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should match page footer snapshot", () => {
        const wrapper = shallow(<Page.Footer>Footer</Page.Footer>);
        expect(wrapper).toMatchSnapshot();
    });
});
