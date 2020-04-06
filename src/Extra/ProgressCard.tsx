import React from "react";

import Card from "../Card";
import Progress from "../Progress";

export const ProgressCard = ({
    label = "New Feedback",
    value = "62",
    width = 28,
    color = undefined,
}) => (
    <Card>
        <Card.Body className="text-center">
            <h5>{label}</h5>
            <div className="display-4 font-weight-bold mb-4">{value}</div>
            <Progress size="sm">
                <Progress.Bar color={color} width={width} />
            </Progress>
        </Card.Body>
    </Card>
);

export default ProgressCard;
