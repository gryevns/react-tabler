import React from "react";

import Card from "../Card";

export const ChangeCard = ({
    label = "New Tickets",
    total = "43",
    movement = 6,
}) => {
    const movementString = `${movement}%`;
    const movementColor = !movement ? "yellow" : movement > 0 ? "green" : "red";
    return (
        <Card>
            <Card.Body className="p-3 text-center">
                {movement !== undefined && (
                    <div className={`text-right text-${movementColor}`}>
                        {movementString}
                    </div>
                )}
                <div className="display-4 font-weight-bold m-0">{total}</div>
                <h5 className="mb-4">{label}</h5>
            </Card.Body>
        </Card>
    );
};

export default ChangeCard;
