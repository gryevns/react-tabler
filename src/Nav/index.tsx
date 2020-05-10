import React from "react";
import cn from "classnames";

import { DropdownContext } from "../Dropdown";

interface ContextState {
    menuVisible: boolean;
    setMenuVisible: (visible: boolean) => void;
}

export const NavContext = React.createContext({
    menuVisible: false,
} as ContextState);

const Toggle = () => {
    const { menuVisible, setMenuVisible } = React.useContext(NavContext);
    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setMenuVisible(!menuVisible);
        e.preventDefault();
    };
    return (
        <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-menu"
            aria-expanded="false"
            onClick={onClick}
        >
            <span className="navbar-toggler-icon"></span>
        </button>
    );
};

const Fill = ({ children }) => (
    <div className="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
        {children}
    </div>
);

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
    light?: boolean;
    dark?: boolean;
    style?: React.CSSProperties;
    size?: "md" | "lg" | "xl" | "fluid";
}

const Header = ({ children, light, dark, style, className, size }: HeaderProps) => {
    const classes = cn(
        "navbar navbar-expand-md",
        {
            "navbar-light": light,
            "navbar-dark": dark,
        },
        className,
    );
    const containerClasses = cn({ container: !size, [`container-${size}`]: size });
    return (
        <header style={style} className={classes}>
            <div className={containerClasses}>
                <Toggle />
                {children}
            </div>
        </header>
    );
};

const HeaderCollapse = ({ children }) => {
    const { menuVisible } = React.useContext(NavContext);
    const classes = cn("navbar-collapse collapse ", { show: menuVisible });
    return (
        <div className={classes} id="navbar-menu">
            {children}
        </div>
    );
};

const Expand = ({ children }) => {
    const { menuVisible } = React.useContext(NavContext);
    const classes = cn("navbar navbar-collapse navbar-light collapse", {
        show: menuVisible,
    });
    return (
        <div className="navbar-expand-md">
            <div className={classes} id="navbar-menu">
                <div className="container-xl">
                    <div className="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

interface ListProps {
    children: React.ReactNode;
    className?: string;
}

const List = ({ children, className }: ListProps) => {
    const classes = cn("navbar-nav", className);
    return <ul className={classes}>{children}</ul>;
};

export interface ListItemProps {
    children: React.ReactNode;
    active?: boolean;
    dropdown?: boolean;
}

const ListItem = ({ children, active, dropdown = false }: ListItemProps) => {
    const ref = React.useRef(null);
    const [dropdownVisible, setDropdownVisible] = React.useState(false);
    const classes = cn("nav-item", { active, dropdown });
    function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target) && dropdownVisible) {
            setDropdownVisible(false);
        }
    }
    React.useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });
    return (
        <DropdownContext.Provider value={{ dropdownVisible, setDropdownVisible }}>
            <li ref={ref} className={classes}>
                {children}
            </li>
        </DropdownContext.Provider>
    );
};

export interface LinkProps {
    children: React.ReactNode;
    className?: string;
    dropdown?: boolean;
    disabled?: boolean;
}

const Link = ({ children, dropdown, className, disabled = false }: LinkProps) => {
    const { dropdownVisible, setDropdownVisible } = React.useContext(
        DropdownContext,
    );
    const onClick = (e: React.MouseEvent) => {
        setDropdownVisible(!dropdownVisible);
        e.preventDefault();
    };
    const classes = cn(
        "nav-link",
        { "dropdown-toggle": dropdown, disabled },
        className,
    );
    return (
        <a className={classes} onClick={onClick}>
            {children}
        </a>
    );
};

const LinkIcon = ({ children }) => (
    <span className="nav-link-icon d-md-none d-lg-inline-block">{children}</span>
);

const LinkTitle = ({ children }) => (
    <span className="nav-link-title">{children}</span>
);

const DropdownMenu = ({ children }) => {
    const { dropdownVisible } = React.useContext(DropdownContext);
    const classes = cn("dropdown-menu", { show: dropdownVisible });
    return <ul className={classes}>{children}</ul>;
};

const DropdownMenuItem = ({ children }) => {
    return (
        <li>
            <a className="dropdown-item">{children}</a>
        </li>
    );
};

interface ExtraProps {
    children?: React.ReactNode;
    className?: string;
}

const Extra = ({ children, className }: ExtraProps) => {
    const classes = cn("navbar-nav flex-row order-md-last", className);
    return <div className={classes}>{children}</div>;
};

interface ItemProps {
    children: React.ReactNode;
    className?: string;
}

const Item = ({ children, className }: ItemProps) => {
    const classes = cn("nav-item", className);
    return <div className={classes}>{children}</div>;
};

export const Image = React.forwardRef(
    (
        { className, ...props }: React.ImgHTMLAttributes<HTMLElement>,
        ref: React.Ref<HTMLImageElement>,
    ) => {
        const classes = cn("navbar-brand-image", className);
        return <img ref={ref} {...props} className={classes} />;
    },
);

const Logo = ({ children }) => {
    return (
        <a
            href="."
            className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pr-0 pr-md-3"
        >
            {children}
        </a>
    );
};

const Aside = ({ children, right = false, dark = false, light = true }) => {
    const classes = cn("navbar navbar-vertical navbar-expand-lg", {
        "navbar-dark": dark,
        "navbar-light": light,
        "navbar-right": right,
    });
    return (
        <aside className={classes}>
            <div className="container-xl">{children}</div>
        </aside>
    );
};

const Nav = ({ children }) => {
    const [menuVisible, setMenuVisible] = React.useState(false);
    return (
        <NavContext.Provider value={{ menuVisible, setMenuVisible }}>
            {children}
        </NavContext.Provider>
    );
};

Nav.Toggle = Toggle;
Nav.DropdownMenu = DropdownMenu;
Nav.DropdownMenuItem = DropdownMenuItem;
Nav.LinkTitle = LinkTitle;
Nav.LinkIcon = LinkIcon;
Nav.Link = Link;
Nav.List = List;
Nav.Fill = Fill;
Nav.ListItem = ListItem;
Nav.Item = Item;
Nav.Expand = Expand;
Nav.HeaderCollapse = HeaderCollapse;
Nav.Header = Header;
Nav.Extra = Extra;
Nav.Logo = Logo;
Nav.Image = Image;
Nav.Aside = Aside;

export default Nav;
