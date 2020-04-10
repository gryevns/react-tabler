import React from "react";

import Card from "../Card";

export const StatCard = ({
    movement = 11,
    total = "23",
    label = "example",
    color,
    children = null,
    childrenPosition = "inside",
}) => {
    const movementString = `${movement}%`;
    const movementColor = !movement ? "yellow" : movement > 0 ? "green" : "red";
    return (
        <Card>
            <Card.Body>
                {movement !== undefined && (
                    <div
                        className={`card-value float-right text-${color ||
                            movementColor}`}
                    >
                        {movementString}
                    </div>
                )}
                <h3 className="mb-1">{total}</h3>
                <div className="text-muted">{label}</div>
                {childrenPosition !== "outside" && children}
            </Card.Body>
            {childrenPosition === "outside" && children}
        </Card>
    );
};

export default StatCard;
