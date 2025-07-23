import { useFormik } from "formik";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import "../StylesForm/StylesForm.css";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await axios.post(
          "http://localhost:3000/users/login",
          values
        );
        login(response.data);
        navigate("/");
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          setErrors({ password: "Invalid username or password" });
        } else {
          console.error("Login error:", error);
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h2 className="form-title">Login</h2>
        <form onSubmit={formik.handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.username}
              className="form-input"
              placeholder="Choose a username"
            />
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
              value={formik.values.password}
              className="form-input"
              placeholder="Enter a password"
            />
          </div>

          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
