import { Field, InputType, Int } from '@nestjs/graphql';
import { AbilityEnum } from 'src/core/enum/ability.enum';

@InputType()
export class AbilityInput {
  @Field(() => String, { nullable: false })
  logo: string;

  @Field(() => Int, { nullable: false })
  percent: number;

  @Field(() => AbilityEnum)
  abilityName: AbilityEnum;
}
