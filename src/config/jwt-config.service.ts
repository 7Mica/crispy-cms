import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions, JwtOptionsFactory } from '@nestjs/jwt';

@Injectable()
export class JWTConfigService implements JwtOptionsFactory {
  constructor(private config: ConfigService) {}

  createJwtOptions(): JwtModuleOptions {
    return {
      secret: this.config.get<any>('SERVER_AUTH_SECRET_KEY'),
      signOptions: {
        expiresIn: this.config.get<any>('SERVER_AUTH_SESSION_EXPIRATION'),
      },
    };
  }
}
