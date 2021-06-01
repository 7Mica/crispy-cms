import { Field, InputType, Int } from '@nestjs/graphql';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class HobbyInput {
  @IsString()
  @Field()
  id?: string;

  @IsOptional()
  @IsBoolean()
  @Field(() => Boolean, { nullable: true })
  isNew: boolean;

  @IsString()
  @Field(() => String, { nullable: false })
  name: string;

  @IsString()
  @Field(() => String, { nullable: false })
  description: string;

  @IsString()
  @Field(() => String, { nullable: false })
  image: string;

  @IsString()
  @Field(() => String, { nullable: false })
  imagehd: string;

  @IsNumber()
  @Field(() => Int, { nullable: false })
  weight: number;
}
