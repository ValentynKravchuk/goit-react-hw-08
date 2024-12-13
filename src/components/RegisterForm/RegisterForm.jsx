import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const handelSubmit = (values, options) => {
    dispatch(register(values));
    options.resetForm();
  };
  const initialValues = {
    name: "",
    email: " ",
  };
  return (
    <div>
      <h2>Register</h2>
      <Formik onSubmit={handelSubmit} initialValues={initialValues}>
        <Form>
          <Field type="text" name="name" placeholder="Enter username" />
          <Field type="email" name="email" placeholder="Enter email" />
          <Field type="password" name="password" placeholder="Enter password" />
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
