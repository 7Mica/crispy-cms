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

  @Mutation(() => String)
  public async newUser(
    @Args({ type: () => UserInput, name: 'userInput' }, PasswordPipe)
    userInput: UserInput,
  ) {
    await this.userService.createUser(userInput);

    return 'Done';
  }

  @Query(() => User)
  public findUserByEmail(@Args({ type: () => String, name: 'email' }) email) {
    return this.userService.findUserByEmail(email);
  }

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
