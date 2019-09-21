import { generateTypeScriptTypes } from 'graphql-schema-typescript';
import { readFileSync, readFile } from 'fs';
import { resolve } from 'path';

const schema = readFileSync(resolve('../generated/schema.graphql'), 'utf8');

generateTypeScriptTypes(
  schema,
  './generated-graphql-schema-types.ts',
  {
    typePrefix: '',
  },
)
  .then(() => {
    console.log('Typings successfully generated');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Failed to generate typings ', error);
    process.exit(1);
  });