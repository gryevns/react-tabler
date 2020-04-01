import React from "react";

import Dropdown from "../Dropdown";
import Avatar from "../Avatar";
import Nav from "../Nav";
import Card from "../Card";
import Header from ".";
import Page from "../Page";
import Flag from "../Flags";
import { Bell, Settings } from "react-feather";

export default {
    title: "Header",
};

export const Heading = () => (
    <Header>
        <Page.Container>
            <Header.Title href=".">Tabler</Header.Title>
            <Header.Search />
            <Nav.Bar className="ml-auto">
                <Dropdown>
                    <Dropdown.Link>
                        <Settings size={15} />
                    </Dropdown.Link>
                    <Dropdown.Menu arrow position="right">
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item>Another action</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Link>
                        <Flag country="us" className="mr-1" />
                        English
                    </Dropdown.Link>
                    <Dropdown.Menu arrow position="right">
                        <Dropdown.Item>
                            <Flag country="de" />
                            &nbsp; German
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Flag country="pl" />
                            &nbsp; Polish
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Flag country="jp" />
                            &nbsp; Japan
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Flag country="rs" />
                            &nbsp; Russian
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Link>
                        <Bell size={15} />
                    </Dropdown.Link>
                    <Dropdown.Menu
                        arrow
                        card
                        position="right"
                        style={{ maxWidth: "20rem" }}
                    >
                        <Card>
                            <Card.Body>
                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Accusamus ad amet consectetur exercitationem
                                fugiat in ipsa ipsum, natus odio quidem quod
                                repudiandae sapiente. Amet debitis et magni maxime
                                necessitatibus ullam.
                            </Card.Body>
                        </Card>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="pl-3">
                    <Dropdown.Link>
                        <Avatar>GE</Avatar>
                        <div className="d-none d-lg-block pl-2">
                            <div>Paweł Kuna</div>
                            <div className="mt-1 small text-muted">Founder</div>
                        </div>
                    </Dropdown.Link>
                    <Dropdown.Menu
                        arrow
                        card
                        position="right"
                        style={{ maxWidth: "20rem" }}
                    >
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item>Another action</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav.Bar>
        </Page.Container>
    </Header>
);
