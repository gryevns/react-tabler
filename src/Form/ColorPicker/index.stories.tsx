import React from "react";

import { colors } from "../../common";
import Form from "..";
import ColorPicker from ".";
import Grid from "../../Grid";

export default {
    title: "Form/Color Picker",
};

export const Default = () => (
    <Form>
        <Grid.Row>
            {colors.map(color => (
                <Grid.Col auto>
                    <ColorPicker.Label>
                        <ColorPicker.Input name="color" value={color} />
                        <ColorPicker.Color color={color} />
                    </ColorPicker.Label>
                </Grid.Col>
            ))}
        </Grid.Row>
    </Form>
);
