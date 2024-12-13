import { Field, Form, Formik } from "formik";
import React from "react";

const RegisterForm = () => {
  return (
    <div>
      <h2>Register</h2>
      <Formik>
        <Form>
          <Field type="text" name="name" placeholder="Enter username" />
          <Field type="email" name="name" placeholder="Enter email" />
          <Field type="password" name="name" placeholder="Enter password" />
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
