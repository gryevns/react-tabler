import React from "react";
import { shallow } from "enzyme";

import Carousel from "./index";

describe("Carousel", () => {
    it("should match types snapshot", () => {
        const component = shallow(
            <Carousel>
                <Carousel.Item key="first" src="first">
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Item>
                <Carousel.Item key="second" src="second">
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Item>
            </Carousel>,
        );
        expect(component).toMatchSnapshot();
    });
    it.skip("should iterate items after timeout", () => {
        const wrapper = shallow(
            <Carousel interval={1000}>
                <Carousel.Item key="first" src="first">
                    <h3>First slide label</h3>
                </Carousel.Item>
                <Carousel.Item key="second" src="second">
                    <h3>Second slide label</h3>
                </Carousel.Item>
            </Carousel>,
        );
        jest.useFakeTimers();
        setTimeout(() => {
            const active = wrapper.findWhere(
                n => n.name() === "CarouselItem" && n.prop("active") === true,
            );
            expect(active.prop("src")).toEqual("second");
        }, 1500);
        jest.runAllTimers();
    });
});
