import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CareerInput {
  @Field(() => String)
  id?: string;

  @Field(() => Boolean, { nullable: true })
  isNew: boolean;

  @Field(() => String, { nullable: false })
  companyName: string;

  @Field(() => Date, { nullable: false })
  startDate: Date;

  @Field(() => Date, { nullable: false })
  endDate: Date;

  @Field(() => String, { nullable: true })
  city: string;

  @Field(() => String, { nullable: true })
  country: string;

  @Field(() => String, { nullable: true })
  state: string;

  @Field(() => String, { nullable: false })
  jobTitle: string;

  @Field(() => String, { nullable: false })
  description: string;
}
