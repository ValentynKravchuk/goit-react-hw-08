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
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, values, errors, touched }) => (
          <Form className={s.form}>
            <h2 className={s.title}>Login</h2>
            <Field
              name="email"
              as={TextField}
              fullWidth
              label="Email"
              variant="outlined"
              required
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={touched.email && Boolean(errors.email)}
              helperText={<ErrorMessage name="email" />}
              style={{ marginBottom: "16px" }}
            />

            <Field
              name="password"
              as={TextField}
              fullWidth
              label="Password"
              variant="outlined"
              required
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={touched.password && Boolean(errors.password)}
              helperText={<ErrorMessage name="password" />}
              style={{ marginBottom: "16px" }}
            />

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Log In
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
