import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Token } from './dto/token.schema';
import { GqlAuthGuard } from './guards/graphql-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => Token)
  public signIn(
    @Args({ type: () => String, name: 'email', nullable: false }) email: string,
    @Args({ type: () => String, name: 'password', nullable: false })
    password: string,
  ) {
    return this.authService.signIn(email, password);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Boolean)
  public isSignedIn() {
    return true;
  }
}
