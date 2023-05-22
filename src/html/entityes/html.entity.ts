import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Html {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title:string;

  @Column("text")
  text: string;
}