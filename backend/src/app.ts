import { getContentFromSchema } from 'SchemaFetcher';
import express from 'express';
import { env } from './constants/env';

const app = express();

app.get('/', async (_, response) => {
  try {
    const content = await getContentFromSchema();
    response.send(content);
  } catch (error) {
    response.status(500).send('Error while downloading content');
  }
});

app.listen(env.port, () => {
  console.log(`API listening on port ${env.port}.`);
});
