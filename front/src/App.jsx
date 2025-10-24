import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Menu from "./views/Menu/Menu";
import NavBar from "./components/NavBar/NavBar";
import Register from "./views/register/Register";
import Login from "./views/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import "./App.css";
import BookTable from "./views/NewReservation/NewRerervation";

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
          path="/new-reservation"
          element={
            <PrivateRoute>
              <BookTable />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
