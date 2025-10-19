const FormField = ({
  label,
  id,
  name,
  type = "text",
  placeholder,
  formik,
  showPassword,
  setShowPassword,
  children,
}) => {
  const renderPasswordToggle = () => {
    if (type === "password" && setShowPassword) {
      return (
        <span
          className="password-toggle-icon"
          onClick={() => setShowPassword(!showPassword)}
        >
          👁
        </span>
      );
    }
    return null;
  };

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">
        {label}
      </label>

      <div className={type === "password" ? "input-with-icon" : ""}>
        <input
          id={id}
          name={name}
          type={inputType}
          placeholder={placeholder}
          {...formik.getFieldProps(name)}
          className="form-input"
        />
        {renderPasswordToggle()}
      </div>

      {children}

      {formik.touched[name] && formik.errors[name] ? (
        <div className="error-message">{formik.errors[name]}</div>
      ) : null}
    </div>
  );
};

export default FormField;
