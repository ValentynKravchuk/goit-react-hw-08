import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  const orderSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be less than 50 characters")
      .required("Name is required"),
    number: Yup.string()
      .matches(
        /^\d{3}-\d{2}-\d{2}$/,
        "Phone number must be in the format XXX-XX-XX"
      )
      .required("Phone number is required"),
  });

  return (
    <div className={s.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={orderSchema}
      >
        <Form className={s.form}>
          <label className={s.label} htmlFor="name">
            <span>Name</span>
            <Field
              type="text"
              name="name"
              className={s.field}
              placeholder="Name"
              aria-label="Enter name"
              aria-required="true"
            />
            <ErrorMessage name="name" component="span" className={s.error} />
          </label>

          <label className={s.label} htmlFor="number">
            <span>Number</span>
            <Field
              type="text"
              name="number"
              className={s.field}
              placeholder="XXX-XX-XX"
              aria-label="Enter phone number"
              aria-required="true"
            />
            <ErrorMessage name="number" component="span" className={s.error} />
          </label>

          <button type="submit" className={s.button} aria-label="Add contact">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
