import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Interview } from '../graphql.schema';

@Entity()
export class InterviewEntity extends BaseEntity implements Interview {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;
}
