import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/guards/graphql-auth.guard';
import { CurrentUser } from 'src/core/decorators/current-user.decorator';
import { IPayload } from 'src/core/interfaces/payload.interface';
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
  @Query(() => User)
  public getAccountDetails(@CurrentUser() user: IPayload) {
    return this.userService.findUserByEmail(user.email);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Boolean)
  public updateUserPassword(
    @CurrentUser() { email }: IPayload,
    @Args({ type: () => String, name: 'oldPassword' }) oldPassword: string,
    @Args({ type: () => String, name: 'newPassword' }) newPassword: string,
    @Args({ type: () => String, name: 'repeatPassword' })
    repeatPassword: string,
  ) {
    return this.userService.updateUserPassword(
      email,
      oldPassword,
      newPassword,
      repeatPassword,
    );
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [User])
  public userList() {
    return this.userService.userList();
  }
}
