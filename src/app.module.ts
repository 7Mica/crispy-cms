import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { AuthModule } from './auth/auth.module';
import { GqlConfigService } from './config/graphql-config.service';
import { ScalarModule } from './core/custom-scalar/scalar.module';
import { GitHubModule } from './entities/github/github.module';
import { ResumeModule } from './entities/resume/resume.module';
import { SierraMadreModule } from './entities/sierra-madre/sierra-madre.module';
import { UserModule } from './entities/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRootAsync({ useClass: GqlConfigService }),
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        }),
    }),
    AuthModule,
    ResumeModule,
    UserModule,
    GitHubModule,
    SierraMadreModule,
    ScalarModule,
  ],
  providers: [],
})
export class AppModule {}
