import "./MyReservations.css";
import { useState, useEffect } from "react";
import ReservationCard from "../../components/Reservation/Reservation";
import axios from "axios";
import API_URL from "../../config/api";
import Footer from "../../components/Footer/Footer";

const MyReservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser?.id) return alert("Please log in again.");

    axios
      .get(`${API_URL}/users/${storedUser.id}`)
      .then((res) => setReservations(res.data.reservations || []))
      .catch((error) => {
        console.error(error);
        alert("Could not load your reservations");
      });
  }, []);

  const cancelReservation = async (id) => {
    try {
      await axios.put(`${API_URL}/appointments/cancel/${id}`);
      setReservations((prev) =>
        prev.map((r) => (r.id === id ? { ...r, status: "Cancelled" } : r))
      );
      alert("Reservation cancelled");
    } catch (error) {
      console.error(error);
      alert("Could not cancel reservation");
    }
  };

  return (
    <div className="reservations-page">
      <header className="reservations-header">
        <h2>My Reservations</h2>
        <p>Review or cancel your upcoming bookings.</p>
      </header>

      {reservations.length === 0 ? (
        <p className="no-reservations">
          You don’t have any active reservations yet.
        </p>
      ) : (
        <div className="reservations-list">
          {reservations.map((res) => (
            <ReservationCard
              key={res.id}
              id={res.id}
              date={res.date}
              time={res.time}
              status={res.status}
              onCancel={cancelReservation}
            />
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default MyReservations;
