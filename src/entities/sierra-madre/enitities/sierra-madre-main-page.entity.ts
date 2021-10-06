import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SierraMadreHeroSlide } from './sierra-madre-hero-slide.entity';
import { SierraMadrePromo } from './sierra-madre-promo.entity';
import { SierraMadreService } from './sierra-madre-service.entity';

@Entity()
@ObjectType()
export class SierraMadreMainPage {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String, { nullable: false })
  @Column({ nullable: false })
  street: string;

  @Field(() => String, { nullable: false })
  @Column({ nullable: false })
  houseNumber: string;

  @Field(() => String)
  @Column()
  neighborhood: string;

  @Field(() => String)
  @Column()
  city: string;

  @Field(() => String)
  @Column()
  state: string;

  @Field(() => Int, { nullable: false })
  @Column({ nullable: false })
  zipCode: number;

  @Field(() => String, { nullable: false })
  @Column({ nullable: false })
  phoneNumber: string;

  @Field(() => Boolean, { nullable: false })
  @Column('boolean', { nullable: false })
  selected: boolean;

  @Field(() => Int)
  @Column({ nullable: false })
  weight: number;

  @Field(() => [SierraMadrePromo])
  @OneToMany(() => SierraMadrePromo, (promo) => promo.sierraMadreMainPage, {
    cascade: true,
  })
  sierraMadreMainPagePromos: SierraMadrePromo[];

  @Field(() => [SierraMadreService])
  @OneToMany(
    () => SierraMadreService,
    (service) => service.sierraMadreMainPage,
    {
      cascade: true,
    },
  )
  abilities: SierraMadreService[];

  @Field(() => [SierraMadreHeroSlide])
  @OneToMany(
    () => SierraMadreHeroSlide,
    (heroSlide) => heroSlide.sierraMadreMainPage,
    { cascade: true },
  )
  hobbies: SierraMadreHeroSlide[];
}
