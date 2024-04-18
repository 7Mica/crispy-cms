import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ability } from './ability.entity';
import { Career } from './career.entity';
import { Hobby } from './hobby.entity';
import { Resume } from './resume.entity';
import { ResumeResolver } from './resume.resolver';
import { ResumeService } from './resume.service';
import { Certification } from './certification.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Resume, Hobby, Career, Ability, Certification]),
  ],
  providers: [ResumeService, ResumeResolver],
})
export class ResumeModule {}
