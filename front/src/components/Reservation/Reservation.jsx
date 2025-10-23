import "./Reservation.css";

const ReservationCard = ({ id, date, time, status, onCancel }) => {
  const s = String(status).toLowerCase();
  const isActive = s === "active";

  return (
    <div className={`reservation-card ${s}`}>
      <h3 className="reservation-title">Reservation</h3>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>
        Status: <strong className={`status ${s}`}>{status}</strong>
      </p>
      {isActive ? (
        <button className="cancel-btn" onClick={() => onCancel(id)}>
          Cancel Reservation
        </button>
      ) : (
        <p className="cancelled-text">This reservation is cancelled</p>
      )}
    </div>
  );
};

export default ReservationCard;
