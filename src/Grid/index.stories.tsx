import React from "react";

import Grid from "../Grid";

export default {
    title: "Grid",
};

export const Layout = () => (
    <>
        <Grid.Row>
            <Grid.Col>1 of 2</Grid.Col>
            <Grid.Col>2 of 2</Grid.Col>
        </Grid.Row>
        <Grid.Row>
            <Grid.Col>1 of 3</Grid.Col>
            <Grid.Col>2 of 3</Grid.Col>
            <Grid.Col>3 of 3</Grid.Col>
        </Grid.Row>
    </>
);

export const Size = () => (
    <div className="container" style={{ width: "500px" }}>
        <Grid.Row size="0" style={{ background: "red" }}>
            <Grid.Col>0</Grid.Col>
        </Grid.Row>
        <Grid.Row size="sm" style={{ background: "red" }}>
            <Grid.Col>sm</Grid.Col>
        </Grid.Row>
        <Grid.Row size="md" style={{ background: "red" }}>
            <Grid.Col>md</Grid.Col>
        </Grid.Row>
        <Grid.Row size="lg" style={{ background: "red" }}>
            <Grid.Col>lg</Grid.Col>
        </Grid.Row>
    </div>
);
