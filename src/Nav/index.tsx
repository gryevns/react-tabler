import React from "react";
import cn from "classnames";

export const NavContext = React.createContext({
    menuVisible: false,
    setMenuVisible: (visible: boolean): any => {},
});

const NavToggle = ({ classname = "ml-3 ml-lg-0" }) => {
    const { menuVisible, setMenuVisible } = React.useContext(NavContext);
    const classes = cn("header-toggler d-lg-none", classname);
    const onClick = () => setMenuVisible(!menuVisible);
    return (
        <a
            href="#"
            onClick={onClick}
            className={classes}
            data-toggle="collapse"
            aria-expanded="false"
        >
            <span className="header-toggler-icon"></span>
            Toggle
        </a>
    );
};

export interface NavLinkIconProps {
    children: React.ReactNode;
}

const NavLinkIcon = ({ children }: NavLinkIconProps) => (
    <span className="nav-link-icon">{children}</span>
);

export interface NavLinkTitleProps {
    children: React.ReactNode;
}

const NavLinkTitle = ({ children }: NavLinkTitleProps) => (
    <span className="nav-link-title">{children}</span>
);

export interface NavLinkProps {
    className?: string;
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent) => any;
}

const NavLink = ({ children, className, onClick }: NavLinkProps) => {
    // TODO render prop
    const classes = cn("nav-link", className);
    return (
        <a href="#" className={classes} onClick={onClick}>
            {children}
        </a>
    );
};

export interface NavBarProps {
    className?: string;
    children: React.ReactNode;
}

const NavBar = ({ className, children }: NavBarProps) => {
    const classes = cn("navbar-nav", className);
    return <ul className={classes}>{children}</ul>;
};

export interface NavBarHeadingProps {
    className?: string;
    children: React.ReactNode;
}

const NavBarHeading = ({ children, className }: NavBarHeadingProps) => {
    const classes = cn("navbar-heading", className);
    return <h6 className={classes}>{children}</h6>;
};

export interface NavItemProps {
    active?: boolean;
    className?: string;
    children: React.ReactNode;
}

const NavItem = ({ active, children, className }: NavItemProps) => {
    const classes = cn("nav-item", { active }, className);
    return <div className={classes}>{children}</div>;
};

export interface NavLogoProps {
    children: React.ReactNode;
}

const NavLogo = ({ children }: NavLogoProps) => (
    <a
        href="."
        className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal"
    >
        {children}
    </a>
);

export interface NavCollapseProps {
    children: React.ReactNode;
}

const NavCollapse = ({ children }: NavCollapseProps) => (
    <div className="navbar-collapse collapse">{children}</div>
);

export interface NavProps {
    children: React.ReactNode;
    vertical?: boolean;
    narrow?: boolean;
    right?: boolean;
    dark?: boolean;
}

export const Nav = ({
    children,
    vertical = false,
    narrow = false,
    right = false,
    dark = false,
}: NavProps) => {
    const options = {
        "navbar-vertical": vertical,
        "navbar-vertical-narrow": narrow,
        "navbar-right": right,
        "navbar-dark": dark,
    };
    const classes = cn(
        "navbar navbar-expand-lg navbar-light navbar-primary",
        options,
    );
    return <nav className={classes}>{children}</nav>;
};

Nav.Link = NavLink;
Nav.Toggle = NavToggle;
Nav.Logo = NavLogo;
Nav.Collapse = NavCollapse;
Nav.Heading = NavBarHeading;
Nav.Bar = NavBar;
Nav.Item = NavItem;
Nav.Link = NavLink;
Nav.LinkIcon = NavLinkIcon;
Nav.LinkTitle = NavLinkTitle;

export default Nav;
