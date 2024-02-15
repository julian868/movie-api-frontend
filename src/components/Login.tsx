import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password is too short - should be  8 chars minimum.")
    .required("Required"),
});

const Login = () => {
  return (
    <div className="auth-form-container">
      <h2>Login</h2>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit }) => (
          <Form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="youremail@gmail.com"
            />
            <ErrorMessage name="email" component="div" />
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="********"
            />
            <ErrorMessage name="password" component="div" />
            <button type="submit">Log In</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
