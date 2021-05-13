import { Module } from '@nestjs/common';
import { ScalarDate } from './date/date.scalar';

@Module({
  providers: [ScalarDate],
})
export class ScalarModule {}
