import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { GqlConfigService } from './config/graphql-config.service';
import { ScalarModule } from './core/custom-scalar/scalar.module';
import { ResumeModule } from './entities/resume/resume.module';

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
    ResumeModule,
    ScalarModule,
  ],
  providers: [],
})
export class AppModule {}
