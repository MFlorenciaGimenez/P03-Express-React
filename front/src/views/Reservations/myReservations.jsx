import { useState, useEffect } from "react";
import ReservationCard from "../../components/Reservation/Reservation";
import "./MyReservations.css";
import axios from "axios";
const GETRESERVATIONS_URL = "http://localhost:3000/appointments";

const MyReservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios
      .get(GETRESERVATIONS_URL)
      .then((response) => response.data)
      .then((reservationsfromDB) => setReservations(reservationsfromDB))
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
  }, []);

  const cancelReservation = (id) => {
    const updatedReservations = reservations.map((appointment) =>
      appointment.id === id
        ? { ...appointment, status: "cancelled" }
        : appointment
    );
    setReservations(updatedReservations);
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
