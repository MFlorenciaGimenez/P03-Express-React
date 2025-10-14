import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Home.css";
import HomeCard from "../../components/HomeCard/HomeCard";
import chickenKarage from "../../assets/chickenKarage.jpg";
import sushi from "../../assets/sushi.jpeg";
import tonkotsu from "../../assets/tonkotsu.jpg";
import restaurant from "../../assets/restaurant.png";
import Footer from "../../components/Footer/Footer";

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
      {/* 1. HERO SECTION  */}
      <section className="hero">
        <div className="hero-overlay">
          <h1 className="restaurant-title">
            Experience the Art of Japanese Cuisine
          </h1>
          <p className="restaurant-subtitle">
            A taste of Tokyo in the Heart of the City
          </p>
          <button onClick={handleReserveClick} className="btn-primary">
            Book a table
          </button>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section className="about">
        <h1 className="about-title">About Us</h1>
        <div className="about-container">
          <div className="about-text">
            <h3>Our Philosophy </h3>
            <p>
              Sakura is dedicated to providing an authentic japanese dining
              experience, combining traditional techniques with the freshest
              ingredients. Our commitment to quality and hospitality is
              reflected in every dish we serve
            </p>
          </div>
          <div className="about-image">
            <img src={restaurant} alt="Japanese interior" />
          </div>
        </div>
      </section>

      <section className="menu">
        <h3>Menu Highlights</h3>
        <div className="menu-grid">
          <HomeCard
            image={sushi}
            title="Signature Sushi Platter"
            description="An assortment of our finest, freshest sushi and sashimi"
            price="$45"
          />
          <HomeCard
            image={tonkotsu}
            title="Tonkotsu Ramen"
            description="Rich and creamy pork bone broch, with chashu pork and soft-boiled eggs"
            price="$22"
          />
          <HomeCard
            image={chickenKarage}
            title="Chicken Karaage"
            description="Crispy japanese-style fried chicken, served with a lemon wedge"
            price="$15"
          />
        </div>
        <div className="menu-action">
          <Link to="/menu" className="btn-secondary">
            See Full Menu
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
