import React from "react";

import Badge from "../Badge";
import Buttons from "../Buttons";
import Card from "../Card";
import Dropdown from "../Dropdown";
import { Calendar, Edit, Settings } from "react-feather";
import Avatar from "../Avatar";

export default {
    title: "Dropdown",
};

export const Button = () => (
    <Buttons.List>
        <Dropdown>
            <Dropdown.Button variant="secondary">Click Me!&nbsp;</Dropdown.Button>
            <Dropdown.Menu>
                <Dropdown.Item>Dropdown link</Dropdown.Item>
                <Dropdown.Item active>Dropdown link</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item disabled>Dropdown link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
            <Dropdown.Button variant="secondary">
                <Calendar size={18} />
                &nbsp;
            </Dropdown.Button>
            <Dropdown.Menu>
                <Dropdown.Header>Header</Dropdown.Header>
                <Dropdown.Item>
                    <Settings size={15} className="mr-2" />
                    Dropdown link
                </Dropdown.Item>
                <Dropdown.Item>
                    <Edit size={15} className="mr-2" />
                    Dropdown link
                    <Badge variant="primary" className="ml-auto">
                        12
                    </Badge>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </Buttons.List>
);

export const Dark = () => (
    <Dropdown>
        <Dropdown.Button variant="secondary">Dark Dropdown</Dropdown.Button>
        <Dropdown.Menu dark>
            <Dropdown.Header>Header</Dropdown.Header>
            <Dropdown.Item>Dropdown link</Dropdown.Item>
            <Dropdown.Item>Dropdown link</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
);

export const CardContent = () => (
    <Dropdown>
        <Dropdown.Button variant="secondary">Card Content</Dropdown.Button>
        <Dropdown.Menu card>
            <Card className="d-flex flex-column">
                <Card.Image
                    top
                    src="https://picsum.photos/id/562/600/200"
                    alt="How do you know she is a witch?"
                />
                <Card.Body>
                    <Card.Title>How do you know she is a witch?</Card.Title>
                    <div className="text-muted">
                        Are you suggesting that coconuts migrate? No, no, no! Yes,
                        yes. A bit. But she's got a wart. You ...
                    </div>
                    <div className="d-flex align-items-center pt-5 mt-auto">
                        <Avatar imageURL="https://picsum.photos/id/128/128" />
                        <div className="ml-3">
                            <a href="#" className="text-body">
                                Maryjo Lebarree
                            </a>
                            <small className="d-block text-muted">3 days ago</small>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Dropdown.Menu>
    </Dropdown>
);
