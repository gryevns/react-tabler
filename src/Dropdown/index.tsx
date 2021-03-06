import React, { useEffect, useRef } from "react";
import cn from "classnames";
import Buttons from "../Buttons";
import { Variant } from "../common";

interface ContextState {
    dropdownVisible: boolean;
    setDropdownVisible: (visible: boolean) => void;
}

export const DropdownContext = React.createContext({
    dropdownVisible: false,
} as ContextState);

const DropdownHeader = ({ children }) => (
    <span className="dropdown-header">{children}</span>
);

interface DropdownItemProps {
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

interface DropdownMenuProps {
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

interface DropdownProps {
    className?: string;
    children: React.ReactNode;
}

export const Dropdown = ({ className, children }: DropdownProps) => {
    const ref = useRef(null);
    const [dropdownVisible, setDropdownVisible] = React.useState(false);
    const classes = cn("dropdown", className);

    function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target) && dropdownVisible) {
            setDropdownVisible(false);
        }
    }
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    return (
        <DropdownContext.Provider value={{ dropdownVisible, setDropdownVisible }}>
            <div ref={ref} className={classes}>
                {children}
            </div>
        </DropdownContext.Provider>
    );
};

interface DropdownButtonProps {
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
        <Buttons.Button
            onClick={onClick}
            className={classes}
            {...props}
            data-toggle="dropdown"
            aria-expanded={dropdownVisible}
        >
            {children}
        </Buttons.Button>
    );
};

const DropdownDivider = () => <div className="dropdown-divider" />;

Dropdown.Button = DropdownButton;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;
Dropdown.Divider = DropdownDivider;
Dropdown.Header = DropdownHeader;

export default Dropdown;
