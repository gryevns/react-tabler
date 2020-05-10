import React from "react";
import { Briefcase, Check, Image, Twitter, UserPlus } from "react-feather";

import Avatar from "../Avatar";
import Card from "../Card";
import Timeline from "../Timeline";
import { boolean, withKnobs } from "@storybook/addon-knobs";

export default {
    title: "Timeline",
    decorators: [withKnobs],
};

export const History = () => (
    <Card>
        <Card.Body>
            <Timeline simple={boolean("Simple", false)}>
                <Timeline.Item>
                    <Timeline.Icon className="bg-twitter">
                        <Twitter size={16} />
                    </Timeline.Icon>
                    <Timeline.Content>
                        <Timeline.Time>10 hrs ago</Timeline.Time>
                        <Timeline.Title>+1150 Followers</Timeline.Title>
                        <p className="text-muted">
                            You’re getting more and more followers, keep it up!
                        </p>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Icon className="bg-red">
                        <Briefcase size={16} />
                    </Timeline.Icon>
                    <Timeline.Content>
                        <Timeline.Time>2 hrs ago</Timeline.Time>
                        <Timeline.Title>+3 New Products were added!</Timeline.Title>
                        <p className="text-muted">Congratulations!</p>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Icon className="bg-success">
                        <Check size={16} />
                    </Timeline.Icon>
                    <Timeline.Content>
                        <Timeline.Time>1 day ago</Timeline.Time>
                        <Timeline.Title>Database backup completed!</Timeline.Title>
                        <p className="text-muted">
                            Download the <a href="#">latest backup</a>.
                        </p>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Icon className="bg-teal">
                        <UserPlus size={16} />
                    </Timeline.Icon>
                    <Timeline.Content>
                        <Timeline.Time>2 days ago</Timeline.Time>
                        <Timeline.Title>+3 Friend Requests</Timeline.Title>
                        <Avatar.List className="mt-3">
                            <Avatar status="green" />
                            <Avatar status="green">JL</Avatar>
                            <Avatar status="green" />
                        </Avatar.List>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Icon className="bg-yellow">
                        <Image size={16} />
                    </Timeline.Icon>
                    <Timeline.Content>
                        <Timeline.Time>3 days ago</Timeline.Time>
                        <Timeline.Title>+2 New photos</Timeline.Title>
                        <div className="mt-3">
                            <img
                                src="https://picsum.photos/id/128/128"
                                className="mr-3"
                            />
                            <img src="https://picsum.photos/id/127/128" />
                        </div>
                    </Timeline.Content>
                </Timeline.Item>
            </Timeline>
        </Card.Body>
    </Card>
);
