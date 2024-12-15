import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import s from "./RegisterForm";
import { register } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import * as Yup from "yup";

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
        toast.error("Opps something went wrong,please try again!");
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
    <div>
      <h2>Register</h2>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form>
          <Field type="text" name="name" placeholder="Enter name" />{" "}
          <ErrorMessage name="password" component="div" className={s.error} />
          <Field type="email" name="email" placeholder="Enter email" />{" "}
          <ErrorMessage name="password" component="div" className={s.error} />
          <Field
            type="password"
            name="password"
            placeholder="Enter password"
          />{" "}
          <ErrorMessage name="password" component="div" className={s.error} />
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
