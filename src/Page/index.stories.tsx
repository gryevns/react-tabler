import React from "react";
import Chart from "react-apexcharts";
import { DollarSign, ShoppingCart, Users, Plus, MessageCircle } from "react-feather";

import Badge from "../Badge";
import Card from "../Card";
import Page from "../Page";
import { Basic as Navigation } from "../Nav/index.stories";
import Grid from "../Grid";
import Table from "../Table";
import ThemeProvider, { ThemeContext } from "../ThemeProvider";
import { SocialMediaTraffice, Tasks } from "../Table/index.stories";
import List from "../List";
import { ChangeCard, IconCard, PostCard, ProgressCard, StatCard } from "../Extra";
import { Responsive as UserTable } from "../Table/index.stories";

import { Browsers } from "../Table/index.stories";
import Avatar from "../Avatar";
import Progress from "../Progress";
import Buttons from "../Buttons";

export default {
    title: "Page",
};

const ApexChart = ({ type }) => {
    const state = {
        options: {
            chart: {
                id: "apexchart-example",
                sparkline: {
                    enabled: true,
                },
            },
            colors: ["#206bc4"],
            fill: {
                colors: type === "area" ? ["#dce7f6"] : ["#206bc4"],
                opacity: 1,
                type: "solid",
            },
            stoke: {
                width: 1,
            },
            xaxis: {
                categories: Array.from({ length: 20 }, () =>
                    Math.floor(Math.random() * 20),
                ),
            },
        },
        series: [
            {
                name: "series",
                data: Array.from({ length: 20 }, () =>
                    Math.floor(Math.random() * 20),
                ),
            },
        ],
    };
    return (
        <Chart
            options={state.options}
            series={state.series}
            type={type}
            height={40}
        />
    );
};

const Projects = () => (
    <Card>
        <Card.Header>
            <Card.Title>Projects</Card.Title>
        </Card.Header>
        <Table cards>
            <Table.Body>
                <Table.Row>
                    <Table.Col>Admin Template</Table.Col>
                    <Table.Col className="text-right">
                        <Badge color="gray">65%</Badge>
                    </Table.Col>
                </Table.Row>
                <Table.Row>
                    <Table.Col>Landing Page</Table.Col>
                    <Table.Col className="text-right">
                        <Badge color="green">Finished</Badge>
                    </Table.Col>
                </Table.Row>
                <Table.Row>
                    <Table.Col>Backend UI</Table.Col>
                    <Table.Col className="text-right">
                        <Badge color="red">Rejected</Badge>
                    </Table.Col>
                </Table.Row>
                <Table.Row>
                    <Table.Col>Personal Blog</Table.Col>
                    <Table.Col className="text-right">
                        <Badge color="gray">40%</Badge>
                    </Table.Col>
                </Table.Row>
                <Table.Row>
                    <Table.Col>Email Templates</Table.Col>
                    <Table.Col className="text-right">
                        <Badge color="gray">13%</Badge>
                    </Table.Col>
                </Table.Row>
                <Table.Row>
                    <Table.Col>Corporate Website</Table.Col>
                    <Table.Col className="text-right">
                        <Badge color="yellow">Pending</Badge>
                    </Table.Col>
                </Table.Row>
            </Table.Body>
        </Table>
    </Card>
);

const AvatarCard = () => (
    <Card>
        <Card.Body className="p-4 py-5 text-center">
            <Avatar size="xl" className="mb-4">
                W
            </Avatar>
            <h3 className="mb-0">New website</h3>
            <p className="text-muted">Due to: 28 Aug 2019</p>
            <p className="mb-3">
                <Badge color="red" soft>
                    Waiting
                </Badge>
            </p>
            <Avatar.List>
                <Avatar imageURL="" />
                <Avatar>JL</Avatar>
                <Avatar imageURL="" />
                <Avatar imageURL="" />
                <Avatar imageURL="" />
            </Avatar.List>
        </Card.Body>
        <Progress card>
            <Progress.Bar width={38} />
        </Progress>
    </Card>
);

export const Default = () => {
    return (
        <ThemeProvider>
            <Page>
                <Navigation />
                <Page.Content>
                    <Page.Container size="xl">
                        <Page.Header>
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <Page.Pretitle>Overview</Page.Pretitle>
                                    <Page.Title>Dashboard</Page.Title>
                                </div>
                                <div className="col-auto ml-auto d-print-none">
                                    <span className="d-none d-sm-inline">
                                        <ThemeContext.Consumer>
                                            {({ theme, toggleTheme }) => (
                                                <>
                                                    <Buttons.Button
                                                        variant="secondary"
                                                        onClick={toggleTheme}
                                                    >
                                                        {theme === "light"
                                                            ? "Dark Theme"
                                                            : "Light Theme"}
                                                    </Buttons.Button>
                                                </>
                                            )}
                                        </ThemeContext.Consumer>
                                    </span>
                                    <Buttons.Button
                                        icon
                                        variant="primary"
                                        className="ml-3 d-sm-inline-block"
                                    >
                                        <Plus size={18} />
                                        &nbsp; Create new report
                                    </Buttons.Button>
                                </div>
                            </div>
                        </Page.Header>
                        <Grid.Row cards deck>
                            <Grid.Col md={3} sm={6}>
                                <ChangeCard
                                    movement={6}
                                    total="43"
                                    label="New Tickets"
                                />
                            </Grid.Col>
                            <Grid.Col md={3} sm={6}>
                                <ChangeCard
                                    movement={-3}
                                    total="17"
                                    label="Closed Today"
                                />
                            </Grid.Col>
                            <Grid.Col md={3} sm={6}>
                                <ProgressCard
                                    label="New Feedback"
                                    color="red"
                                    width={28}
                                    value="62"
                                />
                            </Grid.Col>
                            <Grid.Col md={3} sm={6}>
                                <ProgressCard
                                    label="Today Profit"
                                    color="green"
                                    width={84}
                                    value="$652"
                                />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row cards deck>
                            <Grid.Col sm={6} lg={3}>
                                <IconCard
                                    total="132"
                                    label="Sales"
                                    value="12 waiting payments"
                                >
                                    <DollarSign color="white" />
                                </IconCard>
                            </Grid.Col>
                            <Grid.Col sm={6} lg={3}>
                                <IconCard
                                    total="78"
                                    label="Orders"
                                    value="32 shipped"
                                    color="green"
                                >
                                    <ShoppingCart color="white" />
                                </IconCard>
                            </Grid.Col>
                            <Grid.Col sm={6} lg={3}>
                                <IconCard
                                    total="1,352"
                                    label="Members"
                                    value="163 registered today"
                                    color="red"
                                >
                                    <Users color="white" />
                                </IconCard>
                            </Grid.Col>
                            <Grid.Col sm={6} lg={3}>
                                <IconCard
                                    total="132"
                                    label="Comments"
                                    value="16 waiting"
                                    color="yellow"
                                >
                                    <MessageCircle color="white" />
                                </IconCard>
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row cards deck>
                            <Grid.Col lg={6} sm={12}>
                                <PostCard />
                            </Grid.Col>
                            <Grid.Col lg={6} sm={12}>
                                <PostCard />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Col>
                                <UserTable />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row deck cards>
                            <Grid.Col sm={6} lg={4}>
                                <Browsers />
                            </Grid.Col>
                            <Grid.Col sm={6} lg={4}>
                                <Projects />
                            </Grid.Col>
                            <Grid.Col sm={12} lg={4}>
                                {/* <Members /> */}
                                <AvatarCard />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row deck cards>
                            <Grid.Col lg={3} sm={12}>
                                <StatCard
                                    movement={5}
                                    label="Users Online"
                                    total="423"
                                    color="blue"
                                    childrenPosition="outside"
                                >
                                    <ApexChart type="bar" />
                                </StatCard>
                            </Grid.Col>
                            <Grid.Col lg={3} sm={6}>
                                <StatCard
                                    movement={5}
                                    label="Users Online"
                                    total="423"
                                    color="red"
                                    childrenPosition="outside"
                                >
                                    <ApexChart type="area" />
                                </StatCard>
                            </Grid.Col>
                            <Grid.Col lg={3} sm={6}>
                                <StatCard
                                    movement={5}
                                    label="Users Online"
                                    total="423"
                                    color="green"
                                >
                                    <ApexChart type="bar" />
                                </StatCard>
                            </Grid.Col>
                            <Grid.Col lg={3} sm={6}>
                                <StatCard
                                    movement={5}
                                    label="Users Online"
                                    total="423"
                                    color="yellow"
                                >
                                    <ApexChart type="line" />
                                </StatCard>
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row deck cards>
                            <Grid.Col width={12} lg={4}>
                                <SocialMediaTraffice />
                            </Grid.Col>
                            <Grid.Col width={12} lg={8}>
                                <Tasks />
                            </Grid.Col>
                        </Grid.Row>
                    </Page.Container>
                </Page.Content>
                <Page.SubFooter>
                    <Page.Container size="xl">
                        <Grid.Row>
                            <Grid.Col lg={8}>
                                <Grid.Row>
                                    <Grid.Col width={6} md={3}>
                                        <List unstyled className="mb-0">
                                            <List.Item>
                                                <a href="#">First Link</a>
                                            </List.Item>
                                            <List.Item>
                                                <a href="#">Second Link</a>
                                            </List.Item>
                                        </List>
                                    </Grid.Col>
                                    <Grid.Col width={6} md={3}>
                                        <List unstyled className="mb-0">
                                            <List.Item>
                                                <a href="#">Third Link</a>
                                            </List.Item>
                                            <List.Item>
                                                <a href="#">Fourth Link</a>
                                            </List.Item>
                                        </List>
                                    </Grid.Col>
                                    <Grid.Col width={6} md={3}>
                                        <List unstyled className="mb-0">
                                            <List.Item>
                                                <a href="#">Fifth Link</a>
                                            </List.Item>
                                            <List.Item>
                                                <a href="#">Sixth Link</a>
                                            </List.Item>
                                        </List>
                                    </Grid.Col>
                                    <Grid.Col width={6} md={3}>
                                        <List unstyled className="mb-0">
                                            <List.Item>
                                                <a href="#">Seventh Link</a>
                                            </List.Item>
                                            <List.Item>
                                                <a href="#">Eigth Link</a>
                                            </List.Item>
                                        </List>
                                    </Grid.Col>
                                </Grid.Row>
                            </Grid.Col>
                            <Grid.Col lg={4}>
                                Premium and Open Source dashboard template with
                                responsive and high quality UI. For Free!
                            </Grid.Col>
                        </Grid.Row>
                    </Page.Container>
                </Page.SubFooter>
                <Page.Footer>
                    <Page.Container size="xl">React Tabler</Page.Container>
                </Page.Footer>
            </Page>
        </ThemeProvider>
    );
};
