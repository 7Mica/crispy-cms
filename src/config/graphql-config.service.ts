import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import { join } from 'path';

@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  constructor(private configService: ConfigService) {}

  createGqlOptions(): GqlModuleOptions {
    return {
      playground: this.configService.get<boolean>('GRAPHQL_PLAYGROUND'),
      autoSchemaFile: join(process.cwd(), 'src/generated/schema.gql'),
      sortSchema: true,
      buildSchemaOptions: {
        dateScalarMode: 'isoDate',
      },
      formatError: (error: GraphQLError) => {
        const graphQLFormattedError = {
          message:
            error.extensions?.exception?.response?.message || error.message,
          statusCode:
            error.extensions?.exception?.response?.statusCode ||
            error.extensions?.status,
        };
        return graphQLFormattedError;
      },
      context: async ({ req, connection }) => {
        // header authorization for subscriptions
        if (connection) {
          return {
            req: {
              headers: { authorization: connection.context.authorization },
            },
          };
        }
        // queries and mutations
        return { req };
      },
    };
  }
}
