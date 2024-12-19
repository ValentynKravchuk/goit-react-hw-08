import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import s from "./RegistrationForm.module.css";
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
        {({ handleChange, handleBlur, values, errors, touched }) => (
          <Form className={s.form}>
            {" "}
            <h2 className={s.title}>Register</h2>
            <div className={s.inputContainer}>
              <Field
                name="name"
                as={TextField}
                fullWidth
                label="Username"
                variant="outlined"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                error={touched.name && Boolean(errors.name)}
                helperText={<ErrorMessage name="name" />}
                style={{ marginBottom: "16px" }}
              />
            </div>
            <div className={s.inputContainer}>
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
            </div>
            <div className={s.inputContainer}>
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
            </div>
            <Button type="submit" variant="contained" color="primary">
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
