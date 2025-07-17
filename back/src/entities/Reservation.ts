import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"

export enum ReservationStatus {
    ACTIVE = "active",
    CANCELLED = "cancelled",
}

@Entity({
    name:"reservations"
})

export class Reservation{
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    date : string

    @Column()
    time : string

    @Column({
        type: "enum",
        enum: ReservationStatus,
        default: ReservationStatus.ACTIVE,
    })
    status: ReservationStatus

    @ManyToOne( () => User, (user)=> user.reservations)
    user: User;
};