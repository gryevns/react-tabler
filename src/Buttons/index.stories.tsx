import React from "react";
import { Link, MemoryRouter as Router } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "react-feather";
import { action } from "@storybook/addon-actions";

import Buttons from ".";
import Tooltip from "../Tooltip";
import { Upload } from "react-feather";
import { colors, Color, variants, Variant } from "../common";

export default {
    title: "Buttons",
};

export const ButtonHTML = () => {
    return (
        <Buttons.Button variant="primary" onClick={action("button-click")}>
            Button
        </Buttons.Button>
    );
};

export const AnchorHTML = () => {
    return (
        <Buttons.Anchor variant="secondary" onClick={action("button-click")}>
            Anchor
        </Buttons.Anchor>
    );
};

export const InputHTML = () => {
    return (
        <Buttons.Input
            variant="warning"
            onClick={action("button-click")}
            value="Input"
        />
    );
};

export const ReactRouterLink = () => (
    <Router>
        <Link to="/" component={Buttons.Button} variant="primary">
            Home
        </Link>
    </Router>
);

export const Variants = () => (
    <Buttons.List>
        {[...variants, "light", "dark", "link"].map((variant: Variant) => (
            <Buttons.Button variant={variant}>{variant}</Buttons.Button>
        ))}
    </Buttons.List>
);

export const Ghost = () => (
    <Buttons.List>
        {[...variants, "light", "dark", "link"].map((variant: Variant) => (
            <Buttons.Button variant={variant} ghost>
                {variant}
            </Buttons.Button>
        ))}
    </Buttons.List>
);

export const Colors = () => (
    <Buttons.List>
        {colors.map((color: Color) => (
            <Buttons.Button color={color}>{color}</Buttons.Button>
        ))}
    </Buttons.List>
);

export const Disabled = () => (
    <Buttons.List>
        {[...variants, "light", "dark", "link"].map((variant: Variant) => (
            <Buttons.Button disabled variant={variant}>
                {variant}
            </Buttons.Button>
        ))}
    </Buttons.List>
);

export const Square = () => (
    <Buttons.List>
        {[...variants, "light", "dark", "link"].map((variant: Variant) => (
            <Buttons.Button square variant={variant}>
                {variant}
            </Buttons.Button>
        ))}
    </Buttons.List>
);

export const Pill = () => (
    <Buttons.List>
        {[...variants, "light", "dark", "link"].map((variant: Variant) => (
            <Buttons.Button pill variant={variant}>
                {variant}
            </Buttons.Button>
        ))}
    </Buttons.List>
);

export const Outline = () => (
    <Buttons.List>
        {[...variants, "light", "dark", "link"].map((variant: Variant) => (
            <Buttons.Button outline variant={variant}>
                {variant}
            </Buttons.Button>
        ))}
    </Buttons.List>
);

export const Loading = () => (
    <Buttons.List>
        {[...variants, "light", "dark", "link"].map((variant: Variant) => (
            <Buttons.Button loading variant={variant}>
                {variant}
            </Buttons.Button>
        ))}
    </Buttons.List>
);

export const Sizes = () =>
    ["sm" as const, "md" as const, "lg" as const].map(size => (
        <Buttons.Button size={size} block={true} variant="primary">
            {size}
        </Buttons.Button>
    ));

export const Tooltips = () => (
    <Tooltip placement="bottom" content="tooltip">
        <Buttons.Button variant="primary">Hover me</Buttons.Button>
    </Tooltip>
);

export const Icons = () => (
    <Buttons.List>
        <Buttons.Anchor variant="primary" icon social="facebook">
            <Facebook size={18} color="white" className="icon" />
        </Buttons.Anchor>
        <Buttons.Anchor variant="primary" icon social="instagram">
            <Instagram size={18} color="white" className="icon" />
        </Buttons.Anchor>
        <Buttons.Anchor variant="primary" icon social="twitter">
            <Twitter size={18} color="white" className="icon" />
        </Buttons.Anchor>
        <Buttons.Button link>
            <Upload size={18} className="icon" />
            &nbsp;Upload
        </Buttons.Button>
    </Buttons.List>
);
