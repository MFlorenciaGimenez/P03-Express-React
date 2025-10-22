import IreservationDto from "../dtos/IreservationDto";
import { Reservation } from "../entities/Reservation";
import { User } from "../entities/User";
import {
  reservationRepository,
  restaurantTableRepository,
  userRepository,
} from "../repositories/indexRepository";
import { ReservationStatus } from "../entities/Reservation";

import { Weekday, WORKING_HOURS } from "../utils/workingHours";
import { MoreThanOrEqual } from "typeorm";

export const getAllReservationService = async (): Promise<Reservation[]> => {
  const allReservations: Reservation[] = await reservationRepository.find();
  return allReservations;
};

export const getReservationByIdService = async (
  id: number
): Promise<Reservation> => {
  const reservation: Reservation | null = await reservationRepository.findOneBy(
    {
      id,
    }
  );
  if (!reservation) {
    throw new Error("no reservation for selected user");
  }
  return reservation;
};

export const createReservationService = async ({
  date,
  time,
  userId,
  partySize,
  specialRequest,
}: IreservationDto): Promise<Reservation> => {
  const now = new Date();
  const reservationDateTime = new Date(`${date}T${time}`);
  if (reservationDateTime < now) throw new Error("Cannot reserve in the past");

  const dayNames: Weekday[] = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const day = dayNames[reservationDateTime.getDay()];
  const hours = WORKING_HOURS[day];
  if (!hours) throw new Error("Restaurant closed on that day");

  const hour = parseInt(time.split(":")[0]);
  if (hour < hours.open || hour >= hours.close)
    throw new Error(
      `Restaurant is closed at that time (${day} hours: ${hours.open}:00–${hours.close}:00)`
    );

  const user = await userRepository.findOneBy({ id: userId });
  if (!user) throw new Error(`User with id ${userId} does not exist`);

  const availableTables = await restaurantTableRepository.find({
    where: { capacity: MoreThanOrEqual(partySize), isAvailable: true },
  });

  if (availableTables.length === 0)
    throw new Error("No tables available that match the required capacity");

  const reservationDuration = 60;
  const reservationStart = new Date(`${date}T${time}`);
  const reservationEnd = new Date(
    reservationStart.getTime() + reservationDuration * 60000
  );

  const existingReservations = await reservationRepository.find({
    where: { date, status: ReservationStatus.ACTIVE },
    relations: ["table"],
  });

  const freeTables = availableTables.filter((table) => {
    const overlapping = existingReservations.some((r) => {
      if (r.table.id !== table.id) return false;
      const rStart = new Date(`${r.date}T${r.time}`);
      const rEnd = new Date(rStart.getTime() + reservationDuration * 60000);
      return rStart < reservationEnd && rEnd > reservationStart;
    });
    return !overlapping;
  });

  if (freeTables.length === 0)
    throw new Error("No tables available for that time and party size");

  freeTables.sort((a, b) => a.capacity - b.capacity);
  const chosenTable =
    freeTables.find((t) => t.capacity >= partySize) || freeTables[0];

  const newReservation = reservationRepository.create({
    date,
    time,
    partySize,
    user,
    table: chosenTable,
    specialRequest,
  });

  return await reservationRepository.save(newReservation);
};

export const cancelReservationService = async (
  id: number
): Promise<Reservation> => {
  const reservation: Reservation | null = await reservationRepository.findOneBy(
    {
      id,
    }
  );
  if (!reservation) {
    throw new Error("no reservation for selected user");
  }
  reservation.status = ReservationStatus.CANCELLED;
  await reservationRepository.save(reservation);
  return reservation;
};

export default cancelReservationService;
