import React from "react";
import { shallow } from "enzyme";

import Payment from "./index";

describe("Payment", () => {
    it("should match snapshot", () => {
        [undefined, "lg" as const, "xl" as const].map(size => {
            const wrapper = shallow(<Payment provider="paypal" size={size} />);
            expect(wrapper).toMatchSnapshot();
        });
    });
});
