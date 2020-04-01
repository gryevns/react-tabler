import React from "react";

import Card from "../Card";
import Tabs from "../Tabs";

export default {
    title: "Tabs",
};

export const Cards = () => (
    <Card>
        <Tabs defaultEventKey="home">
            <Tabs.Header>
                <Tabs.Tab id="home">Home</Tabs.Tab>
                <Tabs.Tab id="profile">Profile</Tabs.Tab>
            </Tabs.Header>
            <Card.Body>
                <Tabs.Content>
                    <Tabs.Panel id="home">
                        <div>
                            Cursus turpis vestibulum, dui in pharetra vulputate id
                            sed non turpis ultricies fringilla at sed facilisis lacus
                            pellentesque purus nibh
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel id="profile">
                        <div>
                            Fringilla egestas nunc quis tellus diam rhoncus ultricies
                            tristique enim at diam, sem nunc amet, pellentesque id
                            egestas velit sed
                        </div>
                    </Tabs.Panel>
                </Tabs.Content>
            </Card.Body>
        </Tabs>
    </Card>
);

export const FullWidth = () => (
    <Card>
        <Tabs defaultEventKey="profile">
            <Tabs.Header fill={true}>
                <Tabs.Tab id="home">Home</Tabs.Tab>
                <Tabs.Tab id="profile">Profile</Tabs.Tab>
            </Tabs.Header>
            <Card.Body>
                <Tabs.Content>
                    <Tabs.Panel id="home">
                        <div>
                            Cursus turpis vestibulum, dui in pharetra vulputate id
                            sed non turpis ultricies fringilla at sed facilisis lacus
                            pellentesque purus nibh
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel id="profile">
                        <div>
                            Fringilla egestas nunc quis tellus diam rhoncus ultricies
                            tristique enim at diam, sem nunc amet, pellentesque id
                            egestas velit sed
                        </div>
                    </Tabs.Panel>
                </Tabs.Content>
            </Card.Body>
        </Tabs>
    </Card>
);

export const Alternate = () => (
    <Card>
        <Tabs defaultEventKey="profile">
            <Tabs.Header alt>
                <Tabs.Tab id="home">Home</Tabs.Tab>
                <Tabs.Tab id="profile">Profile</Tabs.Tab>
            </Tabs.Header>
            <Card.Body>
                <Tabs.Content>
                    <Tabs.Panel id="home" className="active show">
                        <div>
                            Cursus turpis vestibulum, dui in pharetra vulputate id
                            sed non turpis ultricies fringilla at sed facilisis lacus
                            pellentesque purus nibh
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel id="profile">
                        <div>
                            Fringilla egestas nunc quis tellus diam rhoncus ultricies
                            tristique enim at diam, sem nunc amet, pellentesque id
                            egestas velit sed
                        </div>
                    </Tabs.Panel>
                </Tabs.Content>
            </Card.Body>
        </Tabs>
    </Card>
);
