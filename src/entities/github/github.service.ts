import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GitHub } from './github.entity';

@Injectable()
export class GitHubService {
  constructor(private httpService: HttpService) {}

  public getCurrentBuildCommit(): Observable<GitHub> {
    return this.httpService
      .get('https://api.github.com/repos/7Mica/personal-resume/commits/main')
      .pipe(
        map((axiosResponse: AxiosResponse) => {
          return { build_id: axiosResponse.data.sha };
        }),
      );
  }
}
