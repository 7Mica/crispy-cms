import { Injectable, Module } from '@nestjs/common';
import { hash, compare } from 'bcrypt';

@Injectable()
export class PasswordService {
  public async hash(password: string): Promise<string> {
    return hash(password, 10);
  }

  public async compare(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return compare(password, hashedPassword);
  }
}

@Module({
  providers: [PasswordService],
  exports: [PasswordService],
})
export class PasswordModule {}
