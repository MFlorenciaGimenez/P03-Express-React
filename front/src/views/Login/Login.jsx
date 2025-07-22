import { useFormik } from "formik";
import "../StylesForm/StylesForm.css";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
