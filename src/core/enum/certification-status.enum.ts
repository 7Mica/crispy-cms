import { registerEnumType } from '@nestjs/graphql';

export enum CertificationStatusEnum {
  COMPLETED = 'COMPLETED',
  IN_PROGRESS = 'IN_PROGRESS',
}

registerEnumType(CertificationStatusEnum, { name: 'CertificationStatusEnum' });
