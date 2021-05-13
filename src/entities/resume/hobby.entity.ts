import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Resume } from './resume.entity';

@Entity()
@ObjectType()
export class Hobby {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String, { nullable: false })
  @Column({ nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  @Column({ nullable: false })
  description: string;

  @Field(() => Int)
  @Column({ nullable: false })
  resumeId: string;

  @ManyToOne(() => Resume, (resume) => resume.careers, { onDelete: 'CASCADE' })
  resume: Resume;
}
