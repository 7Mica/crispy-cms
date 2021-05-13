import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class HobbyInput {
  @Field()
  id?: string;

  @Field(() => Boolean, { nullable: true })
  isNew: boolean;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  description: string;
}
