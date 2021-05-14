import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}
