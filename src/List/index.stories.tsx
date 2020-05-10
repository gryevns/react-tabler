import React from "react";
import { Trash, Heart, MoreVertical, MoreHorizontal } from "react-feather";

import Avatar from "../Avatar";
import Card from "../Card";
import Grid from "../Grid";
import Link from "../Link";
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
                {Array(10)
                    .fill(0)
                    .map(_ => (
                        <List.Item separated>
                            <Grid.Row className="align-items-center">
                                <Grid.Col auto>
                                    <Avatar>EG</Avatar>
                                </Grid.Col>
                                <Grid.Col>
                                    Amanda Hunt
                                    <small className="d-block item-except text-sm text-muted h-1x">
                                        amanda_hunt@example.com
                                    </small>
                                </Grid.Col>
                                <Grid.Col auto>
                                    <Trash size={16} />
                                </Grid.Col>
                            </Grid.Row>
                        </List.Item>
                    ))}
            </List>
        </Card.Body>
    </Card>
);

export const ListGroup = () => (
    <Card>
        <List.Group card>
            {Array(5)
                .fill(0)
                .map((_, index) => (
                    <List.GroupItem>
                        <Grid.Row size="sm" className="align-items-center">
                            <Grid.Col auto>
                                <Avatar>{index}</Avatar>
                            </Grid.Col>
                            <Grid.Col>
                                Górą ty
                                <div className="text-muted">
                                    GOLEC UORKIESTRA, Gromee, Bedoes
                                </div>
                            </Grid.Col>
                            <Grid.Col auto className="text-muted">
                                03:41
                            </Grid.Col>
                            <Grid.Col auto>
                                <Link variant="secondary">
                                    <Heart size={16} />
                                </Link>
                            </Grid.Col>
                            <Grid.Col auto>
                                <MoreHorizontal size={16} />
                            </Grid.Col>
                        </Grid.Row>
                    </List.GroupItem>
                ))}
        </List.Group>
    </Card>
);
