import React from "react";

import Form, { ImageCheck } from "../../Form";
import Grid from "../../Grid";

export default {
    title: "Form/Image Check",
};

const images = [
    {
        src: "https://picsum.photos/id/237/300/200",
        alt: "abc",
    },
    {
        src: "https://picsum.photos/id/337/300/200",
        alt: "abc",
    },
    {
        src: "https://picsum.photos/id/437/300/200",
        alt: "abc",
    },
    {
        src: "https://picsum.photos/id/537/300/200",
        alt: "abc",
    },
    {
        src: "https://picsum.photos/id/637/300/200",
        alt: "abc",
    },
    {
        src: "https://picsum.photos/id/737/300/200",
        alt: "abc",
    },
    {
        src: "https://picsum.photos/id/837/300/200",
        alt: "abc",
    },
    {
        src: "https://picsum.photos/id/937/300/200",
        alt: "abc",
    },
    {
        src: "https://picsum.photos/id/1037/300/200",
        alt: "abc",
    },
];

export const Default = () => (
    <Form style={{ width: 500 }}>
        <Grid.Row>
            {images.map(image => (
                <Grid.Col width={6} sm={4}>
                    <ImageCheck.Label className="mb-2">
                        <ImageCheck.Input />
                        <ImageCheck.Figure {...image} />
                    </ImageCheck.Label>
                </Grid.Col>
            ))}
        </Grid.Row>
    </Form>
);
