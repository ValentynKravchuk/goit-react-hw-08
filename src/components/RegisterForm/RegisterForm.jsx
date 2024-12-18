import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import s from "./RegisterForm.module.css";
import { register } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleSubmit = (values, options) => {
    dispatch(register(values))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome ${res?.user?.name}!`);
        navigation("/contacts");
      })
      .catch(() => {
        toast.error("Oops, something went wrong. Please try again!");
      });
    options.resetForm();
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <div className={s.wrapper}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <div className={s.inputContainer}>
            <h2 className={s.title}>Register</h2>
            <TextField
              type="text"
              name="name"
              placeholder="Enter name"
              fullWidth
            />
            <ErrorMessage name="name" component="div" className={s.error} />
          </div>

          <div className={s.inputContainer}>
            <TextField
              type="email"
              name="email"
              placeholder="Enter email"
              fullWidth
            />
            <ErrorMessage name="email" component="div" className={s.error} />
          </div>

          <div className={s.inputContainer}>
            <TextField
              type="password"
              name="password"
              placeholder="Enter password"
              fullWidth
            />
            <ErrorMessage name="password" component="div" className={s.error} />
          </div>

          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
