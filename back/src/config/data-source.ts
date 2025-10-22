import { DataSource } from "typeorm";
import { User } from "../entities/User";

import { Reservation } from "../entities/Reservation";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./envs";
import { Credential } from "../entities/Credential";
import { MenuItems } from "../entities/MenuItems";
import { RestaurantTable } from "../entities/Table";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: true,
  dropSchema: false,
  logging: false,
  entities: [User, Reservation, Credential, MenuItems, RestaurantTable],
  subscribers: [],
  migrations: [],
});
