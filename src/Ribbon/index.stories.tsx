import React from "react";
import { Star } from "react-feather";

import Card from "../Card";
import Grid from "../Grid";
import Ribbon from "../Ribbon";
import { colors } from "../common";

export default {
    title: "Ribbon",
};

export const Position = () => {
    const positions = [
        ["top"],
        ["right"],
        ["bottom"],
        ["bottom", "left"],
        ["left"],
        ["top", "left"],
    ];
    return (
        <Grid.Row>
            {positions.map(position => {
                const props = position.reduce((result, p) => {
                    result[p] = true;
                    return result;
                }, {});
                return (
                    <Grid.Col width={4}>
                        <Card>
                            <Card.Body className="h-8"></Card.Body>
                            <Ribbon {...props}>
                                <Star size={18} color="white" />
                            </Ribbon>
                        </Card>
                    </Grid.Col>
                );
            })}
        </Grid.Row>
    );
};

export const Colors = () => (
    <Grid.Row>
        {colors.map(color => (
            <Grid.Col>
                <Ribbon color={color}>
                    <Star size={18} color="white" />
                </Ribbon>
            </Grid.Col>
        ))}
    </Grid.Row>
);

export const Bookmark = () => (
    <Ribbon bookmark>
        <Star size={18} color="white" />
    </Ribbon>
);
