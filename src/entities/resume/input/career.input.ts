import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class CareerInput {
  @IsString()
  @Field(() => String)
  id?: string;

  @IsOptional()
  @IsBoolean()
  @Field(() => Boolean, { nullable: true })
  isNew: boolean;

  @IsString()
  @Field(() => String, { nullable: false })
  companyName: string;

  @IsDate()
  @Field(() => Date, { nullable: false })
  startDate: Date;

  @IsDate()
  @Field(() => Date, { nullable: true })
  endDate: Date;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  city: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  country: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  state: string;

  @IsString()
  @Field(() => String, { nullable: false })
  jobTitle: string;

  @IsString()
  @Field(() => String, { nullable: false })
  description: string;

  @IsNumber()
  @Field(() => Int, { nullable: false })
  weight: number;
}
