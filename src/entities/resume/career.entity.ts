import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Resume } from './resume.entity';

@Entity()
@ObjectType()
export class Career {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Resume, (resume) => resume.careers, { onDelete: 'CASCADE' })
  resume: Resume;

  @Field(() => Int)
  @Column({ nullable: false })
  resumeId: string;

  @Field(() => String, { nullable: false })
  @Column({ nullable: false })
  companyName: string;

  @Field(() => Date, { nullable: false })
  @Column('date', { nullable: false })
  startDate: Date;

  @Field(() => Date, { nullable: true })
  @Column('date', { nullable: true })
  endDate: Date;

  @Field(() => String)
  @Column()
  city: string;

  @Field(() => String)
  @Column()
  country: string;

  @Field(() => String)
  @Column()
  state: string;

  @Field(() => String, { nullable: false })
  @Column({ nullable: false })
  jobTitle: string;

  @Field(() => String, { nullable: false })
  @Column('varchar', { length: 450, nullable: false })
  description: string;

  @Field(() => Int)
  @Column({ nullable: false })
  weight: number;
}
