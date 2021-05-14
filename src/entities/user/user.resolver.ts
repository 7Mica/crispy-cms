import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/guards/graphql-auth.guard';
import { PasswordPipe } from 'src/core/pipes/password.pipe';
import { UserInput } from './input/user.input';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => User)
  public newUser(
    @Args(
      { type: () => UserInput, name: 'userInput', nullable: false },
      PasswordPipe,
    )
    userInput: UserInput,
  ) {
    return this.userService.createUser(userInput);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => User)
  public findUserByEmail(
    @Args({ type: () => String, name: 'email', nullable: false }) email: string,
  ) {
    return this.userService.findUserByEmail(email);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [User])
  public userList() {
    return this.userService.userList();
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => String)
  public helloWorld() {
    return 'hello world';
  }
}
