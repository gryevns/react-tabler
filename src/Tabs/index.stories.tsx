import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import Tabs from ".";

export default {
    title: "Tabs",
    decorators: [withKnobs],
};

export const Default = () => {
    const props = {
        cards: boolean("Card Style", false),
        fill: boolean("Fill Nav", false),
        alt: boolean("Alternative Style", false),
    };
    return (
        <Tabs {...props}>
            <Tabs.Tab title="Home" eventKey="home">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                consectetur quam at justo accumsan facilisis. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Pellentesque lacinia velit pretium
                nibh pellentesque malesuada. Fusce semper tempor nisi, a pretium
                justo euismod eu. Sed eget euismod nulla. Praesent vitae feugiat
                lacus, quis malesuada nunc. In eleifend posuere ipsum. Pellentesque
                ullamcorper lorem in enim eleifend lacinia. Nam elit quam, venenatis
                in condimentum id, tempor at nisi. Sed congue eu urna sit amet
                iaculis.
            </Tabs.Tab>
            <Tabs.Tab title="About" eventKey="about">
                Quisque in lectus vehicula elit laoreet rhoncus. Vestibulum a laoreet
                neque, et blandit odio. Suspendisse a pretium massa. Cras lacinia est
                nisi, sollicitudin aliquam nisl tincidunt eu. Sed dignissim magna non
                est blandit, eu euismod diam laoreet. Pellentesque condimentum,
                mauris fermentum scelerisque elementum, sapien erat varius metus,
                vitae pretium mi metus dignissim turpis. Nullam nec sapien urna. Sed
                vulputate sagittis congue. Cras fringilla ex a massa convallis
                pretium. Ut eleifend sem sapien, a fringilla justo scelerisque eget.
            </Tabs.Tab>
        </Tabs>
    );
};
