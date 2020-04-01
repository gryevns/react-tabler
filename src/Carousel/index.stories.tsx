import React from "react";

import Carousel from "../Carousel";

export default {
    title: "Carousel",
};

export const Controls = () => (
    <Carousel>
        <Carousel.Item key="first" src="https://picsum.photos/id/221/1440/400">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Item>
        <Carousel.Item key="second" src="https://picsum.photos/id/232/1440/400">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Item>
        <Carousel.Item key="third" src="https://picsum.photos/id/229/1440/400">
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Item>
    </Carousel>
);

export const Simple = () => (
    <Carousel indicators={false} controls={false} interval={2000}>
        <Carousel.Item key="first" src="https://picsum.photos/id/221/1440/400">
            <h3>First slide label</h3>
        </Carousel.Item>
        <Carousel.Item key="second" src="https://picsum.photos/id/232/1440/400">
            <h3>Second slide label</h3>
        </Carousel.Item>
        <Carousel.Item key="third" src="https://picsum.photos/id/229/1440/400">
            <h3>Third slide label</h3>
        </Carousel.Item>
    </Carousel>
);
