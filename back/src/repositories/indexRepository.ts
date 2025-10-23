import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credential";
import { MenuItem } from "../entities/MenuItems";
import { Reservation } from "../entities/Reservation";
import { RestaurantTable } from "../entities/Table";
import { User } from "../entities/User";

export const credentialRepository = AppDataSource.getRepository(Credential);

export const userRepository = AppDataSource.getRepository(User);

export const reservationRepository = AppDataSource.getRepository(Reservation);

export const menuItemsRepository = AppDataSource.getRepository(MenuItem);

export const restaurantTableRepository =
  AppDataSource.getRepository(RestaurantTable);
