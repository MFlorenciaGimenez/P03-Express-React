import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Reservation } from "../entities/Reservation";
import { Credential } from "../entities/Credential";
import { MenuItem } from "../entities/MenuItems";
import { RestaurantTable } from "../entities/Table";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true,
  dropSchema: false,
  logging: false,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
  entities: [User, Reservation, Credential, MenuItem, RestaurantTable],
  subscribers: [],
  migrations: [],
});
