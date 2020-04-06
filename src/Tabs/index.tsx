import React from "react";
import cn from "classnames";

import Card from "../Card";

interface ContextState {
    active: string | null;
    setActive: (eventKey: string) => void;
}

const TabContext = React.createContext({} as ContextState);

const Nav = ({ tabs, fill = false, alt = false }) => {
    const { active, setActive } = React.useContext(TabContext);
    const classes = cn("nav nav-tabs", { "nav-fill": fill, "nav-tabs-alt": alt });
    return (
        <ul className={classes}>
            {Object.keys(tabs).map(item => {
                const classes = cn("nav-link", { active: item === active });
                return (
                    <li className="nav-item" onClick={() => setActive(item)}>
                        <a className={classes}>{tabs[item].title}</a>
                    </li>
                );
            })}
        </ul>
    );
};

const CardTabs = props => (
    <div className="card-tabs">
        <Nav {...props} />
        <div className="tab-content">
            <div className="tab-pane card active">
                <Card.Body>{props.children}</Card.Body>
            </div>
        </div>
    </div>
);

const DefaultTabs = props => (
    <Card>
        <Nav {...props} />
        <Card.Body>
            <div className="tab-content">
                <div className="tab-pane active">{props.children}</div>
            </div>
        </Card.Body>
    </Card>
);

interface TabProps {
    children: any;
    title: React.ReactNode;
    eventKey: string;
}

const Tab = (props: TabProps) => props.children;

interface TabsProps {
    cards?: boolean;
    fill?: boolean;
    alt?: boolean;
    children: React.ReactElement<TabProps>[] | React.ReactElement<TabProps>;
    defaultEventKey?: string;
}

const Tabs = ({ cards = false, children, defaultEventKey, ...props }: TabsProps) => {
    const [active, setActive] = React.useState(defaultEventKey);
    const [tabs, setTabs] = React.useState({});

    React.useEffect(() => {
        // construct tab headers on initial mount only
        setTabs(
            React.Children.map(children, child => child).reduce((result, child) => {
                const {
                    props: { eventKey, title, children },
                } = child;
                result[eventKey] = { title, children };
                return result;
            }, {}),
        );
    }, []);

    if (!tabs.hasOwnProperty(active) && Object.keys(tabs).length > 0) {
        // Set default active eventKey if no match found
        setActive(Object.keys(tabs)[0]);
    }

    const Component = cards ? CardTabs : DefaultTabs;

    return (
        <TabContext.Provider value={{ active, setActive }}>
            <Component tabs={tabs} {...props}>
                {tabs.hasOwnProperty(active) ? tabs[active].children : null}
            </Component>
        </TabContext.Provider>
    );
};

Tabs.Tab = Tab;

export default Tabs;
