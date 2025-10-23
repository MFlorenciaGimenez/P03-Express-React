import "./NewReservation.css";
import { useState, useEffect } from "react";
import axios from "axios";
import API_URL from "../../config/api";
import ReservationCard from "../../components/Reservation/Reservation";

const BookTable = () => {
  const [partySize, setPartySize] = useState(2);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reservations, setReservations] = useState([]);

  const storedUser = JSON.parse(localStorage.getItem("user"));

  const cancelReservation = async (id) => {
    try {
      await axios.put(`${API_URL}/reservations/cancel/${id}`);

      setReservations((prev) => prev.filter((r) => r.id !== id));
    } catch (e) {
      console.error(e);
      alert("Could not cancel reservation");
    }
  };

  useEffect(() => {
    const fetchReservations = async () => {
      if (!storedUser?.id) return;
      try {
        const { data } = await axios.get(`${API_URL}/users/${storedUser.id}`);
        if (data.reservations?.length) {
          const sorted = data.reservations
            .filter((r) => r.status.toLowerCase() === "active")
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 2);
          setReservations(sorted);
        } else {
          setReservations([]);
        }
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    fetchReservations();
  }, [storedUser?.id]);

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
    if (reservations.length >= 2)
      return alert("You already have 2 active reservations.");
    console.log(date);
    setLoading(true);
    try {
      const res = await axios.post(`${API_URL}/reservations/schedule`, {
        date,
        time,
        userId: storedUser.id,
        partySize,
        specialRequest,
      });

      alert("Reservation created successfully!");

      setReservations((prev) => [res.data, ...prev].slice(0, 2));

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

          <button
            type="submit"
            disabled={loading || reservations.length >= 2}
            className="btn-primary"
          >
            {reservations.length >= 2
              ? "Max reservations reached"
              : loading
              ? "Booking..."
              : "Book Now"}
          </button>
        </form>

        <div className="reservation-preview multi">
          {reservations.length > 0 ? (
            reservations.map((r) => (
              <ReservationCard
                key={r.id}
                id={r.id}
                date={r.date}
                time={r.time}
                status={r.status}
                onCancel={cancelReservation}
              />
            ))
          ) : (
            <p className="no-reservation">No reservation yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookTable;
