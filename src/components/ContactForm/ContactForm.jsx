import React from "react";
import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";

const ContactForm = (onAdd) => {
  const initialValues = {
    username: "",
    number: "",
  };
  const handleSubmit = (values, actions, e) => {
    console.log(values);
    actions.resetForm();
    onAdd({
      name: e.target.elements.text.value,
      number: e.target.elements.text.value,
      id: nanoid(),
    });
  };
  return (
    <div className={s.container}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label htmlFor="" className={s.label}>
            Name
          </label>
          <Field type="text" name="username" className={s.field}></Field>
          <label htmlFor="" className={s.label}>
            Number
          </label>
          <Field type="text" name="number" className={s.field}></Field>
          <button type="submit" className={s.button}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
