import React, { useEffect, useRef } from "react";
import cn from "classnames";
import Button from "../Button";
import Nav from "../Nav";
import { Variant } from "../common";

export const DropdownContext = React.createContext({
    dropdownVisible: false,
    setDropdownVisible: (visible: boolean): any => {},
});

const DropdownHeader = ({ children }) => (
    <span className="dropdown-header">{children}</span>
);

export interface DropdownItemProps {
    className?: string;
    children: React.ReactNode;
    active?: boolean;
    disabled?: boolean;
}

const DropdownItem = ({
    className,
    children,
    active,
    disabled,
}: DropdownItemProps) => {
    const classes = cn("dropdown-item", { active, disabled }, className);
    return (
        <a
            className={classes}
            href="#"
            onClick={(e: React.MouseEvent) => e.preventDefault()}
        >
            {children}
        </a>
    );
};

export interface DropdownMenuProps {
    children: React.ReactNode;
    className?: string;
    arrow?: boolean;
    card?: boolean;
    position?: "right" | "left";
    style?: React.CSSProperties;
    dark?: boolean;
}

const DropdownMenu = ({
    children,
    className,
    arrow,
    card,
    position,
    style,
    dark,
}: DropdownMenuProps) => {
    const { dropdownVisible } = React.useContext(DropdownContext);
    const optionalClasses = {
        show: dropdownVisible,
        "dropdown-menu-arrow": arrow,
        "dropdown-menu-card": card,
        "dropdown-menu-right": position === "right",
        "dropdown-menu-left": position === "left",
        "bg-dark text-white": dark,
    };
    const classes = cn("dropdown-menu", optionalClasses, className);
    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
};

export interface DropdownProps {
    className?: string;
    children: React.ReactNode;
    unfocus?: boolean;
}

const Dropdown = ({ className, children, unfocus = true }: DropdownProps) => {
    const ref = useRef(null);
    const [dropdownVisible, setDropdownVisible] = React.useState(false);
    const classes = cn("dropdown", className);

    function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target) && dropdownVisible) {
            setDropdownVisible(false);
        }
    }

    if (unfocus) {
        // better name?
        useEffect(() => {
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        });
    }

    return (
        <DropdownContext.Provider value={{ dropdownVisible, setDropdownVisible }}>
            <div ref={ref} className={classes}>
                {children}
            </div>
        </DropdownContext.Provider>
    );
};

export interface DropdownButtonProps {
    children?: React.ReactNode;
    className?: string;
    variant?: Variant;
}

const DropdownButton = ({ children, className, ...props }: DropdownButtonProps) => {
    const { dropdownVisible, setDropdownVisible } = React.useContext(
        DropdownContext,
    );
    const onClick = () => setDropdownVisible(!dropdownVisible);
    const classes = cn("dropdown-toggle", className);
    return (
        <Button
            onClick={onClick}
            className={classes}
            {...props}
            data-toggle="dropdown"
            aria-expanded={dropdownVisible}
        >
            {children}
        </Button>
    );
};

export interface DropdownLinkProps {
    children: React.ReactNode;
    className?: string;
}

const DropdownLink = ({ children, className, ...props }: DropdownLinkProps) => {
    const { dropdownVisible, setDropdownVisible } = React.useContext(
        DropdownContext,
    );
    const onClick = (e: React.MouseEvent) => {
        setDropdownVisible(!dropdownVisible);
        e.preventDefault();
    };
    const classes = cn(className);
    return (
        <Nav.Link
            onClick={onClick}
            className={classes}
            {...props}
            data-toggle="dropdown"
            aria-expanded={dropdownVisible}
        >
            {children}
        </Nav.Link>
    );
};

const DropdownDivider = () => <div className="dropdown-divider" />;

Dropdown.Button = DropdownButton;
Dropdown.Link = DropdownLink;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;
Dropdown.Divider = DropdownDivider;
Dropdown.Header = DropdownHeader;

export default Dropdown;
