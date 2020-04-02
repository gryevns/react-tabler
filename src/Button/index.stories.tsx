import React from "react";
import { action } from "@storybook/addon-actions";

import Button from "../Button";
import { Check, Upload } from "react-feather";
import { colors, Color, variants, Variant } from "../common";

export default {
    title: "Button",
};

export const Default = () => {
    return (
        <Button variant="primary" onClick={action("button-click")}>
            Default Button
        </Button>
    );
};

export const Anchor = () => (
    <Button
        variant="danger"
        render={props => (
            <a {...props} href="#">
                Anchor Button
            </a>
        )}
    />
);

// export const ReactRouterLink = () => (
//     <Button render={props => <Link {...props} to="/" />} />
// );

export const Variants = () => (
    <Button.List>
        {variants.map((variant: Variant) => (
            <Button variant={variant}>{variant}</Button>
        ))}
    </Button.List>
);

export const Colors = () => (
    <Button.List>
        {colors.map((color: Color) => (
            <Button color={color}>{color}</Button>
        ))}
    </Button.List>
);

export const Disabled = () => (
    <Button.List>
        {variants.map((variant: Variant) => (
            <Button disabled variant={variant}>
                {variant}
            </Button>
        ))}
    </Button.List>
);

export const Square = () => (
    <Button.List>
        {variants.map((variant: Variant) => (
            <Button square variant={variant}>
                {variant}
            </Button>
        ))}
    </Button.List>
);

export const Pill = () => (
    <Button.List>
        {variants.map((variant: Variant) => (
            <Button pill variant={variant}>
                {variant}
            </Button>
        ))}
    </Button.List>
);

export const Outline = () => (
    <Button.List>
        {variants.map((variant: Variant) => (
            <Button outline variant={variant}>
                {variant}
            </Button>
        ))}
    </Button.List>
);

export const Loading = () => (
    <Button.List>
        {variants.map((variant: Variant) => (
            <Button loading variant={variant}>
                {variant}
            </Button>
        ))}
    </Button.List>
);

export const Sizes = () =>
    ["sm" as const, "md" as const, "lg" as const].map(size => (
        <Button size={size} block={true} variant="primary">
            {size}
        </Button>
    ));

export const Icons = () => (
    <Button.List>
        <Button
            variant="primary"
            className="btn-facebook"
            icon
            render={props => (
                <a {...props} href="#">
                    <Check size={18} className="icon" />
                </a>
            )}
        />
        <Button color={"dark" as Color}>
            <Upload size={18} className="icon" />
            &nbsp;Upload
        </Button>
    </Button.List>
);
