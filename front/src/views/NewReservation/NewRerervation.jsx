import { useFormik } from "formik";
import "../StylesForm/StylesForm.css";
import axios from "axios";
import { useContext } from "react";
import { ReservationContext } from "../../context/ReservationContext";

const NewReservation = () => {
  const { addReservation } = useContext(ReservationContext);

  const generateTimeSlots = () => {
    const times = [];
    for (let hour = 8; hour <= 20; hour++) {
      times.push(
        `${hour.toString().padStart(2, "0")}:00`,
        `${hour.toString().padStart(2, "0")}:30`
      );
    }
    return times;
  };

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.date) {
        errors.date = "Date is required";
      } else {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const [year, month, day] = values.date.split("-").map(Number);
        const selectedDate = new Date(year, month - 1, day);
        selectedDate.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
          errors.date = "Date cannot be in the past";
        }

        const dayOfWeek = selectedDate.getDay();
        if (dayOfWeek === 0 || dayOfWeek === 6) {
          errors.date = "Weekends are not allowed";
        }
      }

      if (!values.time) {
        errors.time = "Time is required";
      }

      return errors;
    },

    onSubmit: async (values, { resetForm, setSubmitting, setErrors }) => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        const userId = user?.id;

        if (!userId) {
          alert("❌ User not found. Please log in again.");
          setSubmitting(false);
          return;
        }

        const payload = {
          userId,
          ...values,
        };

        console.log("📤 Sending reservation data:", payload);

        const response = await axios.post(
          "http://localhost:3000/appointments/schedule",
          payload
        );

        addReservation(response.data);

        alert("✅ Reservation created successfully!");
        resetForm();
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response) {
            setErrors({
              date: error.response.data.error || "Failed to create reservation",
              time: error.response.data.error || "Failed to create reservation",
            });
          } else {
            alert("❌ Network error, please try again later");
          }
        } else {
          alert("❌ Unexpected error");
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  const disableWeekends = (e) => {
    const [year, month, day] = e.target.value.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      alert("🚫 Weekends are not allowed. Please choose a weekday.");
      e.target.value = "";
      formik.setFieldValue("date", "");
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h2 className="form-title">Make a new reservation</h2>
        <form onSubmit={formik.handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input
              id="date"
              name="date"
              type="date"
              min={today}
              onChange={(e) => {
                disableWeekends(e);
                formik.handleChange(e);
              }}
              onBlur={formik.handleBlur}
              value={formik.values.date}
              className="form-input"
            />
            {formik.touched.date && formik.errors.date && (
              <div className="form-error">{formik.errors.date}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="time" className="form-label">
              Time
            </label>
            <select
              id="time"
              name="time"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.time}
              className="form-input"
            >
              <option value="">Select a time</option>
              {generateTimeSlots().map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            {formik.touched.time && formik.errors.time && (
              <div className="form-error">{formik.errors.time}</div>
            )}
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting}
          >
            Reserve
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewReservation;
