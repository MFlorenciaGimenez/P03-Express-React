import "./NewReservation.css";
import { useState, useEffect } from "react";
import axios from "axios";
import API_URL from "../../config/api";
import ReservationCard from "../../components/Reservation/Reservation"; // reutilizás tu componente

const BookTable = () => {
  const [partySize, setPartySize] = useState(2);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastReservation, setLastReservation] = useState(null); // 👈 nuevo estado

  const storedUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!date) {
      setAvailableTimes([]);
      return;
    }

    const selectedDate = new Date(date);
    const day = selectedDate.getDay();

    let openHour, closeHour;
    if (day === 0 || day === 6) {
      openHour = 15;
      closeHour = 24;
    } else {
      openHour = 17;
      closeHour = 22;
    }

    const times = [];
    for (let h = openHour; h < closeHour; h++) {
      times.push(`${String(h).padStart(2, "0")}:00`);
      times.push(`${String(h).padStart(2, "0")}:30`);
    }
    setAvailableTimes(times);
    setTime("");
  }, [date]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!storedUser?.id) return alert("Please log in first.");
    if (!time) return alert("Please select a valid time within opening hours.");

    setLoading(true);
    try {
      const res = await axios.post(`${API_URL}/reservations`, {
        date,
        time,
        userId: storedUser.id,
        partySize,
        specialRequest,
      });

      alert("Reservation created successfully!");
      setLastReservation(res.data); // 👈 guardamos la reserva creada
      setDate("");
      setTime("");
      setSpecialRequest("");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Failed to create reservation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="book-page">
      <div className="book-container">
        {/* FORM */}
        <form className="book-form" onSubmit={handleSubmit}>
          <h2 className="book-title">Book a Table at Sakura</h2>
          <p className="book-subtitle">
            We look forward to hosting you at our restaurant.
          </p>

          <div className="row">
            <label>
              Number of guests
              <select
                value={partySize}
                onChange={(e) => setPartySize(e.target.value)}
              >
                {[2, 4, 5, 6, 8, 10].map((n) => (
                  <option key={n} value={n}>
                    {n} people
                  </option>
                ))}
              </select>
            </label>

            <label>
              Time
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                disabled={!availableTimes.length}
              >
                <option value="">
                  {availableTimes.length
                    ? "Select a time"
                    : "Select a date first"}
                </option>
                {availableTimes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label>
            Date
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>

          <label>
            Special Requests
            <textarea
              placeholder="e.g., allergies, seating preference"
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
            />
          </label>

          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? "Booking..." : "Book Now"}
          </button>
        </form>

        {/* RESERVATION CARD */}
        <div className="reservation-preview">
          {lastReservation ? (
            <ReservationCard
              id={lastReservation.id}
              date={lastReservation.date}
              time={lastReservation.time}
              status={lastReservation.status}
            />
          ) : (
            <p className="no-reservation">No reservation yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookTable;
