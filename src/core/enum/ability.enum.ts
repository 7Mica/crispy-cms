import { registerEnumType } from '@nestjs/graphql';

export enum AbilityEnum {
  SKILL = 'SKILL',
  LANGUAGE = 'LANGUAGE',
  OS = 'OS',
  TOOL = 'TOOL',
}

registerEnumType(AbilityEnum, { name: 'AbilityEnum' });
