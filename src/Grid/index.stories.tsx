import React from "react";

import Card from "../Card";
import Grid from "../Grid";

export default {
    title: "Grid",
};

export const Layout = () => (
    <>
        <Grid.Row>
            <Grid.Col sm={12} md={6}>
                <Card>
                    <Card.Body>1 of 2</Card.Body>
                </Card>
            </Grid.Col>
            <Grid.Col sm={12} md={6}>
                <Card>
                    <Card.Body>2 of 2</Card.Body>
                </Card>
            </Grid.Col>
        </Grid.Row>
        <Grid.Row>
            <Grid.Col>
                <Card>
                    <Card.Body>1 of 3</Card.Body>
                </Card>
            </Grid.Col>
            <Grid.Col>
                <Card>
                    <Card.Body>2 of 3</Card.Body>
                </Card>
            </Grid.Col>
            <Grid.Col>
                <Card>
                    <Card.Body>3 of 3</Card.Body>
                </Card>
            </Grid.Col>
        </Grid.Row>
    </>
);
