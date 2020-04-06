import React from "react";
import { ChevronUp, ChevronDown, Heart, Minus } from "react-feather";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import Avatar from "../Avatar";
import Buttons from "../Buttons";
import Card from "../Card";
import Grid from "../Grid";
import Progress from "../Progress";
import Tabs from "../Tabs";

export default {
    title: "Card",
    decorators: [withKnobs],
};

export const Default = () => (
    <Card>
        <Card.Body>This is some text within a card body.</Card.Body>
    </Card>
);

const sizes = ["sm" as const, undefined, "md" as const, "lg" as const];

export const Padding = () =>
    sizes.map((size) => (
        <Card size={size}>
            <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
    ));

export const Title = () => (
    <>
        <Card>
            <Card.Body>
                <Card.Title>Card title</Card.Title>
                <p>This is some text within a card body.</p>
            </Card.Body>
        </Card>
        <Card>
            <Card.Header>
                <Card.Title>Card title</Card.Title>
            </Card.Header>
            <Card.Body>
                <p>This is some text within a card body.</p>
            </Card.Body>
        </Card>
    </>
);

export const Image = () => (
    <Card style={{ width: 300 }}>
        <img
            src="https://picsum.photos/300/150"
            className="card-img-top"
            alt="Card top image"
        ></img>
        <Card.Body>
            <Card.Title>Card with title and image</Card.Title>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
                deleniti fugit incidunt, iste, itaque minima neque pariatur
                perferendis sed suscipit velit vitae voluptatem.
            </p>
        </Card.Body>
    </Card>
);

export const BlogPostCard = () => (
    <Card style={{ width: 300 }}>
        <a href="#">
            <img
                src="https://picsum.photos/300/150"
                className="card-img-top"
                alt="Card top image"
            ></img>
        </a>
        <Card.Body className="d-flex flex-column">
            <Card.Title>How do you know she is a witch?</Card.Title>
            <p>
                Are you suggesting that coconuts migrate? No, no, no! Yes, yes. A
                bit. But she's got a wart. You ...
            </p>
            <div className="d-flex align-items-center pt-5 mt-auto">
                <Avatar imageURL="https://picsum.photos/301/120" />
                <div className="ml-3">
                    <a href="#" className="text-body">
                        Maryjo Lebarree
                    </a>
                    <small className="d-block text-muted">3 days ago</small>
                </div>
                <div className="ml-auto">
                    <a
                        href="#"
                        className="icon d-none d-md-inline-block ml-3 text-muted"
                    >
                        <Heart size={18} />
                    </a>
                </div>
            </div>
        </Card.Body>
    </Card>
);

export const Deck = () => (
    // make all cards the same height
    <Grid.Row deck>
        <Grid.Col>
            <Card>
                <Card.Body>Short content</Card.Body>
            </Card>
        </Grid.Col>
        <Grid.Col>
            <Card>
                <Card.Body>
                    Extra long content of card. Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr
                </Card.Body>
            </Card>
        </Grid.Col>
        <Grid.Col>
            <Card>
                <Card.Body>Short content</Card.Body>
            </Card>
        </Grid.Col>
    </Grid.Row>
);

export const Advanced = () => (
    <Card>
        <Card.Header>
            <Card.Title>Title</Card.Title>
            <Card.Options>
                <Buttons.Button size="sm" className="mr-1" variant="primary">
                    Action 1
                </Buttons.Button>
                <Buttons.Button size="sm" variant="secondary">
                    Action 2
                </Buttons.Button>
            </Card.Options>
        </Card.Header>
        <Card.Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis
            sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error
            nulla temporibus!
        </Card.Body>
        <Card.Footer>Footer</Card.Footer>
    </Card>
);

export const Status = () =>
    ["top", "bottom", "left"].map((position) => {
        const props = { [position]: true };
        return (
            <Card>
                <Card.Status {...props} color="purple" />
                <Card.Body>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
                    deleniti fugit incidunt, iste, itaque minima neque pariatur
                    perferendis sed suscipit velit vitae voluptatem. A consequuntur,
                    deserunt eaque error nulla temporibus!
                </Card.Body>
            </Card>
        );
    });

export const Stacked = () => (
    <div className="p-2">
        <Card stacked>
            <Card.Header>
                <Card.Title>Stacked Card</Card.Title>
            </Card.Header>
            <Card.Body>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
                deleniti fugit incidunt, iste, itaque minima neque pariatur
                perferendis sed suscipit velit vitae voluptatem.
            </Card.Body>
        </Card>
    </div>
);

export const Loading = () => (
    <Card>
        <Card.Header>
            <Card.Title>Title</Card.Title>
        </Card.Header>
        <Card.Body loading={boolean("Loading", true)}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis
            sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error
            nulla temporibus!
        </Card.Body>
    </Card>
);

// TODO move these somewhere else

export const PostCard = () => (
    <Card className="card-aside">
        <a
            href="#"
            className="card-aside-column"
            style={{ backgroundImage: "url(https://picsum.photos/500/200)" }}
        ></a>
        <Card.Body>
            <h4>
                <a href="#">And this isn't my nose. This is a false one.</a>
            </h4>
            <div className="text-muted">
                Look, my liege! The Knights Who Say Ni demand a sacrifice! …Are you
                suggesting that coconuts migr...
            </div>
            <div className="d-flex align-items-center pt-5 mt-auto">
                <div
                    className="avatar avatar-md mr-3"
                    style={{ backgroundImage: "url(https://picsum.photos/64)" }}
                ></div>
                <div>
                    <a href="#" className="text-default">
                        Rose Bradley
                    </a>
                    <small className="d-block text-muted">3 days ago</small>
                </div>
                <div className="ml-auto text-muted">
                    <a href="#" className="icon d-none d-md-inline-block ml-3">
                        <i className="fe fe-heart mr-1"></i>
                    </a>
                </div>
            </div>
        </Card.Body>
    </Card>
);

export const ProgressStat = ({
    label = "New Feedback",
    value = "62",
    width = 28,
    color = undefined,
}) => (
    <Card>
        <Card.Body className="text-center">
            <h5>{label}</h5>
            <div className="display-4 font-weight-bold mb-4">{value}</div>
            <Progress size="sm">
                <Progress.Bar color={color} width={width} />
            </Progress>
        </Card.Body>
    </Card>
);

export const ChangeStat = ({
    label = "New Tickets",
    total = "43",
    movement = 6,
}) => {
    const movementString = `${movement}%`;
    const movementColor = !movement ? "yellow" : movement > 0 ? "green" : "red";
    return (
        <Card>
            <Card.Body className="p-3 text-center">
                {movement !== undefined && (
                    <div className={`text-right text-${movementColor}`}>
                        {movementString}
                        {!movement ? (
                            <Minus />
                        ) : movement > 0 ? (
                            <ChevronUp />
                        ) : (
                            <ChevronDown />
                        )}
                    </div>
                )}
                <div className="display-4 font-weight-bold m-0">{total}</div>
                <h5 className="mb-4">{label}</h5>
            </Card.Body>
        </Card>
    );
};

export const ChildrenStat = ({
    movement = 11,
    total = "23",
    label = "example",
    color,
    children = null,
}) => {
    const movementString = `${movement}%`;
    const movementColor = !movement ? "yellow" : movement > 0 ? "green" : "red";
    return (
        <Card>
            <Card.Body>
                {movement !== undefined && (
                    <div
                        className={`card-value float-right text-${
                            color || movementColor
                        }`}
                    >
                        {movementString}
                    </div>
                )}
                <h3 className="mb-1">{total}</h3>
                <div className="text-muted">{label}</div>
            </Card.Body>
            {children}
        </Card>
    );
};

export const IconStat = ({
    total = "11",
    label = "example",
    children,
    value = "23",
    color = "blue",
}) => (
    <div className="card p-3">
        <div className="d-flex align-items-center">
            <span className={`stamp stamp-md bg-${color} mr-3`}>{children}</span>
            <div>
                <h4 className="m-0">
                    <a href="#">
                        {total} <small>{label}</small>
                    </a>
                </h4>
                <small className="text-muted">{value}</small>
            </div>
        </div>
    </div>
);
