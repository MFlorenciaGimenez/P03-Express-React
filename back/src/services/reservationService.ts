import IreservationDto from "../dtos/IreservationDto";
import { Reservation } from "../entities/Reservation";
import { User } from "../entities/User";
import {
  reservationRepository,
  userRepository,
} from "../repositories/indexRepository";
import { ReservationStatus } from "../entities/Reservation";

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
}: IreservationDto): Promise<Reservation | undefined> => {
  const user: User | null = await userRepository.findOneBy({
    id: userId,
  });
  if (!user) {
    throw new Error(`user with id: ${userId} does not exist`);
  }
  const newReservation: Reservation = await reservationRepository.create({
    date,
    time,
    status: ReservationStatus.ACTIVE,
    user: { id: user.id } as User,
  });

  const savedReservation: Reservation = await reservationRepository.save(
    newReservation
  );
  return newReservation;
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
