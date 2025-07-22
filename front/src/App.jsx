import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import MyReservation from "./views/Reservations/myReservations";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<MyReservation />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
