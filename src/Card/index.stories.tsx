import React from "react";
import { Heart } from "react-feather";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import Avatar from "../Avatar";
import Buttons from "../Buttons";
import Card from "../Card";
import Grid from "../Grid";

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
    sizes.map(size => (
        <Card size={size}>
            <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
    ));

export const Active = () => (
    <Card active>
        <Card.Body>This is a card with active state.</Card.Body>
    </Card>
);

export const Inactive = () => (
    <Card inactive>
        <Card.Body>This is some text inactive state.</Card.Body>
    </Card>
);

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

export const Group = () => (
    <Card.Group>
        <Card inactive>
            <Card.Body>First card</Card.Body>
        </Card>
        <Card active>
            <Card.Body>Second card</Card.Body>
        </Card>
        <Card>
            <Card.Body>Third card</Card.Body>
        </Card>
    </Card.Group>
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
    ["top", "bottom", "left"].map(position => {
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
