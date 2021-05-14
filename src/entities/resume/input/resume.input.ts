import { Field, InputType, Int } from '@nestjs/graphql';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { AbilityInput } from './ability.input';
import { CareerInput } from './career.input';
import { HobbyInput } from './hobby.input';

@InputType()
export class ResumeInput {
  @IsString()
  @Field(() => String, { nullable: false })
  firstName: string;

  @IsString()
  @Field(() => String, { nullable: false })
  lastName: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  state: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  city: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  country: string;

  @IsBoolean()
  @Field(() => Boolean, { nullable: false })
  selected: boolean;

  @IsNumber()
  @Field(() => Int, { nullable: false })
  age: number;

  @IsString()
  @Field(() => String, { nullable: false })
  resumeFileUrl: string;

  @IsString()
  @Field(() => String, { nullable: false })
  profileImage: string;

  @IsString()
  @Field(() => String, { nullable: false })
  about: string;

  @IsOptional()
  @Field(() => [CareerInput])
  careers: CareerInput[];

  @IsOptional()
  @Field(() => [AbilityInput])
  abilities: AbilityInput[];

  @IsOptional()
  @Field(() => [HobbyInput])
  hobbies: HobbyInput[];
}
