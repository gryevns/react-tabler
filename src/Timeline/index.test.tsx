import React from "react";
import { shallow } from "enzyme";

import Timeline from "./index";

describe("Timeline", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(
            <Timeline>
                <Timeline.Item>
                    <Timeline.Icon className="bg-twitter">icon</Timeline.Icon>
                    <Timeline.Content>
                        <Timeline.Time>10 hrs ago</Timeline.Time>
                        <Timeline.Title>+1150 Followers</Timeline.Title>
                        You’re getting more and more followers, keep it up!
                    </Timeline.Content>
                </Timeline.Item>
            </Timeline>,
        );
        expect(wrapper).toMatchSnapshot();
    });
    it("should match simple snapshot", () => {
        const wrapper = shallow(
            <Timeline simple>
                <Timeline.Item>
                    <Timeline.Icon className="bg-twitter">icon</Timeline.Icon>
                    <Timeline.Content>
                        <Timeline.Time>10 hrs ago</Timeline.Time>
                        <Timeline.Title>+1150 Followers</Timeline.Title>
                        You’re getting more and more followers, keep it up!
                    </Timeline.Content>
                </Timeline.Item>
            </Timeline>,
        );
        expect(wrapper).toMatchSnapshot();
    });
});
