import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Reservation } from "./Reservation";

@Entity({
  name: "table",
})
export class RestaurantTable {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  capacity: number;

  @Column({ default: true })
  isAvailable: boolean;

  @OneToMany(() => Reservation, (reservation) => reservation.table)
  reservation: Reservation;
}
