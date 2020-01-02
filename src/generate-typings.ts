import { join } from 'path';
import { GraphQLDefinitionsFactory } from '@nestjs/graphql';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['./**/*.graphql'],
  path: join(process.cwd(), 'graphql.schema.ts'),
  // outputAs: 'class',
  watch: true,
});
