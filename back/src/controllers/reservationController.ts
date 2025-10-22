import { Request, Response } from "express";

import {
  cancelReservationService,
  createReservationService,
  getAllReservationService,
  getReservationByIdService,
} from "../services/reservationService";
import { Reservation } from "../entities/Reservation";

export const getAllReservations = async (req: Request, res: Response) => {
  try {
    const reservations: Reservation[] = await getAllReservationService();
    res.status(200).json(reservations);
  } catch (error) {
    res.status(404).json({
      message: "could not get reservations",
    });
  }
};
export const getReservationById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const reservation: Reservation = await getReservationByIdService(
      Number(id)
    );
    res.status(200).json(reservation);
  } catch (error) {
    res.status(404).json({
      message: "reservation not found for specified user",
    });
  }
};
export const createReservation = async (req: Request, res: Response) => {
  try {
    const { date, time, userId, partySize } = req.body;
    const reservation = await createReservationService({
      date,
      time,
      userId,
      partySize,
    });
    res.status(201).json(reservation);
  } catch (error: any) {
    console.error("Error creating reservation:", error.message);
    res.status(400).json({
      message: "cannot create a new reservation",
    });
  }
};
export const cancelReservation = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const reservation: Reservation = await cancelReservationService(Number(id));
    res.status(200).json(reservation);
  } catch (error) {
    res.status(404).json({
      message: "reservation not found",
    });
  }
};
