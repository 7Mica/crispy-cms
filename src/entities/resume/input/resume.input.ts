import { Field, InputType, Int } from '@nestjs/graphql';
import { AbilityInput } from './ability.input';
import { CareerInput } from './career.input';
import { HobbyInput } from './hobby.input';

@InputType()
export class ResumeInput {
  @Field(() => String, { nullable: false })
  firstName: string;

  @Field(() => String, { nullable: false })
  lastName: string;

  @Field(() => String)
  state: string;

  @Field(() => String)
  city: string;

  @Field(() => String)
  country: string;

  @Field(() => Int, { nullable: false })
  age: number;

  @Field(() => String, { nullable: false })
  resumeFileUrl: string;

  @Field(() => String, { nullable: false })
  profileImage: string;

  @Field(() => String, { nullable: false })
  about: string;

  @Field(() => [CareerInput])
  careers: CareerInput[];

  @Field(() => [AbilityInput])
  abilities: AbilityInput[];

  @Field(() => [HobbyInput])
  hobbies: HobbyInput[];
}
