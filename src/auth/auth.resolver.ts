import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Token } from './dto/token.schema';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => Token)
  public async logIn(
    @Args({ type: () => String, name: 'email' }) email: string,
    @Args({ type: () => String, name: 'password' }) password: string,
  ) {
    return await this.authService.login(email, password);
  }
}
