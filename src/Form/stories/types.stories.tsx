import React from "react";

import Form, { Control, SelectGroup } from "../../Form";
import Payment from "../../Payment";

export default {
    title: "Form/Types",
};

export const Input = () => (
    <Form>
        <Form.Group className="mb-3">
            <Form.Label>Text</Form.Label>
            <Control.Input type="text" />
        </Form.Group>
    </Form>
);

export const Password = () => (
    <Form>
        <Form.Group>
            <Form.Label>Password</Form.Label>
            <Control.Input type="password" />
        </Form.Group>
    </Form>
);

export const Textarea = () => (
    <Form>
        <Form.Group>
            <Form.Label>Textarea</Form.Label>
            <Control.Textarea />
        </Form.Group>
    </Form>
);

export const Select = () => (
    <Form>
        <Form.Group>
            <Form.Label>Select</Form.Label>
            <Control.Select>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Control.Select>
        </Form.Group>
    </Form>
);

export const SelectMultiple = () => (
    <Form>
        <Form.Group>
            <Form.Label>Multiple Select</Form.Label>
            <Control.Select multiple>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Control.Select>
        </Form.Group>
    </Form>
);

export const ColorPicker = () => (
    <Form>
        <Form.Group>
            <Form.Label>Color picker</Form.Label>
            <Control.Input type="color" value="#206bc4" title="Choose your color" />
        </Form.Group>
    </Form>
);

export const Datalist = () => (
    <Form>
        <Form.Group>
            <Form.Label>Datalist</Form.Label>
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
        </Form.Group>
    </Form>
);

export const Radios = () => (
    <Form>
        <Form.Group>
            <Form.Label>Radios</Form.Label>
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
        </Form.Group>
    </Form>
);

export const RadioGroups = () => (
    <Form>
        <Form.Group>
            <Form.Label>Payment method</Form.Label>
            <SelectGroup boxes className="d-flex flex-column">
                <SelectGroup.Item className="flex-fill">
                    <SelectGroup.Input
                        name="form-payment"
                        type="radio"
                        value="visa"
                    />
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
                    <SelectGroup.Input
                        name="form-payment"
                        type="radio"
                        value="paypal"
                    />
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
        </Form.Group>
    </Form>
);

export const Checkboxes = () => (
    <Form>
        <Form.Group>
            <Form.Label>Checkboxes</Form.Label>
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
    <Form>
        <Form.Group>
            <Form.Label>Select Group</Form.Label>
            <SelectGroup>
                <SelectGroup.Item>
                    <SelectGroup.Input name="name" type="checkbox" value="HTML" />
                    <SelectGroup.Box>HTML</SelectGroup.Box>
                </SelectGroup.Item>
                <SelectGroup.Item>
                    <SelectGroup.Input name="name" type="checkbox" value="CSS" />
                    <SelectGroup.Box>CSS</SelectGroup.Box>
                </SelectGroup.Item>
                <SelectGroup.Item>
                    <SelectGroup.Input name="name" type="checkbox" value="PHP" />
                    <SelectGroup.Box>PHP</SelectGroup.Box>
                </SelectGroup.Item>
                <SelectGroup.Item>
                    <SelectGroup.Input
                        name="name"
                        type="checkbox"
                        value="JavaScript"
                    />
                    <SelectGroup.Box>JavaScript</SelectGroup.Box>
                </SelectGroup.Item>
            </SelectGroup>
        </Form.Group>
    </Form>
);

export const RangeInput = () => (
    <Form>
        <Form.Group>
            <Form.Label>Range Input</Form.Label>
            <Control.Input type="range" min="0" max="100" step="10" />
        </Form.Group>
    </Form>
);

export const ToggleSwitch = () => (
    <Form>
        <Form.Group>
            <Form.Label>Toggle Switches</Form.Label>
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
        </Form.Group>
    </Form>
);
