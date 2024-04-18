import { Field, InputType, Int } from '@nestjs/graphql';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { CertificationStatusEnum } from '../../../core/enum/certification-status.enum';

@InputType()
export class CertificationInput {
  @IsString()
  @Field(() => String)
  id?: string;

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

  @IsNumber()
  @Field(() => Int, { nullable: false })
  weight: number;
}
