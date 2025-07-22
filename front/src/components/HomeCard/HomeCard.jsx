import React from "react";
import "./HomeCard.css";


const HomeCard = ({icon, title, description}) => {
    return(
        <div className="card">
            <h3>{icon} {title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default HomeCard;