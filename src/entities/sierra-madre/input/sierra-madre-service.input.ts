import { Field, InputType, Int } from '@nestjs/graphql';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class SierraMadreServiceInput {
  @IsString()
  @Field(() => String)
  id?: string;

  @IsOptional()
  @IsBoolean()
  @Field(() => Boolean, { nullable: true })
  isNew: boolean;

  @IsString()
  @Field(() => String, { nullable: false })
  title: string;

  @IsString()
  @Field(() => String, { nullable: false })
  description: string;

  @IsString()
  @Field(() => String, { nullable: false })
  mobileImageUrl: string;

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
