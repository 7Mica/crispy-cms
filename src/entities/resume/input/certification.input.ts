import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsOptional } from 'class-validator';
import { CertificationStatusEnum } from '../../../core/enum/certification-status.enum';

@InputType()
export class CertificationInput {
  @IsOptional()
  @IsBoolean()
  @Field(() => Boolean, { nullable: true })
  isNew: boolean;

  @Field(() => String, { nullable: false })
  certificationUrl: string;

  @Field(() => String, { nullable: false })
  certificationImageUrl: string;

  @Field(() => String, { nullable: false })
  certificationDescription: string;

  @Field(() => String, { nullable: false })
  certificationCode: string;

  @Field(() => CertificationStatusEnum, { nullable: false })
  status: CertificationStatusEnum;
}
