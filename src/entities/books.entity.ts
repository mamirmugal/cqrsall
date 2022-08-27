import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity()
export class Books {
  @PrimaryGeneratedColumn()
  id: number;
 
  @Column()
  name: string;
}