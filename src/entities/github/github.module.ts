import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { GitHubResolver } from './github.resolver';
import { GitHubService } from './github.service';

@Module({
  imports: [HttpModule],
  providers: [GitHubService, GitHubResolver],
})
export class GitHubModule {}
