import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ isLoggedIn }) => {
  return (
    <nav className="navbar">
      <div className="navbar-title">Sakura 🌸</div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>{isLoggedIn && <Link to="/myReservations">Profile</Link>}</li>
      </ul>
    </nav>
  );
};

export default NavBar;
