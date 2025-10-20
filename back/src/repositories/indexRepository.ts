import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credential";
import { MenuItems } from "../entities/MenuItems";
import { Reservation } from "../entities/Reservation";
import { User } from "../entities/User";

export const credentialRepository = AppDataSource.getRepository(Credential);

export const userRepository = AppDataSource.getRepository(User);

export const reservationRepository = AppDataSource.getRepository(Reservation);

export const menuItemsRepository = AppDataSource.getRepository(MenuItems);
