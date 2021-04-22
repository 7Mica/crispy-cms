import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { AbilityEnum } from 'src/core/enum/ability.enum';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Resume } from './resume.entity';

@Entity()
@ObjectType()
export class Ability {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Resume, (resume) => resume.careers, { onDelete: 'CASCADE' })
  resume: Resume;

  @Field(() => Int)
  @Column({ nullable: false })
  resumeId: number;

  @Field(() => String, { nullable: false })
  @Column({ nullable: false })
  logo: string;

  @Field(() => Int, { nullable: false })
  @Column('int', { nullable: false })
  percent: number;

  @Field(() => AbilityEnum)
  @Column({
    type: 'enum',
    enum: AbilityEnum,
    nullable: false,
  })
  abilityName: AbilityEnum;
}
