import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SierraMadreMainPage } from './sierra-madre-main-page.entity';

@Entity()
@ObjectType()
export class SierraMadrePromo {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(
    () => SierraMadreMainPage,
    (mainPage) => mainPage.sierraMadreMainPagePromos,
    { onDelete: 'CASCADE' },
  )
  sierraMadreMainPage: SierraMadreMainPage;

  @Field(() => String)
  @Column({ nullable: false })
  mainPageId: string;

  @Field(() => String, { nullable: false })
  @Column({ nullable: false })
  backgroundImage: string;

  @Field(() => String)
  @Column({ nullable: true })
  description: string;

  @Field(() => Int)
  @Column({ nullable: false })
  weight: number;
}
