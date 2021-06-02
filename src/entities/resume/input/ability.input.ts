import { Field, InputType, Int } from '@nestjs/graphql';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { AbilityEnum } from 'src/core/enum/ability.enum';

@InputType()
export class AbilityInput {
  @IsString()
  @Field(() => String)
  id?: string;

  @IsOptional()
  @IsBoolean()
  @Field(() => Boolean, { nullable: true })
  isNew: boolean;

  @IsString()
  @Field(() => String, { nullable: false })
  logo: string;

  @IsNumber()
  @Field(() => Int, { nullable: false })
  percent: number;

  @IsString()
  @Field(() => AbilityEnum, { nullable: true })
  abilityName: AbilityEnum;

  @IsString()
  @Field(() => String)
  description: string;

  @IsNumber()
  @Field(() => Int, { nullable: false })
  weight: number;
}
