import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Css {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title:string;

  @Column("text")
  text: string;
}