import React from "react";
import { Star } from "react-feather";

import Card from "../Card";
import Grid from "../Grid";
import Ribbon from "../Ribbon";
import { colors } from "../common";
import { boolean, withKnobs } from "@storybook/addon-knobs";

export default {
    title: "Ribbon",
    decorators: [withKnobs],
};

export const Position = () => (
    <Card>
        <Card.Body className="h-6"></Card.Body>
        <Ribbon
            top={boolean("Top", false)}
            right={boolean("Right", false)}
            bottom={boolean("Bottom", false)}
            left={boolean("Left", false)}
        >
            <Star size={18} color="white" />
        </Ribbon>
    </Card>
);

export const Colors = () => (
    <Grid.Row>
        {colors.map(color => (
            <Card className="h-6 w-6 mr-3">
                <Ribbon color={color} bookmark={boolean("Bookmark", false)}>
                    <Star size={18} color="white" />
                </Ribbon>
            </Card>
        ))}
    </Grid.Row>
);
