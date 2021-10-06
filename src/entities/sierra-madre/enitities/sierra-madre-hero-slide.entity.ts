import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SierraMadreMainPage } from './sierra-madre-main-page.entity';

@Entity()
@ObjectType()
export class SierraMadreHeroSlide {
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
  mobileImageUrl: string;

  @Field(() => String, { nullable: false })
  @Column({ nullable: false })
  smImageUrl: string;

  @Field(() => String, { nullable: false })
  @Column({ nullable: false })
  mdImageUrl: string;

  @Field(() => String, { nullable: false })
  @Column({ nullable: false })
  lgImageUrl: string;

  @Field(() => String, { nullable: false })
  @Column({ nullable: false })
  xlImageUrl: string;

  @Field(() => String, { nullable: false })
  @Column({ nullable: false })
  xl2ImageUrl: string;

  @Field(() => String, { nullable: false })
  @Column({ nullable: false })
  xl3ImageUrl: string;

  @Field(() => Int)
  @Column({ nullable: false })
  weight: number;
}
