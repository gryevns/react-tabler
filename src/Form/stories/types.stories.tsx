import React from "react";

import Form from "../../Form";
import Control from "../Control";
import SelectGroup from "../SelectGroup";
import Payment from "../../Payment";

export default {
    title: "Form/Types",
};

export const Input = () => <Control.Input type="text" />;

export const Password = () => <Control.Input type="password" />;

export const Textarea = () => <Control.Textarea />;

export const Select = () => (
    <Control.Select>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </Control.Select>
);

export const SelectMultiple = () => (
    <Control.Select multiple>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </Control.Select>
);

export const ColorPicker = () => (
    <Control.Input type="color" value="#206bc4" title="Choose your color" />
);

export const Datalist = () => (
    <>
        <Control.Input list="datalistOptions" />
        <datalist id="datalistOptions">
            <option value="Aruba" />
            <option value="Afghanistan" />
            <option value="Angola" />
            <option value="Anguilla" />
            <option value="Albania" />
            <option value="Andorra" />
            <option value="United Arab Emirates" />
            <option value="Argentina" />
            <option value="Armenia" />
            <option value="American Samoa" />
        </datalist>
    </>
);

export const Radios = () => (
    <>
        <Control.Group>
            <Control.Input name="radio" type="radio" />
            <Control.Label>Option 1</Control.Label>
        </Control.Group>
        <Control.Group>
            <Control.Input name="radio" type="radio" />
            <Control.Label>Option 2</Control.Label>
        </Control.Group>
        <Control.Group>
            <Control.Input disabled name="radio" type="radio" />
            <Control.Label>Option 3</Control.Label>
        </Control.Group>
    </>
);

export const RadioGroups = () => (
    <>
        <SelectGroup boxes className="d-flex flex-column">
            <SelectGroup.Item className="flex-fill">
                <SelectGroup.Input name="form-payment" type="radio" value="visa" />
                <SelectGroup.Box className="d-flex align-items-center p-3">
                    <div className="mr-3">
                        <SelectGroup.Check />
                    </div>
                    <div>
                        <Payment provider="visa" className="mr-2" />
                        ending in <strong>7998</strong>
                    </div>
                </SelectGroup.Box>
            </SelectGroup.Item>
            <SelectGroup.Item className="flex-fill">
                <SelectGroup.Input
                    name="form-payment"
                    type="radio"
                    value="mastercard"
                />
                <SelectGroup.Box className="d-flex align-items-center p-3">
                    <div className="mr-3">
                        <SelectGroup.Check />
                    </div>
                    <div>
                        <Payment provider="mastercard" className="mr-2" />
                        ending in <strong>2807</strong>
                    </div>
                </SelectGroup.Box>
            </SelectGroup.Item>
            <SelectGroup.Item className="flex-fill">
                <SelectGroup.Input name="form-payment" type="radio" value="paypal" />
                <SelectGroup.Box className="d-flex align-items-center p-3">
                    <div className="mr-3">
                        <SelectGroup.Check />
                    </div>
                    <div>
                        <Payment provider="paypal" className="mr-2" />
                    </div>
                </SelectGroup.Box>
            </SelectGroup.Item>
        </SelectGroup>
    </>
);

export const Checkboxes = () => (
    <Form>
        <Form.Group>
            <Control.Group>
                <Control.Input type="checkbox" />
                <Control.Label>Option 1</Control.Label>
            </Control.Group>
            <Control.Group>
                <Control.Input type="checkbox" checked />
                <Control.Label>Option 2</Control.Label>
            </Control.Group>
            <Control.Group>
                <Control.Input type="checkbox" disabled />
                <Control.Label>Option 3</Control.Label>
            </Control.Group>
        </Form.Group>
        <Form.Group>
            <Form.Label>Inline Checkboxes</Form.Label>
            <Control.Group inline>
                <Control.Input type="checkbox" />
                <Control.Label>Option 1</Control.Label>
            </Control.Group>
            <Control.Group inline>
                <Control.Input type="checkbox" checked />
                <Control.Label>Option 2</Control.Label>
            </Control.Group>
            <Control.Group inline>
                <Control.Input type="checkbox" disabled />
                <Control.Label>Option 3</Control.Label>
            </Control.Group>
        </Form.Group>
    </Form>
);

export const SelectGroups = () => (
    <SelectGroup>
        <SelectGroup.Item>
            <SelectGroup.Input name="name" type="checkbox" value="HTML" />
            <SelectGroup.Label>HTML</SelectGroup.Label>
        </SelectGroup.Item>
        <SelectGroup.Item>
            <SelectGroup.Input name="name" type="checkbox" value="CSS" />
            <SelectGroup.Label>CSS</SelectGroup.Label>
        </SelectGroup.Item>
        <SelectGroup.Item>
            <SelectGroup.Input name="name" type="checkbox" value="PHP" />
            <SelectGroup.Label>PHP</SelectGroup.Label>
        </SelectGroup.Item>
        <SelectGroup.Item>
            <SelectGroup.Input name="name" type="checkbox" value="JavaScript" />
            <SelectGroup.Label>JavaScript</SelectGroup.Label>
        </SelectGroup.Item>
    </SelectGroup>
);

export const SelectGroupPills = () => (
    <SelectGroup pills>
        <SelectGroup.Item>
            <SelectGroup.Input name="name" type="checkbox" value="HTML" />
            <SelectGroup.Label>HTML</SelectGroup.Label>
        </SelectGroup.Item>
        <SelectGroup.Item>
            <SelectGroup.Input name="name" type="checkbox" value="CSS" />
            <SelectGroup.Label>CSS</SelectGroup.Label>
        </SelectGroup.Item>
        <SelectGroup.Item>
            <SelectGroup.Input name="name" type="checkbox" value="PHP" />
            <SelectGroup.Label>PHP</SelectGroup.Label>
        </SelectGroup.Item>
        <SelectGroup.Item>
            <SelectGroup.Input name="name" type="checkbox" value="JavaScript" />
            <SelectGroup.Label>JavaScript</SelectGroup.Label>
        </SelectGroup.Item>
    </SelectGroup>
);

export const SelectGroupBoxes = () => (
    <SelectGroup boxes>
        <SelectGroup.Item>
            <SelectGroup.Input name="name" type="radio" value="1" />
            <SelectGroup.Label>
                <SelectGroup.Check className="mr-3" />
                Option 1
            </SelectGroup.Label>
        </SelectGroup.Item>
        <SelectGroup.Item>
            <SelectGroup.Input name="name" type="radio" value="2" />
            <SelectGroup.Label>
                <SelectGroup.Check className="mr-3" />
                Option 2
            </SelectGroup.Label>
        </SelectGroup.Item>
    </SelectGroup>
);

export const RangeInput = () => (
    <Control.Input type="range" min="0" max="100" step="10" />
);

export const ToggleSwitch = () => (
    <>
        <Control.Group toggle>
            <Control.Input type="checkbox" />
            <Control.Label>Option 1</Control.Label>
        </Control.Group>
        <Control.Group toggle>
            <Control.Input type="checkbox" checked />
            <Control.Label>Option 2</Control.Label>
        </Control.Group>
        <Control.Group toggle>
            <Control.Input type="checkbox" disabled />
            <Control.Label>Option 3</Control.Label>
        </Control.Group>
    </>
);
