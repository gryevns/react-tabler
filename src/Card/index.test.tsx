import React from "react";
import { shallow } from "enzyme";

import Card from "./index";

describe("Card", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(
            <Card>
                <Card.Header>
                    <Card.Title>Card title</Card.Title>
                </Card.Header>
                <Card.Body>
                    <p>This is some text within a card body.</p>
                </Card.Body>
            </Card>,
        );
        expect(wrapper).toMatchSnapshot();
    });
    it("should match size snapshot", () => {
        ["sm" as const, undefined, "md" as const, "lg" as const].map(size => {
            const wrapper = shallow(
                <Card size={size}>
                    <Card.Body>This is some text within a card body.</Card.Body>
                </Card>,
            );
            expect(wrapper).toMatchSnapshot();
        });
    });
    it("should match active snapshot", () => {
        [true, false].map(active => {
            const wrapper = shallow(
                <Card active={active}>
                    <Card.Body>Test</Card.Body>
                </Card>,
            );
            expect(wrapper).toMatchSnapshot();
        });
    });
    it("should match group snapshot", () => {
        const wrapper = shallow(
            <Card.Group>
                <Card inactive>
                    <Card.Body>First card</Card.Body>
                </Card>
                <Card active>
                    <Card.Body>Second card</Card.Body>
                </Card>
            </Card.Group>,
        );
        expect(wrapper).toMatchSnapshot();
    });
    it("should match status snaphost", () => {
        ["top", "bottom", "left"].map(position => {
            const props = { [position]: true, color: "purple" as const };
            const wrapper = shallow(<Card.Status {...props} />);
            expect(wrapper).toMatchSnapshot();
        });
    });
    it("should match stacked snapshot", () => {
        const wrapper = shallow(<Card stacked />);
        expect(wrapper).toMatchSnapshot();
    });
    it("should match loading snapshot", () => {
        const wrapper = shallow(<Card.Body loading={true} />);
        expect(wrapper).toMatchSnapshot();
    });
});
