import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Ability } from './ability.entity';
import { Career } from './career.entity';
import { Hobby } from './hobby.entity';

@Entity()
@ObjectType()
export class Resume {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String, { nullable: false })
  @Column({ nullable: false })
  firstName: string;

  @Field(() => String, { nullable: false })
  @Column({ nullable: false })
  lastName: string;

  @Field(() => String)
  @Column()
  state: string;

  @Field(() => String)
  @Column()
  city: string;

  @Field(() => String)
  @Column()
  country: string;

  @Field(() => Int, { nullable: false })
  @Column({ nullable: false })
  age: number;

  @Field(() => String, { nullable: false })
  @Column({ nullable: false })
  resumeFileUrl: string;

  @Field(() => String, { nullable: false })
  @Column({ nullable: false })
  profileImage: string;

  @Field(() => String, { nullable: false })
  @Column('text', { nullable: false })
  about: string;

  @Field(() => Boolean, { nullable: false })
  @Column('text', { nullable: false })
  selected: boolean;

  @Field(() => [Career])
  @OneToMany(() => Career, (career) => career.resume, { cascade: true })
  careers: Career[];

  @Field(() => [Ability])
  @OneToMany(() => Ability, (ability) => ability.resume, { cascade: true })
  abilities: Ability[];

  @Field(() => [Hobby])
  @OneToMany(() => Hobby, (hobby) => hobby.resume, { cascade: true })
  hobbies: Hobby[];
}
