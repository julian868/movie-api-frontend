import React from "react";
import Navbar from "./Navbar";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password is too short - should be 8 chars minimum.")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

const Signup = () => {
  const handleSubmit = async (values) => {
    const { email, password, confirmPassword } = values;
    try {
      const response = await axios.post("/api/v1/signup", {
        email,
        password,
        confirmPassword
      });
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Signup Error:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="auth-form-container">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={SignupSchema}
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

              <div>
                <label htmlFor="confirmPassword" className="block font-medium">
                  Confirm Password
                </label>
                <Field
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  className="input-field"
                  placeholder="********"
                />
                <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />
              </div>

              <button type="submit" className="btn-primary">Sign Up</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
