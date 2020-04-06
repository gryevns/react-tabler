import React from "react";
import {
    Calendar,
    Chrome,
    MessageSquare,
    Check,
    Trash,
    MoreVertical,
} from "react-feather";

import Avatar from "../Avatar";
import Card from "../Card";
import Table from "../Table";
import Progress from "../Progress";
import Payment from "../Payment";
import { Control } from "../Form";

export default {
    title: "Table",
};

export const Default = () => (
    <Card>
        <Table striped cards highlightRowOnHover>
            <Table.Header>
                <Table.ColHeader></Table.ColHeader>
                <Table.ColHeader>User</Table.ColHeader>
                <Table.ColHeader>Commit</Table.ColHeader>
                <Table.ColHeader>Date</Table.ColHeader>
                <Table.ColHeader></Table.ColHeader>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Col className="w-1">
                        <Avatar size="sm">RB</Avatar>
                    </Table.Col>
                    <Table.Col>Ronald Bradley</Table.Col>
                    <Table.Col>Initial Commit</Table.Col>
                    <Table.Col>May 6, 2018</Table.Col>
                    <Table.Col>
                        <Trash size={18} />
                    </Table.Col>
                </Table.Row>
                <Table.Row>
                    <Table.Col className="w-1">
                        <Avatar size="sm">RG</Avatar>
                    </Table.Col>
                    <Table.Col>Russell Gibson</Table.Col>
                    <Table.Col>Main structure</Table.Col>
                    <Table.Col>April 22, 2018</Table.Col>
                    <Table.Col>
                        <Trash size={18} />
                    </Table.Col>
                </Table.Row>
                <Table.Row>
                    <Table.Col className="w-1">
                        <Avatar size="sm">BA</Avatar>
                    </Table.Col>
                    <Table.Col>Beverly Armstrong</Table.Col>
                    <Table.Col>Left sidebar adjustments</Table.Col>
                    <Table.Col>April 15, 2018</Table.Col>
                    <Table.Col>
                        <Trash size={18} />
                    </Table.Col>
                </Table.Row>
            </Table.Body>
        </Table>
    </Card>
);

export const Browsers = () => (
    <Card>
        <Card.Header>
            <Card.Title>Browser Stats</Card.Title>
        </Card.Header>
        <Table cards>
            <Table.Body>
                <Table.Row>
                    <Table.Col width={1}>
                        <Chrome size={18} />
                    </Table.Col>
                    <Table.Col>Google Chrome</Table.Col>
                    <Table.Col className="text-right">23%</Table.Col>
                </Table.Row>
                <Table.Row>
                    <Table.Col width={1}>
                        <Chrome size={18} />
                    </Table.Col>
                    <Table.Col>Mozilla Firefox</Table.Col>
                    <Table.Col className="text-right">15%</Table.Col>
                </Table.Row>
                <Table.Row>
                    <Table.Col width={1}>
                        <Chrome size={18} />
                    </Table.Col>
                    <Table.Col>Apple Safari</Table.Col>
                    <Table.Col className="text-right">7%</Table.Col>
                </Table.Row>
                <Table.Row>
                    <Table.Col width={1}>
                        <Chrome size={18} />
                    </Table.Col>
                    <Table.Col>Internet Explorer</Table.Col>
                    <Table.Col className="text-right">9%</Table.Col>
                </Table.Row>
                <Table.Row>
                    <Table.Col width={1}>
                        <Chrome size={18} />
                    </Table.Col>
                    <Table.Col>Opera Mini</Table.Col>
                    <Table.Col className="text-right">23%</Table.Col>
                </Table.Row>
                <Table.Row>
                    <Table.Col width={1}>
                        <Chrome size={18} />
                    </Table.Col>
                    <Table.Col>Microsoft Edge</Table.Col>
                    <Table.Col className="text-right">9%</Table.Col>
                </Table.Row>
            </Table.Body>
        </Table>
    </Card>
);

const data = [
    {
        name: "Elizabeth Martin",
        registered: "Mar 7, 2019",
        color: "yellow" as const,
        usage: "42",
        payment: "visa",
        lastLogin: "4 minutes ago",
    },
    {
        name: "Michelle Schultz",
        registered: "Feb 19, 2019",
        color: "yellow" as const,
        usage: "0",
        payment: "googlewallet",
        lastLogin: "5 minutes ago",
    },
    {
        name: "Crystal Austin",
        registered: "Mar 26, 2019",
        color: "green" as const,
        usage: "96",
        payment: "mastercard",
        lastLogin: "a minute ago",
    },
    {
        name: "Douglas Ray",
        registered: "Jan 4, 2019",
        color: "red" as const,
        usage: "6",
        payment: "shopify",
        lastLogin: "a minute ago",
    },
    {
        name: "Teresa Reyes",
        registered: "Feb 21, 2019",
        color: "red" as const,
        usage: "36",
        payment: "ebay",
        lastLogin: "2 minutes ago",
    },
    {
        name: "Emma Wade",
        registered: "Mar 8, 2019",
        color: "red" as const,
        usage: "7",
        payment: "paypal",
        lastLogin: "a minute ago",
    },
    {
        name: "Carol Henderson",
        registered: "Feb 10, 2019",
        color: "green" as const,
        usage: "80",
        payment: "visa",
        lastLogin: "9 minutes ago",
    },
    {
        name: "Christopher Harvey",
        registered: "Jan 10, 2019",
        color: "green" as const,
        usage: "83",
        payment: "googlewallet",
        lastLogin: "8 minutes ago",
    },
];

export const Responsive = () => (
    <Card>
        <Table
            responsive={true}
            striped={true}
            cards={true}
            verticalAlign="center"
            hasOutline={true}
            className="text-nowrap"
        >
            <Table.Header>
                <Table.Row>
                    <Table.ColHeader className="w-1 text-center" />
                    <Table.ColHeader>User</Table.ColHeader>
                    <Table.ColHeader>Usage</Table.ColHeader>
                    <Table.ColHeader className="text-center">
                        Payment
                    </Table.ColHeader>
                    <Table.ColHeader>Activity</Table.ColHeader>
                    <Table.ColHeader className="text-center">
                        Satisfaction
                    </Table.ColHeader>
                    <Table.ColHeader className="text-center"></Table.ColHeader>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {data.map((item) => (
                    <Table.Row>
                        <Table.Col className="text-center">
                            <Avatar
                                imageURL="https://picsum.photos/id/1062/128/128"
                                status="green"
                            />
                        </Table.Col>
                        <Table.Col>
                            <div>{item.name}</div>
                            <div className="small text-muted">
                                Registered: {item.registered}
                            </div>
                        </Table.Col>
                        <Table.Col>
                            <div className="clearfix">
                                <div className="float-left">
                                    <strong>{item.usage}%</strong>
                                </div>
                                <div className="float-right">
                                    <small className="text-muted">
                                        Jun 11, 2015 - Jul 10, 2015
                                    </small>
                                </div>
                            </div>
                            <Progress size="xs">
                                <Progress.Bar
                                    width={parseInt(item.usage)}
                                    color={item.color}
                                />
                            </Progress>
                        </Table.Col>
                        <Table.Col className="text-center">
                            <Payment provider={item.payment} />
                        </Table.Col>
                        <Table.Col>
                            <div className="small text-muted">Last login</div>
                            <div>{item.lastLogin}</div>
                        </Table.Col>
                        <Table.Col className="text-center">{item.usage}%</Table.Col>
                        <Table.Col className="text-center">
                            <MoreVertical />
                        </Table.Col>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    </Card>
);

const social = [
    {
        name: "Instagram",
        visitors: "3,550",
        progress: 71,
    },
    {
        name: "Twitter",
        visitors: "1,798",
        progress: 35.96,
    },
    {
        name: "Facebook",
        visitors: "1,245",
        progress: 24.9,
    },
    {
        name: "Pintest",
        visitors: "854",
        progress: 17.08,
    },
    {
        name: "VK",
        visitors: "650",
        progress: 13,
    },
];

export const SocialMediaTraffice = () => (
    <Card>
        <Card.Header>
            <Card.Title>Social Media Traffic</Card.Title>
        </Card.Header>
        <Table cards verticalAlign="center">
            <Table.Header>
                <Table.Row>
                    <Table.ColHeader>Network</Table.ColHeader>
                    <Table.ColHeader colspan={2}>Visitors</Table.ColHeader>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {social.map((site) => (
                    <Table.Row>
                        <Table.Col>{site.name}</Table.Col>
                        <Table.Col>{site.visitors}</Table.Col>
                        <Table.Col className="w-50">
                            <Progress size="xs">
                                <Progress.Bar width={site.progress} />
                            </Progress>
                        </Table.Col>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    </Card>
);

const tasks = [
    {
        complete: true,
        detail: "Extend the data model.",
        items: "2/7",
        comments: "3",
    },
    {
        complete: false,
        detail: "Verify the event flow.",
        items: "3/10",
        comments: "6",
    },
    {
        complete: false,
        detail: "Database backup and maintenance.",
        items: "0/6",
        comments: "1",
    },
    {
        complete: true,
        detail: "Identify the implementation team.",
        items: "6/10",
        comments: "12",
    },
    {
        complete: false,
        detail: "Define users and workflow",
        items: "3/7",
        comments: "5",
    },
    {
        complete: true,
        detail: "Check Pull Requests",
        items: "2/9",
        comments: "3",
    },
];

export const Tasks = () => (
    <Card>
        <Card.Header>
            <Card.Title>Tasks</Card.Title>
        </Card.Header>
        <Table cards responsive verticalAlign="center">
            <Table.Body>
                {tasks.map((task) => (
                    <Table.Row>
                        <Table.Col className="w-1 pr-0">
                            <Control.Group>
                                <Control.Input
                                    type="checkbox"
                                    checked={task.complete}
                                />
                            </Control.Group>
                        </Table.Col>
                        <Table.Col className="w-100">
                            <a href="#" className="text-reset">
                                {task.detail}
                            </a>
                        </Table.Col>
                        <Table.Col className="text-nowrap text-muted">
                            <Calendar size={15} />
                            &nbsp;January 01, 2019
                        </Table.Col>
                        <Table.Col className="text-nowrap">
                            <Check size={15} />
                            &nbsp;{task.items}
                        </Table.Col>
                        <Table.Col className="text-nowrap">
                            <a href="#" className="text-muted">
                                <MessageSquare size={15} />
                                &nbsp;{task.comments}
                            </a>
                        </Table.Col>
                        <Table.Col>
                            <Avatar />
                        </Table.Col>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    </Card>
);
