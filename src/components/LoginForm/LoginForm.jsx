import { Field, Form, Formik } from "formik";
import React from "react";
import s from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <div>
      <h2>Login</h2>
      <Formik>
        <Form>
          <Field
            type="email"
            name="email"
            className={s.field}
            placeholder="Enter email"
          />
          <Field
            type="password"
            name="password"
            className={s.field}
            placeholder="Enter password"
          />
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
