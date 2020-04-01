import React from "react";
import { Trash } from "react-feather";

import Avatar from "../Avatar";
import Card from "../Card";
import List from "../List";

export default {
    title: "List",
};

export const Default = () => (
    <List>
        <List.Item>An Item</List.Item>
        <List.Item>Another Item</List.Item>
        <List.Item>A third item</List.Item>
    </List>
);

export const Unstyled = () => (
    <List unstyled>
        <List.Item>An Item</List.Item>
        <List.Item>Another Item</List.Item>
        <List.Item>A third item</List.Item>
    </List>
);

export const Styled = () => (
    <Card>
        <Card.Header>
            <Card.Title>Members</Card.Title>
        </Card.Header>
        <Card.Body className="overflow-auto" style={{ height: "15rem" }}>
            <List unstyled seperated>
                <List.Item separated>
                    <div className="row align-items-center">
                        <div className="col-auto">
                            <Avatar>EG</Avatar>
                        </div>
                        <div className="col">
                            Amanda Hunt
                            <small className="d-block item-except text-sm text-muted h-1x">
                                amanda_hunt@example.com
                            </small>
                        </div>
                        <div className="col-auto">
                            <Trash />
                        </div>
                    </div>
                </List.Item>
                <List.Item separated>
                    <div className="row align-items-center">
                        <div className="col-auto">
                            <Avatar>EG</Avatar>
                        </div>
                        <div className="col">
                            Amanda Hunt
                            <small className="d-block item-except text-sm text-muted h-1x">
                                amanda_hunt@example.com
                            </small>
                        </div>
                        <div className="col-auto">
                            <Trash />
                        </div>
                    </div>
                </List.Item>
                <List.Item separated>
                    <div className="row align-items-center">
                        <div className="col-auto">
                            <Avatar>EG</Avatar>
                        </div>
                        <div className="col">
                            Amanda Hunt
                            <small className="d-block item-except text-sm text-muted h-1x">
                                amanda_hunt@example.com
                            </small>
                        </div>
                        <div className="col-auto">
                            <Trash />
                        </div>
                    </div>
                </List.Item>
                <List.Item separated>
                    <div className="row align-items-center">
                        <div className="col-auto">
                            <Avatar>EG</Avatar>
                        </div>
                        <div className="col">
                            Amanda Hunt
                            <small className="d-block item-except text-sm text-muted h-1x">
                                amanda_hunt@example.com
                            </small>
                        </div>
                        <div className="col-auto">
                            <Trash />
                        </div>
                    </div>
                </List.Item>
                <List.Item separated>
                    <div className="row align-items-center">
                        <div className="col-auto">
                            <Avatar>EG</Avatar>
                        </div>
                        <div className="col">
                            Amanda Hunt
                            <small className="d-block item-except text-sm text-muted h-1x">
                                amanda_hunt@example.com
                            </small>
                        </div>
                        <div className="col-auto">
                            <Trash />
                        </div>
                    </div>
                </List.Item>
            </List>
        </Card.Body>
    </Card>
);
