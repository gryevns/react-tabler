import React from "react";
import cn from "classnames";
import { MemoryRouter as Router, Link } from "react-router-dom";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import logo from "../static/img/logo.svg";
import smallLogo from "../static/img/logo-small-white.svg";
import Badge from "../Badge";
import Nav from "../Nav";
import { Bell, Box, Home, Search, Star } from "react-feather";
import Control from "../Form/Control";
import Form from "../Form";

export default {
    title: "Navigation",
    decorators: [withKnobs],
};

export const ReactRouter = () => (
    <Router>
        <Link to="/test" component={Nav.Link}>
            Link
        </Link>
    </Router>
);

const NavItems = ({ className = "" }) => (
    <Nav.List className={className}>
        <Nav.ListItem>
            <Nav.Link>
                <Nav.LinkIcon>
                    <Star size={16} className="icon" />
                </Nav.LinkIcon>
                First
            </Nav.Link>
        </Nav.ListItem>
        <Nav.ListItem>
            <Nav.Link>
                <Nav.LinkIcon>
                    <Star size={16} className="icon" />
                </Nav.LinkIcon>
                Second
                <span className="badge bg-red">2</span>
            </Nav.Link>
        </Nav.ListItem>
        <Nav.ListItem dropdown>
            <Nav.Link dropdown>
                <Nav.LinkIcon>
                    <Star size={16} className="icon" />
                </Nav.LinkIcon>
                Third
            </Nav.Link>
            <Nav.DropdownMenu>
                <Nav.DropdownMenuItem>First</Nav.DropdownMenuItem>
                <Nav.DropdownMenuItem>Second</Nav.DropdownMenuItem>
                <Nav.DropdownMenuItem>Third</Nav.DropdownMenuItem>
            </Nav.DropdownMenu>
        </Nav.ListItem>
        <Nav.ListItem>
            <Nav.Link disabled>
                <Nav.LinkIcon>
                    <Star size={16} className="icon" />
                </Nav.LinkIcon>
                Disabled
            </Nav.Link>
        </Nav.ListItem>
    </Nav.List>
);

const SearchBar = ({ round = false }) => {
    const classes = cn({ "form-control-rounded": round });
    return (
        <Form>
            <Control.Icon>
                <Control.Addon>
                    <Search size={16} />
                </Control.Addon>
                <Control.Input
                    type="text"
                    className={classes}
                    placeholder="Search…"
                />
            </Control.Icon>
        </Form>
    );
};

const Extra = () => (
    <Nav.Item>
        <a href="#" className="nav-link px-0" tab-index="-1">
            <Bell size={16} className="icon" />
            <Badge color="red" />
        </a>
    </Nav.Item>
);

export const Basic = () => (
    <Nav>
        <Nav.Header size="xl" light>
            <Nav.Logo>
                <Nav.Image src={logo} />
            </Nav.Logo>
            <Nav.Extra>
                <Nav.Item>
                    <Nav.Link>Link3</Nav.Link>
                </Nav.Item>
            </Nav.Extra>
            <Nav.HeaderCollapse>
                <Nav.List>
                    <Nav.ListItem>
                        <Nav.Link>Link1</Nav.Link>
                    </Nav.ListItem>
                    <Nav.ListItem>
                        <Nav.Link>Link2</Nav.Link>
                    </Nav.ListItem>
                </Nav.List>
            </Nav.HeaderCollapse>
        </Nav.Header>
    </Nav>
);

export const Types = () => (
    <>
        <Nav>
            <Nav.Header>
                <Nav.Logo>
                    <Nav.Image src={logo} />
                </Nav.Logo>
                <Nav.Extra>
                    <Extra />
                </Nav.Extra>
                <Nav.HeaderCollapse>
                    <div className="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
                        <NavItems />
                    </div>
                </Nav.HeaderCollapse>
            </Nav.Header>
        </Nav>
        <br />
        <Nav>
            <Nav.Header light>
                <Nav.Logo>
                    <Nav.Image src={logo} />
                </Nav.Logo>
                <Nav.Extra>
                    <Extra />
                </Nav.Extra>
                <Nav.HeaderCollapse>
                    <div className="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
                        <NavItems />
                        <div className="ml-md-auto pl-md-4 py-2 py-md-0 mr-md-4 order-first order-md-last flex-grow-1 flex-md-grow-0">
                            <SearchBar round />
                        </div>
                    </div>
                </Nav.HeaderCollapse>
            </Nav.Header>
        </Nav>
        <br />
        <Nav>
            <Nav.Header dark>
                <Nav.Logo>Dashboard</Nav.Logo>
                <Nav.Extra>
                    <Extra />
                </Nav.Extra>
                <Nav.HeaderCollapse>
                    <div className="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
                        <NavItems />
                        <div className="ml-md-auto pl-md-4 py-2 py-md-0 mr-md-4 order-first order-md-last flex-grow-1 flex-md-grow-0">
                            <SearchBar />
                        </div>
                    </div>
                </Nav.HeaderCollapse>
            </Nav.Header>
        </Nav>
        <br />
        <Nav>
            <Nav.Header dark style={{ background: "#7952b3" }}>
                <Nav.Logo>
                    <Nav.Image src={smallLogo} />
                </Nav.Logo>
                <Nav.Extra>
                    <Extra />
                </Nav.Extra>
                <Nav.HeaderCollapse>
                    <div className="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
                        <NavItems />
                    </div>
                </Nav.HeaderCollapse>
            </Nav.Header>
        </Nav>
        <br />
        <Nav>
            <Nav.Header dark className="bg-primary">
                <Nav.Extra>
                    <Extra />
                </Nav.Extra>
                <Nav.HeaderCollapse>
                    <div className="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
                        <NavItems />
                        <div className="ml-md-auto pl-md-4 py-2 py-md-0 mr-md-4 order-first order-md-last flex-grow-1">
                            <SearchBar />
                        </div>
                    </div>
                </Nav.HeaderCollapse>
            </Nav.Header>
        </Nav>
        <br />
        <Nav>
            <Nav.Header light>
                <Nav.Logo>
                    <Nav.Image src={logo} />
                </Nav.Logo>
                <Nav.Extra>
                    <Extra />
                </Nav.Extra>
            </Nav.Header>
            <Nav.Expand>
                <NavItems />
                <div className="ml-md-auto pl-md-4 py-2 py-md-0 mr-md-4 order-first order-md-last flex-grow-1 flex-md-grow-0">
                    <SearchBar />
                </div>
            </Nav.Expand>
        </Nav>
    </>
);

export const Vertical = () => {
    const props = {
        dark: boolean("Dark", true),
        light: boolean("Light", false),
        right: boolean("Right", false),
    };
    return (
        <Nav>
            <Nav.Aside {...props}>
                <Nav.Toggle />
                <Nav.Logo>Dashboard</Nav.Logo>
                <Nav.Extra className="d-lg-none">
                    <Extra />
                </Nav.Extra>
                <Nav.HeaderCollapse>
                    <Nav.List className="pt-lg-3">
                        <Nav.ListItem>
                            <Nav.Link>
                                <Nav.LinkIcon>
                                    <Home size={16} className="icon" />
                                </Nav.LinkIcon>
                                Home
                            </Nav.Link>
                        </Nav.ListItem>
                        <Nav.ListItem dropdown active>
                            <Nav.Link dropdown>
                                <Nav.LinkIcon>
                                    <Box size={16} className="icon" />
                                </Nav.LinkIcon>
                                Dropdown
                            </Nav.Link>
                            <Nav.DropdownMenu>
                                <Nav.DropdownMenuItem>First</Nav.DropdownMenuItem>
                                <Nav.DropdownMenuItem>Second</Nav.DropdownMenuItem>
                                <Nav.DropdownMenuItem>Third</Nav.DropdownMenuItem>
                            </Nav.DropdownMenu>
                        </Nav.ListItem>
                        <Nav.ListItem>
                            <Nav.Link disabled>
                                <Nav.LinkIcon>
                                    <Star size={16} className="icon" />
                                </Nav.LinkIcon>
                                Disabled
                            </Nav.Link>
                        </Nav.ListItem>
                    </Nav.List>
                </Nav.HeaderCollapse>
            </Nav.Aside>
        </Nav>
    );
};
