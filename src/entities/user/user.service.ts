import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserInput } from './input/user.input';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  public createUser(userInput: UserInput): Promise<User> {
    const userToCreate = this.userRepository.create(userInput);

    return this.userRepository.save(userToCreate);
  }

  public findUserByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email } });
  }

  public userList(): Promise<User[]> {
    return this.userRepository.find();
  }
}
