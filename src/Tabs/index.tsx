import React from "react";
import cn from "classnames";

const TabContext = React.createContext({
    active: undefined,
    setActive: (id: string): any => {},
});

export interface TabPanelProps {
    id: string;
    children: React.ReactNode;
    className?: string;
}

const TabPanel = ({ id, children, className }: TabPanelProps) => {
    const { active } = React.useContext(TabContext);
    const classes = cn(
        "tab-pane",
        { active: active === id, show: active === id },
        className,
    );
    return (
        <div className={classes} id={id}>
            {children}
        </div>
    );
};

export interface TabContentProps {
    children: React.ReactNode;
}

const TabContent = ({ children }: TabContentProps) => (
    <div className="tab-content">{children}</div>
);

export interface TabProps {
    id: string;
    children: React.ReactNode;
}

const Tab = ({ id, children }: TabProps) => {
    const { active, setActive } = React.useContext(TabContext);
    const classes = cn("nav-link", { active: active === id });
    const onClick = (e: React.MouseEvent) => {
        setActive(id);
        e.preventDefault();
    };
    return (
        <li className="nav-item">
            <a
                href={`#${id}`}
                className={classes}
                data-toggle="tab"
                onClick={onClick}
            >
                {children}
            </a>
        </li>
    );
};

export interface TabsHeaderProps {
    children: React.ReactNode;
    className?: string;
    fill?: boolean;
    alt?: boolean;
}

const TabsHeader = ({
    children,
    className,
    fill = false,
    alt = false,
}: TabsHeaderProps) => {
    const classes = cn(
        "nav nav-tabs",
        { "nav-fill": fill, "nav-tabs-alt": alt },
        className,
    );
    return (
        <ul className={classes} data-toggle="tabs">
            {children}
        </ul>
    );
};

export interface TabsProps {
    children: React.ReactNode;
    defaultEventKey: string;
}

const Tabs = ({ children, defaultEventKey }: TabsProps) => {
    const [active, setActive] = React.useState(defaultEventKey);
    return (
        <TabContext.Provider value={{ active, setActive }}>
            {children}
        </TabContext.Provider>
    );
};

Tabs.Tab = Tab;
Tabs.Content = TabContent;
Tabs.Panel = TabPanel;
Tabs.Header = TabsHeader;

export default Tabs;
