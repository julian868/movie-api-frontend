import React from "react";
import Navbar from "./Navbar";
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
    <div>
      <Navbar />
      <div className="auth-form-container">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="flex flex-col space-y-4">
              <div>
                <label htmlFor="email" className="block font-medium">
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  className="input-field"
                  placeholder="youremail@gmail.com"
                />
                <ErrorMessage name="email" component="div" className="text-red-500" />
              </div>

              <div>
                <label htmlFor="password" className="block font-medium">
                  Password
                </label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  className="input-field"
                  placeholder="********"
                />
                <ErrorMessage name="password" component="div" className="text-red-500" />
              </div>

              <button type="submit" className="btn-primary">Log In</button>
              <p className="text-gray-500 text-sm">Don't have an account? <a href="/signup" className="text-blue-500">Register</a></p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
