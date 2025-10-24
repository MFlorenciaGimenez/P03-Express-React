import { useFormik } from "formik";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import "../StylesForm/stylesForm.css";
import FormField from "../FormField/FormFiel";
import API_URL from "../../config/api";

const Login = () => {
  const { login, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  if (user) {
    navigate("/");
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email.trim()) errors.email = "Email is required";
      if (!values.password.trim()) errors.password = "Password is required";
      return errors;
    },
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      setLoginError("");

      try {
        const response = await axios.post(`${API_URL}/users/login`, values);
        login(response.data);
        navigate("/");
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          if (error.response.status === 401 || error.response.status === 400) {
            setLoginError("Invalid email or password.");
          } else {
            setLoginError(
              error.response.data.message || "An unknown error occurred."
            );
          }
        } else {
          setLoginError("Could not connect to the server.");
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="form-page-wrapper">
      <div className="form-card">
        <div className="form-content">
          <h2 className="form-title">Welcome Back</h2>
          <p className="form-subtitle">Sign in to continue</p>

          <form onSubmit={formik.handleSubmit} className="form">
            <FormField
              label="Email Address"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              formik={formik}
            />

            <FormField
              label="Password"
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              formik={formik}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            ></FormField>

            <button
              type="submit"
              className="submit-button"
              disabled={formik.isSubmitting}
            >
              Login
            </button>

            {loginError && <div className="error-message">{loginError}</div>}
          </form>

          <p className="form-footer-link">
            Don't have an account?{" "}
            <a href="/register" className="signup-link">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
