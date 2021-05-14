import { Injectable, Module, PipeTransform } from '@nestjs/common';
import { PasswordService } from 'src/auth/password.service';
import { UserInput } from 'src/entities/user/input/user.input';

@Injectable()
export class PasswordPipe implements PipeTransform {
  constructor(private passwordService: PasswordService) {}

  async transform(userInput: UserInput): Promise<UserInput> {
    const { password, email } = userInput;
    const hashedPassword = await this.passwordService.hash(password);

    return { password: hashedPassword, email };
  }
}

@Module({
  exports: [PasswordPipe, PasswordService],
  providers: [PasswordService, PasswordPipe],
})
export class PasswordPipeModule {}
