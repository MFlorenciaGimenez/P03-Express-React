import { useState, useEffect, useContext } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import FormField from "../FormField/FormFiel";
import API_URL from "../../config/api";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [serverError, setServerError] = useState("");
  const [emailChecking, setEmailChecking] = useState(false);

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      birthdate: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.name.trim()) errors.name = "Name is required";
      if (!values.email.trim()) errors.email = "Email is required";
      if (!values.birthdate) errors.birthdate = "Birthdate is required";
      if (!values.password.trim()) {
        errors.password = "Password is required";
      } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters long";
      }
      return errors;
    },
    onSubmit: async (values, { setSubmitting, setErrors, resetForm }) => {
      setServerError("");
      try {
        await axios.post(`${API_URL}/users/register`, values);
        alert("User registered successfully!");
        resetForm();
        navigate("/login");
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          const message = error.response.data.message || "Registration failed";
          if (message.toLowerCase().includes("email")) {
            setErrors({
              email:
                "This email address is already registered. Please sign in.",
            });
          } else {
            setServerError(message);
          }
        } else {
          setServerError(
            "Could not connect to the server. Please check your network."
          );
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    if (!formik.values.email || formik.errors.email) return;

    const timeoutId = setTimeout(async () => {
      setEmailChecking(true);
      try {
        await axios.get(
          `${API_URL}/users/check-email?email=${formik.values.email}`
        );
        formik.setFieldError("email", undefined);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          if (error.response.status === 409 || error.response.status === 400) {
            formik.setFieldError(
              "email",
              "This email address is already registered. Please sign in."
            );
          }
        }
      } finally {
        setEmailChecking(false);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [formik.values.email]);

  return (
    <div className="form-page-wrapper">
      <div className="form-card form-register-card">
        <div className="form-content">
          <h2 className="form-title">Create Account</h2>
          <p className="form-subtitle">Sign up to continue</p>

          <form onSubmit={formik.handleSubmit} className="form">
            <FormField
              label="Name"
              id="name"
              name="name"
              placeholder="Enter your name"
              formik={formik}
            />

            <FormField
              label="Email Address"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              formik={formik}
            >
              {emailChecking &&
                formik.values.email.trim() &&
                !formik.errors.email && (
                  <div className="info-message">Verifying availability...</div>
                )}
            </FormField>

            <FormField
              label="Birthdate"
              id="birthdate"
              name="birthdate"
              type="date"
              formik={formik}
            />

            <FormField
              label="Password"
              id="password"
              name="password"
              type="password"
              placeholder="Enter a password"
              formik={formik}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />

            <button
              type="submit"
              className="submit-button"
              disabled={formik.isSubmitting || emailChecking}
            >
              Register
            </button>

            {serverError && <div className="error-message">{serverError}</div>}
          </form>

          <p className="form-footer-link">
            Already have an account?{" "}
            <a href="/login" className="signup-link">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
