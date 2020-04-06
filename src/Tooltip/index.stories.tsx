import React from "react";
import { Heart } from "react-feather";

import Buttons from "../Buttons";
import Card from "../Card";
import Tooltip from "../Tooltip";

export default {
    title: "Tooltip",
};

const placements = [
    "top" as const,
    "right" as const,
    "bottom" as const,
    "left" as const,
];

export const Placement = () => (
    <Card size="lg">
        <Card.Body>
            <Buttons.List>
                {placements.map((placement) => (
                    <Tooltip content="Tooltip Content" placement={placement}>
                        <Buttons.Button variant="secondary" className="mb-0">
                            Tooltip on {placement}
                        </Buttons.Button>
                    </Tooltip>
                ))}
            </Buttons.List>
        </Card.Body>
    </Card>
);

export const Elements = () => (
    <Tooltip content="Tooltip Content" placement="right">
        <div style={{ display: "inline-block", margin: 10 }}>
            <Heart size={18} />
        </div>
    </Tooltip>
);

export const Paragraph = () => (
    <Card>
        <Card.Body>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                ullamcorper porta viverra.{" "}
                <Tooltip content="Tooltip Content" placement="bottom">
                    <u>
                        <b>Class aptent taciti</b>
                    </u>
                </Tooltip>{" "}
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Donec vel gravida lacus, vel vestibulum sem. Donec blandit
                elit id sem suscipit aliquam. Praesent tellus lectus, bibendum ac
                convallis et, cursus at dolor. Vivamus enim arcu, rutrum quis ex
                eget,{" "}
                <Tooltip content="Tooltip Content" placement="top">
                    <u>
                        <b>venenatis fermentum dolor</b>
                    </u>
                </Tooltip>
                . Maecenas feugiat leo quis orci aliquet, in accumsan neque dapibus.
                Suspendisse magna velit, pulvinar id accumsan nec, dapibus nec
                mauris. Quisque finibus erat pharetra sollicitudin condimentum.{" "}
            </p>
        </Card.Body>
    </Card>
);
