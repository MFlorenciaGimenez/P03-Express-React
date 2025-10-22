import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
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

  @Column({ nullable: true })
  specialRequest?: string;

  @ManyToOne(() => User, (user) => user.reservations)
  user: User;

  @ManyToOne(() => RestaurantTable, (table) => table.reservation)
  table: RestaurantTable;
}
