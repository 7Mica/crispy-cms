import { Field, InputType, Int } from '@nestjs/graphql';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { SierraMadreHeroSlideInput } from './sierra-madre-hero-slide.input';
import { SierraMadrePromoInput } from './sierra-madre-promo.input';
import { SierraMadreServiceInput } from './sierra-madre-service.input';

@InputType()
export class SierraMadreMainPageInput {
  @IsString()
  @Field(() => String)
  id?: string;

  @IsOptional()
  @IsBoolean()
  @Field(() => Boolean, { nullable: true })
  isNew: boolean;

  @IsString()
  @Field(() => String, { nullable: false })
  houseNumber: string;

  @IsString()
  @Field(() => String, { nullable: false })
  neighborhood: string;

  @IsString()
  @Field(() => String, { nullable: false })
  city: string;

  @IsString()
  @Field(() => String, { nullable: false })
  state: string;

  @IsNumber()
  @Field(() => Int, { nullable: false })
  zipCode: number;

  @IsString()
  @Field(() => String, { nullable: false })
  phoneNumber: string;

  @IsBoolean()
  @Field(() => Boolean, { nullable: false })
  selected: boolean;

  @IsNumber()
  @Field(() => Int, { nullable: false })
  weight: number;

  @IsOptional()
  @Field(() => [SierraMadreHeroSlideInput])
  heroSlides: SierraMadreHeroSlideInput[];

  @IsOptional()
  @Field(() => [SierraMadrePromoInput])
  promos: SierraMadrePromoInput[];

  @IsOptional()
  @Field(() => [SierraMadreServiceInput])
  services: SierraMadreServiceInput[];
}
