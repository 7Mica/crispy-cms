import { Query, Resolver } from '@nestjs/graphql';
import { GitHub } from './github.entity';
import { GitHubService } from './github.service';

@Resolver(() => GitHub)
export class GitHubResolver {
  constructor(private gitHubService: GitHubService) {}

  @Query(() => GitHub)
  public getCurrentBuildCommit() {
    return this.gitHubService.getCurrentBuildCommit();
  }
}
