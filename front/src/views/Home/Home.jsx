import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Home.css";
import HomeCard from "../../components/HomeCard/HomeCard";

const Home = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleReserveClick = () => {
    if (user) {
      navigate("/new-reservation");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="home-container">
      <header className="header">
        <h1 className="restaurant-title">Sakura</h1>
        <h2 className="restaurant-subtitle">
          A little piece of Asia in Buenos Aires🌸
        </h2>
      </header>
      <section className="about-cards">
        <HomeCard
          icon="🌸"
          title="Zen atmosphere"
          description="Relax in a space inspired by Japanese gardens and the sound of water"
        />
        <HomeCard
          icon="🍣"
          title="Fusion cuisine"
          description="Enjoy sushi, ramen and other exclusive Asian dishes made with fresh ingredients"
        />
        <HomeCard
          icon="🍵"
          title="Traditional tea and desserts"
          description="Try our traditional teas and our special dessert inspired by Hanami"
        />
      </section>

      <section className="cta">
        <h2>Are you ready to live the experience?</h2>
        <p>
          Book your table and experience the magic of Asia with us.
          <br />
          Our opening hours are Monday to Friday, from 8 a.m. to 8 p.m.
        </p>
        <button onClick={handleReserveClick} className="cta-button">
          Reserve a table
        </button>
      </section>

      <footer className="footer">
        <p>&copy; Copyright 2025 Sakura. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
