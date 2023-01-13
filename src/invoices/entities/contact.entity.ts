import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  companyName: string;

  @Column()
  city: string;

  @Column()
  street: string;

  @Column()
  postcode: string;

  @Column()
  nip: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  bankAccount: string;
}
