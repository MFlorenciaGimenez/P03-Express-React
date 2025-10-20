import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Menu from "./views/Menu/Menu";
import NavBar from "./components/NavBar/NavBar";
import MyReservation from "./views/Reservations/myReservations";
import Register from "./views/register/Register";
import Login from "./views/Login/Login";
import NewReservation from "./views/NewReservation/NewRerervation";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import "./app.css";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/reservations"
          element={
            <PrivateRoute>
              <MyReservation />
            </PrivateRoute>
          }
        />
        <Route
          path="/new-reservation"
          element={
            <PrivateRoute>
              <NewReservation />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
