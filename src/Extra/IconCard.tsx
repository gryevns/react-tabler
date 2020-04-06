import React from "react";

export const IconStat = ({
    total = "11",
    label = "example",
    children,
    value = "23",
    color = "blue",
}) => (
    <div className="card p-3">
        <div className="d-flex align-items-center">
            <span className={`stamp stamp-md bg-${color} mr-3`}>{children}</span>
            <div>
                <h4 className="m-0">
                    <a href="#">
                        {total} <small>{label}</small>
                    </a>
                </h4>
                <small className="text-muted">{value}</small>
            </div>
        </div>
    </div>
);

export default IconStat;
