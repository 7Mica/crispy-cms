import { InternalServerErrorException, UseGuards } from '@nestjs/common';
import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/guards/graphql-auth.guard';
import { CommonResponse } from 'src/core/http/common.response';
import { Ability } from './ability.entity';
import { Career } from './career.entity';
import { Hobby } from './hobby.entity';
import { ResumeInput } from './input/resume.input';
import { Resume } from './resume.entity';
import { ResumeService } from './resume.service';

@Resolver(() => Resume)
export class ResumeResolver {
  constructor(private resumeService: ResumeService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Int)
  public async deleteResume(
    @Args({ type: () => String, name: 'resumeId', nullable: false })
    resumeId: string,
  ) {
    const deleteResult = await this.resumeService.deleteResume(resumeId);

    return deleteResult.affected;
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Resume)
  public newResume(
    @Args({ type: () => ResumeInput, name: 'resumeInput', nullable: false })
    resumeInput: ResumeInput,
  ) {
    return this.resumeService.newResume(resumeInput);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [Resume])
  public resumeList() {
    return this.resumeService.resumeList();
  }

  @Query(() => Resume, { nullable: true })
  public getDefaultResume() {
    return this.resumeService.getDefaultResume();
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => CommonResponse)
  public async updateResume(
    @Args({ type: () => String, name: 'resumeId', nullable: false })
    resumeId: string,
    @Args({ type: () => ResumeInput, name: 'resumeInput', nullable: false })
    resumeInput: ResumeInput,
  ) {
    try {
      await this.resumeService.updateResume(resumeId, resumeInput);

      const response: CommonResponse = {
        success: true,
      };

      return response;
    } catch (e) {
      throw new InternalServerErrorException(e, 'Something went wrong');
    }
  }

  @ResolveField(() => [Career])
  careers(@Parent() resume: Resume) {
    return this.resumeService.getResumeCareers(resume.id);
  }

  @ResolveField(() => [Hobby])
  hobbies(@Parent() resume: Resume) {
    return this.resumeService.getResumeHobbies(resume.id);
  }

  @ResolveField(() => [Ability])
  abilities(@Parent() resume: Resume) {
    return this.resumeService.getResumeAbilities(resume.id);
  }
}
