import "./MenuCard.css";

const MenuCard = ({ name, description, price, imgUrl }) => {
  return (
    <div className="menu-card">
      <div className="image-wrapper">
        <img src={imgUrl} alt={name} className="menu-image" />
      </div>
      <div className="menu-card-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default MenuCard;
