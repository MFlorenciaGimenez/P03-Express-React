import { useFormik } from "formik";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import "../StylesForm/StylesForm.css";

const Register = () => {
  const { login } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      birthdate: "",
      nDni: "",
      username: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.name.trim()) errors.name = "Name is required";
      if (!values.email.trim()) errors.email = "Email is required";
      if (!values.birthdate) errors.birthdate = "Birthdate is required";
      if (!values.nDni.trim()) {
        errors.nDni = "DNI is required";
      } else if (!/^\d+$/.test(values.nDni)) {
        errors.nDni = "DNI must be a number";
      }
      if (!values.username.trim()) errors.username = "Username is required";
      if (!values.password.trim()) {
        errors.password = "Password is required";
      } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters long";
      }
      return errors;
    },
    onSubmit: async (values, { setSubmitting, setErrors, resetForm }) => {
      try {
        const payload = {
          ...values,
          nDni: Number(values.nDni),
        };

        const response = await axios.post(
          "http://localhost:3000/users/register",
          payload
        );

        login(response.data);

        resetForm();
        alert("User registered successfully!");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response) {
            setErrors({
              email: error.response.data.message || "Registration failed",
            });
          } else {
            console.error("Error sin respuesta:", error);
          }
        } else {
          console.error("Error desconocido:", error);
        }
      } finally {
        setSubmitting(false);
      }
    },
  });
  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h2 className="form-title">Registration</h2>
        <form onSubmit={formik.handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="form-input"
              placeholder="Enter your name"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error-message">{formik.errors.name}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="form-input"
              placeholder="Enter your email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error-message">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="birthdate" className="form-label">
              Birthdate
            </label>
            <input
              id="birthdate"
              name="birthdate"
              type="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.birthdate}
              className="form-input"
            />
            {formik.touched.birthdate && formik.errors.birthdate ? (
              <div className="error-message">{formik.errors.birthdate}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="nDni" className="form-label">
              DNI
            </label>
            <input
              id="nDni"
              name="nDni"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.nDni}
              className="form-input"
              placeholder="Enter your DNI number"
            />
            {formik.touched.nDni && formik.errors.nDni ? (
              <div className="error-message">{formik.errors.nDni}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              className="form-input"
              placeholder="Choose a username"
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="error-message">{formik.errors.username}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="form-input"
              placeholder="Enter a password"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error-message">{formik.errors.password}</div>
            ) : null}
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={formik.isSubmitting}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
