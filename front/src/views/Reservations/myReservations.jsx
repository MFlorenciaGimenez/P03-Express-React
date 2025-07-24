import "./MyReservations.css";
import { useState, useEffect } from "react";
import ReservationCard from "../../components/Reservation/Reservation";
import axios from "axios";
const GETRESERVATIONS_URL = "http://localhost:3000/appointments";

const MyReservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser || !storedUser.id) {
      alert("User not found. Please log in again.");
      return;
    }

    axios
      .get(`http://localhost:3000/users/${storedUser.id}`)
      .then((res) => {
        const userData = res.data;
        setReservations(userData.reservations);
      })
      .catch((error) => {
        console.error(error);
        alert("Could not load your reservations");
      });
  }, []);

  const cancelReservation = async (id) => {
    try {
      await axios.put(`http://localhost:3000/appointments/cancel/${id}`);

      const updated = reservations.map((appointment) =>
        appointment.id === id
          ? { ...appointment, status: "cancelled" }
          : appointment
      );

      setReservations(updated);
      alert("Reservation cancelled");
    } catch (error) {
      console.error(error);
      alert("Could not cancel reservation");
    }
  };

  return (
    <div className="reservations-container">
      <h2 className="reservations-title">🌸 My Reservations</h2>

      <div className="reservations-grid">
        {reservations.map((appointment) => (
          <ReservationCard
            key={appointment.id}
            id={appointment.id}
            date={appointment.date}
            time={appointment.time}
            status={appointment.status}
            onCancel={cancelReservation}
          />
        ))}
      </div>
      <footer className="reservations-footer">
        <p>&copy; 2025 Sakura Restaurant. All rights reserved 🌸</p>
      </footer>
    </div>
  );
};

export default MyReservations;
