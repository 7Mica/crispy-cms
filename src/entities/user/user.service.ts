import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PasswordService } from 'src/auth/password.service';
import { Repository } from 'typeorm';
import { UserInput } from './input/user.input';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private passwordService: PasswordService,
  ) {}

  public createUser(userInput: UserInput): Promise<User> {
    const userToCreate = this.userRepository.create(userInput);

    return this.userRepository.save(userToCreate);
  }

  public findUserByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email } });
  }

  public async updateUserPassword(
    email: string,
    oldPassword: string,
    newPassword: string,
    repeatPassword: string,
  ): Promise<boolean> {
    if (newPassword !== repeatPassword) {
      throw new BadRequestException('New password must coincide.');
    }

    const userFound = await this.userRepository.findOne({ where: { email } });

    if (!userFound) {
      throw new NotFoundException(
        `User with email ${email} does not exist in the data base`,
      );
    }

    const hasTheSameOldPassword = await this.passwordService.compare(
      oldPassword,
      userFound.password,
    );

    if (!hasTheSameOldPassword) {
      throw new BadRequestException('Old password does not match.');
    }

    userFound.password = await this.passwordService.hash(newPassword);

    await this.userRepository.save(userFound);

    return true;
  }

  public userList(): Promise<User[]> {
    return this.userRepository.find();
  }
}
