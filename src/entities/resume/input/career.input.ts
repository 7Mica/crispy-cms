import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CareerInput {
  @Field(() => String, { nullable: false })
  companyName: string;

  @Field({ nullable: false })
  startDate: Date;

  @Field({ nullable: false })
  endDate: Date;

  @Field(() => String)
  city: string;

  @Field(() => String)
  country: string;

  @Field(() => String)
  state: string;

  @Field(() => String, { nullable: false })
  jobTitle: string;

  @Field(() => String, { nullable: false })
  description: string;
}
