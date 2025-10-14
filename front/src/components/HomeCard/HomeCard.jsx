import "./HomeCard.css";

const HomeCard = ({ image, price, title, description }) => {
  return (
    <div className="card">
      <div className="card-img-container">
        {image && <img src={image} alt={title} className="card-img"></img>}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};

export default HomeCard;
