import { Field, InputType, Int } from '@nestjs/graphql';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class SierraMadrePromoInput {
  @IsString()
  @Field(() => String)
  id?: string;

  @IsOptional()
  @IsBoolean()
  @Field(() => Boolean, { nullable: true })
  isNew: boolean;

  @IsString()
  @Field(() => String, { nullable: false })
  backgroundImage: string;

  @IsString()
  @Field(() => String)
  description: string;

  @IsNumber()
  @Field(() => Int, { nullable: false })
  weight: number;
}
