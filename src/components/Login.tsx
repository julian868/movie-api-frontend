import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password is too short - should be 8 chars minimum.")
    .required("Password is required"),
});

const Login = () => {
  const handleSubmit = async (values) => {
    try {
      const response = await axios.post("/api/v1/login", values);
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <div className="auth-form-container">
      <h2 className="text-3xl font-bold mb-4">Login</h2>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="login-form flex flex-col">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="youremail@gmail.com"
                className="input-field"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-semibold mb-2">
                Password
              </label>
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="********"
                className="input-field"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Log In
            </button>
            <p className="text-gray-600 text-sm mt-4">
              Don't have an account? <a href="/signup" className="text-blue-500">Register</a>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
