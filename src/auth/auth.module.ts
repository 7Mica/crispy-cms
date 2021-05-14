import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JWTConfigService } from 'src/config/jwt-config.service';
import { UserModule } from 'src/entities/user/user.module';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { PasswordModule } from './password.service';

@Module({
  imports: [
    UserModule,
    PassportModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    PasswordModule,
    JwtModule.registerAsync({ useClass: JWTConfigService }),
  ],
  providers: [JwtStrategy, AuthService, AuthResolver],
})
export class AuthModule {}
