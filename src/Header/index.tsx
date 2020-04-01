import React from "react";
import cn from "classnames";
import { Search } from "react-feather";

export interface HeaderTitleProps {
    children: React.ReactNode;
    href: string;
}

const HeaderTitle = ({ children }: HeaderTitleProps, href) => (
    <a
        href={href}
        className="navbar-brand navbar-brand-autodark d-none-navbar-vertical"
    >
        {children}
    </a>
);

const HeaderSearch = ({ placeholder = "Search..." }) => (
    <form className="form-inline w-50 mr-4 d-none d-md-flex ">
        <div className="input-icon w-100">
            <span className="input-icon-addon">
                <Search size={18} />
            </span>
            <input
                type="text"
                className="form-control form-control-flush w-100"
                placeholder={placeholder}
            />
        </div>
    </form>
);

export interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Header = ({ children, className }: HeaderProps) => {
    const classes = cn(
        "navbar navbar-light navbar-secondary navbar-expand",
        className,
    );
    return <nav className={classes}>{children}</nav>;
};

Header.Title = HeaderTitle;
Header.Search = HeaderSearch;

export default Header;
