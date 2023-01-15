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

  @Column('date')
  createdAt: Date;

  @Column('date')
  validUntil: Date;

  @OneToOne(() => Contact, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  recipient: Contact;

  @OneToOne(() => Contact, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  sender: Contact;

  @OneToMany(() => Item, (item) => item.invoice)
  items: Item[];
}
