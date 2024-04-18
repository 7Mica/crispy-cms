import { Field, InputType, Int } from '@nestjs/graphql';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { AbilityInput } from './ability.input';
import { CareerInput } from './career.input';
import { HobbyInput } from './hobby.input';
import { CertificationInput } from './certification.input';
import { Certification } from '../certification.entity';

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
  @Field(() => String)
  state: string;

  @IsOptional()
  @IsString()
  @Field(() => String)
  city: string;

  @IsOptional()
  @IsString()
  @Field(() => String)
  country: string;

  @IsBoolean()
  @Field(() => Boolean, { nullable: false })
  selected: boolean;

  @IsNumber()
  @Field(() => Int, { nullable: false })
  age: number;

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

  @IsOptional()
  @Field(() => [CertificationInput])
  certifications: CertificationInput[];
}
