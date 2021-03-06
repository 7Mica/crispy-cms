import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class UserInput {
  @IsString()
  @Field(() => String)
  email: string;

  @IsString()
  @Field(() => String)
  password: string;
}
