import React from "react";
import { Heart } from "react-feather";

import Button from "../Button";
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
            <Button.List>
                {placements.map((placement) => (
                    <Tooltip content="Tooltip Content" placement={placement}>
                        <button className="btn btn-secondary mb-0">
                            Tooltip on {placement}
                        </button>
                    </Tooltip>
                ))}
            </Button.List>
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
