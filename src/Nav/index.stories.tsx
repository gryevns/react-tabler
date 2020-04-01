import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import Dropdown from "../Dropdown";
import Page from "../Page";
import Nav from "../Nav";
import {
    CheckSquare,
    FileText,
    Home,
    Package,
    Search,
    Sliders,
    Star,
} from "react-feather";

export default {
    title: "Navigation",
    decorators: [withKnobs],
};

export const Navigation = () => (
    <Nav
        vertical={boolean("Vertical", false)}
        narrow={boolean("Narrow", false)}
        right={boolean("Right", false)}
        dark={boolean("Dark", false)}
    >
        <Page.Container>
            <Nav.Logo>Tabler</Nav.Logo>
            <Nav.Collapse>
                <Nav.Heading>Navigation</Nav.Heading>
                <Nav.Bar>
                    <Nav.Item active>
                        <Nav.Link>
                            <Nav.LinkIcon>
                                <Home size={16} />
                            </Nav.LinkIcon>
                            <Nav.LinkTitle>Home</Nav.LinkTitle>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Nav.LinkIcon>
                                <CheckSquare size={16} />
                            </Nav.LinkIcon>
                            <Nav.LinkTitle>Form elements</Nav.LinkTitle>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Dropdown unfocus={false}>
                            <Dropdown.Link className="dropdown-toggle">
                                <Nav.LinkIcon>
                                    <Package size={16} />
                                </Nav.LinkIcon>
                                <Nav.LinkTitle>Base</Nav.LinkTitle>
                            </Dropdown.Link>
                            <Dropdown.Menu arrow={true} position="left">
                                <Dropdown.Item>Empty page</Dropdown.Item>
                                <Dropdown.Item>Blank page</Dropdown.Item>
                                <Dropdown.Item>Buttons</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Nav.LinkIcon>
                                <Star size={16} />
                            </Nav.LinkIcon>
                            <Nav.LinkTitle>Extra</Nav.LinkTitle>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Nav.LinkIcon>
                                <FileText size={16} />
                            </Nav.LinkIcon>
                            <Nav.LinkTitle>Docs</Nav.LinkTitle>
                        </Nav.Link>
                    </Nav.Item>
                </Nav.Bar>
                <Nav.Heading className="mt-4">Tools</Nav.Heading>
                {/* TODO */}
                <div className="navbar-side">
                    <div className="d-none d-xl-block ml-auto d-none-navbar-vertical-narrow">
                        <form action="." method="get">
                            <div className="input-icon">
                                <span className="input-icon-addon">
                                    <Search size={18} />
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search…"
                                />
                            </div>
                        </form>
                    </div>
                    <a
                        href="#"
                        className="btn btn-primary d-none-navbar-horizontal d-none-navbar-vertical-narrow btn-block"
                    >
                        <Sliders size={18} />
                        Customize
                    </a>
                    <a
                        href="#"
                        className="btn btn-primary d-none-navbar-horizontal d-none-navbar-vertical-wide btn-block btn-icon"
                        aria-label="Button"
                    >
                        <Sliders size={18} />
                    </a>
                </div>
            </Nav.Collapse>
        </Page.Container>
    </Nav>
);
