import React from "react";
import { Link, MemoryRouter as Router } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "react-feather";
import { action } from "@storybook/addon-actions";

import { Anchor, Button, Input, List } from ".";
import Tooltip from "../Tooltip";
import { Upload } from "react-feather";
import { colors, Color, variants, Variant } from "../common";

export default {
    title: "Buttons",
};

export const ButtonHTML = () => {
    return (
        <Button variant="primary" onClick={action("button-click")}>
            Button
        </Button>
    );
};

export const AnchorHTML = () => {
    return (
        <Anchor variant="secondary" onClick={action("button-click")}>
            Anchor
        </Anchor>
    );
};

export const InputHTML = () => {
    return (
        <Input variant="warning" onClick={action("button-click")} value="Input" />
    );
};

export const ReactRouterLink = () => (
    <Router>
        <Link to="/" component={Button} variant="primary">
            Home
        </Link>
    </Router>
);

export const Variants = () => (
    <List>
        {variants.map((variant: Variant) => (
            <Button variant={variant}>{variant}</Button>
        ))}
    </List>
);

export const Colors = () => (
    <List>
        {colors.map((color: Color) => (
            <Button color={color}>{color}</Button>
        ))}
    </List>
);

export const Disabled = () => (
    <List>
        {variants.map((variant: Variant) => (
            <Button disabled variant={variant}>
                {variant}
            </Button>
        ))}
    </List>
);

export const Square = () => (
    <List>
        {variants.map((variant: Variant) => (
            <Button square variant={variant}>
                {variant}
            </Button>
        ))}
    </List>
);

export const Pill = () => (
    <List>
        {variants.map((variant: Variant) => (
            <Button pill variant={variant}>
                {variant}
            </Button>
        ))}
    </List>
);

export const Outline = () => (
    <List>
        {variants.map((variant: Variant) => (
            <Button outline variant={variant}>
                {variant}
            </Button>
        ))}
    </List>
);

export const Loading = () => (
    <List>
        {variants.map((variant: Variant) => (
            <Button loading variant={variant}>
                {variant}
            </Button>
        ))}
    </List>
);

export const Sizes = () =>
    ["sm" as const, "md" as const, "lg" as const].map((size) => (
        <Button size={size} block={true} variant="primary">
            {size}
        </Button>
    ));

export const Tooltips = () => (
    <Tooltip placement="bottom" content="tooltip">
        <Button variant="primary">Hover me</Button>
    </Tooltip>
);

export const Icons = () => (
    <List>
        <Anchor variant="primary" icon social="facebook">
            <Facebook size={18} color="white" className="icon" />
        </Anchor>
        <Anchor variant="primary" icon social="instagram">
            <Instagram size={18} color="white" className="icon" />
        </Anchor>
        <Anchor variant="primary" icon social="twitter">
            <Twitter size={18} color="white" className="icon" />
        </Anchor>
        <Button link>
            <Upload size={18} className="icon" />
            &nbsp;Upload
        </Button>
    </List>
);
