import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ResumeInput } from './input/resume.input';
import { Resume } from './resume.entity';
import { ResumeService } from './resume.service';

@Resolver()
export class ResumeResolver {
  constructor(private resumeService: ResumeService) {}

  @Mutation(() => String)
  async deleteResume(
    @Args({ type: () => String, name: 'resumeId' }) resumeId: string,
  ) {
    await this.resumeService.deleteResume(resumeId);

    return 'Done';
  }

  @Mutation(() => Resume)
  async newResume(
    @Args({ type: () => ResumeInput, name: 'resumeInput' })
    resumeInput: ResumeInput,
  ) {
    return this.resumeService.newResume(resumeInput);
  }

  @Query(() => [Resume])
  async resumeList() {
    return this.resumeService.resumeList();
  }

  @Mutation(() => String)
  async updateResume(
    @Args({ type: () => String, name: 'resumeId' }) resumeId: string,
    @Args({ type: () => ResumeInput, name: 'resumeInput' })
    resumeInput: ResumeInput,
  ) {
    await this.resumeService.updateResume(resumeId, resumeInput);

    return 'Done';
  }
}
