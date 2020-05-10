import React from "react";
import cn from "classnames";

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

const Content = ({ children }) => <div className="content">{children}</div>;

const Footer = ({ children }) => <footer className="footer">{children}</footer>;

const SubFooter = ({ children }) => <div className="footer">{children}</div>;

interface ContainerProps {
    children: React.ReactNode;
    size?: "md" | "lg" | "xl" | "fluid";
}

const Container = ({ children, size }: ContainerProps) => {
    const classes = cn({ container: !size, [`container-${size}`]: size });
    return <div className={classes}>{children}</div>;
};

const Empty = ({ children }) => <div className="empty">{children}</div>;

Page.Header = PageHeader;
Page.Pretitle = PagePreTitle;
Page.Title = PageTitle;
Page.SubTitle = PageSubTitle;
Page.Options = PageOptions;
Page.Content = Content;
Page.Footer = Footer;
Page.SubFooter = SubFooter;
Page.Container = Container;
Page.Empty = Empty;

export default Page;
