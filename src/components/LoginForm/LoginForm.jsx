import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    dispatch(login(values))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome, ${res?.user?.name}!`);
        navigate("/contacts");
      })
      .catch(() => {
        toast.error("Oops! Something went wrong. Please try again.");
      });

    options.resetForm();
  };
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Login</h2>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <Field
            type="email"
            name="email"
            className={s.field}
            placeholder="Enter email"
          />
          <ErrorMessage name="email" component="span" className={s.error} />
          <Field
            type="password"
            name="password"
            className={s.field}
            placeholder="Enter password"
          />{" "}
          <ErrorMessage name="password" component="span" className={s.error} />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            width="50px"
          >
            Log In
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
