import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Table,
} from "typeorm";
import { User } from "./User";
import { table } from "console";
import { RestaurantTable } from "./Table";

export enum ReservationStatus {
  ACTIVE = "active",
  CANCELLED = "cancelled",
}

@Entity({
  name: "reservations",
})
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  time: string;

  @Column()
  partySize: number;

  @Column({
    type: "enum",
    enum: ReservationStatus,
    default: ReservationStatus.ACTIVE,
  })
  status: ReservationStatus;

  @ManyToOne(() => User, (user) => user.reservations)
  user: User;

  @ManyToOne(() => RestaurantTable, (table) => table.reservation)
  table: RestaurantTable;
}
