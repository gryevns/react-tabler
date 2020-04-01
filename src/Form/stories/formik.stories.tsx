import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import Button from "../../Button";
import Card from "../../Card";
import Form, { Control } from "../../Form";

export default {
    title: "Form/Formik",
};

const initialValues = {
    name: "Bob",
    email: "example@formik.com",
    tier: 2,
};

const onSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
    });
    resetForm();
    setSubmitting(false);
};

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Names must have at least 2 characters")
        .max(100, "Names can't be longer than 100 characters")
        .required("Name is required"),
    email: Yup.string()
        .email("Must be a valid email address")
        .max(100, "Email must be less than 100 characters")
        .required("Email is required"),
});

export const Validation = () => (
    <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
    >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
        }) => (
            <Card>
                <Card.Header>
                    <Card.Title>Formik &amp; Yup Example</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label required>Name</Form.Label>
                            <Control.Input
                                name="name"
                                outline={false}
                                value={values.name}
                                valid={touched.name && errors.name ? false : null}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.name && errors.name && (
                                <Control.Feedback>{errors.name}</Control.Feedback>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label required>Email</Form.Label>
                            <Control.Input
                                name="email"
                                outline={false}
                                value={values.email}
                                valid={touched.email && errors.email ? false : null}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.email && errors.email && (
                                <Control.Feedback>{errors.email}</Control.Feedback>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label required>Tier</Form.Label>
                            <Control.Select
                                name="tier"
                                value={values.tier}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="form-select"
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </Control.Select>
                        </Form.Group>
                        <Button
                            block
                            variant="primary"
                            disabled={isSubmitting || Object.keys(errors).length > 0}
                            loading={isSubmitting}
                            render={props => (
                                <button type="submit" {...props}>
                                    Submit
                                </button>
                            )}
                        />
                    </Form>
                </Card.Body>
            </Card>
        )}
    </Formik>
);
