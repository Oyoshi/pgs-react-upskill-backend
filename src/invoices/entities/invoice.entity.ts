import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Contact } from './contact.entity';
import { Item } from './item.entity';

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('timestamptz')
  createdAt: Date;

  @Column('timestamptz')
  validUntil: Date;

  @OneToOne(() => Contact)
  @JoinColumn()
  recipient: Contact;

  @OneToOne(() => Contact)
  @JoinColumn()
  sender: Contact;

  @OneToMany(() => Item, (item) => item.invoice)
  items: Item[];
}
