import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IPayload } from 'src/core/interfaces/payload.interface';
import { IPrePayload } from 'src/core/interfaces/pre-payload.interface';
import { UserService } from 'src/entities/user/user.service';
import { Token } from './dto/token.schema';
import { PasswordService } from './password.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private passwordService: PasswordService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findUserByEmail(email);

    const isThePasswordCorrect = await this.passwordService.compare(
      password,
      user.password,
    );

    if (user && isThePasswordCorrect) {
      const { password, ...result } = user;

      return result;
    }

    return null;
  }

  async login(email: string, password: string): Promise<Token> {
    const user = await this.userService.findUserByEmail(email);

    if (!user) {
      throw new NotFoundException(`No user found for email: ${email}`);
    }

    const passwordValid = await this.passwordService.compare(
      password,
      user.password,
    );

    if (!passwordValid) {
      throw new BadRequestException('Invalid password');
    }

    return this.generateToken({
      userId: user.id,
      email: user.email,
    });
  }

  generateToken(payload: IPrePayload): Token {
    const accessToken: Token = { accessToken: this.jwtService.sign(payload) };

    return accessToken;
  }
}
