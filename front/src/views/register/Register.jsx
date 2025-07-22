import { useFormik } from "formik";
import "../StylesForm/StylesForm.css";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      birthdate: "",
      nDni: "",
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
              value={formik.values.name}
              className="form-input"
              placeholder="Enter your name"
            />
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
              value={formik.values.email}
              className="form-input"
              placeholder="Enter your email"
            />
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
              value={formik.values.birthdate}
              className="form-input"
            />
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
              value={formik.values.nDni}
              className="form-input"
              placeholder="Enter your DNI number"
            />
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
