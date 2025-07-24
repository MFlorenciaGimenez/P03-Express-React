import "./Reservation.css";

const ReservationCard = ({ id, date, time, status, onCancel }) => {
  return (
    <div className={`turno-card ${status}`}>
      <h3>Reservation #{id}</h3>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>
        Status: <strong>{status}</strong>
      </p>
      {status === "active" && (
        <button className="cancel-btn" onClick={() => onCancel(id)}>
          Cancel Reservation
        </button>
      )}
      {status === "cancelled" && (
        <p className="cancelled-text">This reservation is cancelled</p>
      )}
    </div>
  );
};

export default ReservationCard;
