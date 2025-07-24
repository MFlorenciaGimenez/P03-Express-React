import { Router } from "express";

const reservationRouter = Router();

import {
  getAllReservations,
  getReservationById,
  createReservation,
  cancelReservation,
} from "../controllers/reservationController";

reservationRouter.get("/", getAllReservations);

reservationRouter.get("/:id", getReservationById);

reservationRouter.post("/schedule", createReservation);

reservationRouter.put("/cancel/:id", cancelReservation);

export default reservationRouter;
