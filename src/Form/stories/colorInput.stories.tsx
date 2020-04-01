import React from "react";

import { colors } from "../../common";
import Form, { ColorInput } from "../../Form";
import Grid from "../../Grid";

export default {
    title: "Form/Color Input",
};

export const Default = () => (
    <Form>
        <Grid.Row>
            {colors.map(color => (
                <Grid.Col auto>
                    <ColorInput.Label>
                        <ColorInput.Input name="color" value={color} />
                        <ColorInput.Color color={color} />
                    </ColorInput.Label>
                </Grid.Col>
            ))}
        </Grid.Row>
    </Form>
);
