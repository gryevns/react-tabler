import React from "react";
import cn from "classnames";
import { Manager, Reference, Popper, PopperArrowProps } from "react-popper";

const defaultModifiers = [
    {
        name: "offset",
        options: {
            offset: [0, 4],
        },
    },
];

const Arrow = React.forwardRef(
    (props: PopperArrowProps, ref: React.Ref<HTMLDivElement>) => (
        <div className="tooltip-arrow" ref={ref} data-popper-arrow {...props} />
    ),
);

export interface TooltipProps {
    children: React.ReactElement;
    placement: "top" | "right" | "bottom" | "left";
    className?: string;
    arrow?: boolean;
    content: React.ReactNode;
    modifiers?: any[];
}

const Tooltip = ({
    children,
    placement = "right",
    className,
    arrow = true,
    modifiers = defaultModifiers,
    content,
}: TooltipProps) => {
    const [visible, toggle] = React.useReducer((state) => !state, false);

    const classes = cn(
        "tooltip",
        placement && "bs-tooltip-" + placement,
        "show",
        className,
    );

    return (
        <Manager>
            <Reference>
                {({ ref }) =>
                    React.cloneElement(children, {
                        ref,
                        onMouseOver: toggle,
                        onMouseOut: toggle,
                    })
                }
            </Reference>
            {visible ? (
                <Popper placement={placement} modifiers={modifiers}>
                    {({ ref, style, placement, arrowProps }) => (
                        <div
                            className={classes}
                            data-placement={placement}
                            style={style}
                            ref={ref}
                        >
                            {arrow && <Arrow {...arrowProps} />}
                            <div className="tooltip-inner">{content}</div>
                        </div>
                    )}
                </Popper>
            ) : null}
        </Manager>
    );
};

export default Tooltip;
