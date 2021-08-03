import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GitHub {
  @Field(() => String)
  build_id: string;
}
