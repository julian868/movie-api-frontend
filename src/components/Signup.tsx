import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import axios from "axios"; // Import Axios or any other HTTP client library

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password is too short - should be 8 chars minimum.")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),
});

const Signup = () => {
  const handleSubmit = async (values:any) => {
    const { email, password, confirmPassword } = values;
    try {
      // Call your API endpoint here to save data to MongoDB
      const response = await axios.post("/api/v1/signup", {
        email,
        password,
        confirmPassword
      });

      // Handle success response
      console.log("Response:", response.data);

      // Optionally, you can redirect the user or perform other actions
    } catch (error) {
      // Handle error
      console.error("Signup Error:", error);
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Sign Up</h2>

      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit} // Pass the handleSubmit function
      >
        {() => (
          <Form className="signup-form">
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

            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="********"
            />
            <ErrorMessage name="confirmPassword" component="div" />
            <button type="submit">Sign Up</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;