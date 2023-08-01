import { getSchemaInformation } from 'SchemaFetcher';
import express from 'express';
import { env } from './constants/env';

const app = express();

app.get('/', async (_, response) => {
  response.send(await getSchemaInformation());
});

app.listen(env.port);
