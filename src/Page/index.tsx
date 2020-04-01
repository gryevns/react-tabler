import React from "react";

import { NavContext } from "../Nav";

const Page = ({ children }) => {
    const [menuVisible, setMenuVisible] = React.useState(false);
    return (
        <NavContext.Provider value={{ menuVisible, setMenuVisible }}>
            <div className="page">{children}</div>
        </NavContext.Provider>
    );
};

const PageHeader = ({ children }) => <div className="page-header">{children}</div>;

const PagePreTitle = ({ children }) => (
    <div className="page-pretitle">{children}</div>
);

const PageTitle = ({ children }) => <h2 className="page-title">{children}</h2>;

const PageSubTitle = ({ children }) => (
    <div className="page-subtitle">{children}</div>
);

const PageOptions = ({ children }) => (
    <div className="page-options d-flex">{children}</div>
);

const Content = ({ children }) => (
    <div className="content">
        <Container>{children}</Container>
    </div>
);

const Footer = ({ children }) => (
    <footer className="footer">
        <Container>{children}</Container>
    </footer>
);

const SubFooter = ({ children }) => (
    <div className="footer">
        <Container>{children}</Container>
    </div>
);

const Container = ({ children }) => <div className="container">{children}</div>;

Page.Header = PageHeader;
Page.Pretitle = PagePreTitle;
Page.Title = PageTitle;
Page.SubTitle = PageSubTitle;
Page.Options = PageOptions;
Page.Content = Content;
Page.Content = Content;
Page.Footer = Footer;
Page.SubFooter = SubFooter;
Page.Container = Container;

export default Page;
