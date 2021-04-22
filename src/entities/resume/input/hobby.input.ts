import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class HobbyInput {
  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  description: string;
}
