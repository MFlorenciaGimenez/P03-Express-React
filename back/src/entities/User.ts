import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Credential } from "./Credential";
import { Reservation } from "./Reservation";

@Entity({
  name: "users",
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  birthdate: string;

  @OneToOne(() => Credential)
  @JoinColumn({ name: "credential_id" })
  credential: Credential;

  @OneToMany(() => Reservation, (reservation) => reservation.user)
  reservations: Reservation[];
}
