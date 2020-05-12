import React from "react";
import { shallow } from "enzyme";

import Table from "./index";

describe("Table", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(
            <Table>
                <Table.Header>
                    <Table.ColHeader>User</Table.ColHeader>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Col>Ronald Bradley</Table.Col>
                    </Table.Row>
                </Table.Body>
            </Table>,
        );
        expect(wrapper).toMatchSnapshot();
    });
    it("should match striped snapshot", () => {
        const wrapper = shallow(<Table striped>test</Table>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should match cards snapshot", () => {
        const wrapper = shallow(<Table cards>test</Table>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should match hight snapshot", () => {
        const wrapper = shallow(<Table highlightRowOnHover>test</Table>);
        expect(wrapper).toMatchSnapshot();
    });
});
