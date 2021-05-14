import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsDate, IsOptional, IsString } from 'class-validator';

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
  @Field(() => Date, { nullable: false })
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
}
