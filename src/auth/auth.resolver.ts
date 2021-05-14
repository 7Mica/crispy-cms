import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Token } from './dto/token.schema';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => Token)
  public logIn(
    @Args({ type: () => String, name: 'email', nullable: false }) email: string,
    @Args({ type: () => String, name: 'password', nullable: false })
    password: string,
  ) {
    return this.authService.login(email, password);
  }
}
