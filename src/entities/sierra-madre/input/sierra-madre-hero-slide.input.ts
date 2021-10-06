import { Field, InputType, Int } from '@nestjs/graphql';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class SierraMadreHeroSlideInput {
  @IsString()
  @Field(() => String)
  id?: string;

  @IsOptional()
  @IsBoolean()
  @Field(() => Boolean, { nullable: true })
  isNew: boolean;

  @IsString()
  @Field(() => String, { nullable: false })
  mobileImageUrl: string;

  @IsString()
  @Field(() => String, { nullable: false })
  smImageUrl: string;

  @IsString()
  @Field(() => String, { nullable: false })
  mdImageUrl: string;

  @IsString()
  @Field(() => String, { nullable: false })
  lgImageUrl: string;

  @IsString()
  @Field(() => String, { nullable: false })
  xlImageUrl: string;

  @IsString()
  @Field(() => String, { nullable: false })
  xl2ImageUrl: string;

  @IsString()
  @Field(() => String, { nullable: false })
  xl3ImageUrl: string;

  @IsNumber()
  @Field(() => Int, { nullable: false })
  weight: number;
}
