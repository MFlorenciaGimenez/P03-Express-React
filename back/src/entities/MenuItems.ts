import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "menuItems",
})
export class MenuItem {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description?: string;

  @Column()
  price: string;

  @Column()
  imgUrl: string;

  @Column()
  category: string;
}
