import dotenv from 'dotenv';

dotenv.config();

export const env = {
  projectId: process.env.PROJECT_ID || '',
  dataset: process.env.DATASET || '',
  authToken: process.env.AUTH_TOKEN || '',
  url: `https://${process.env.PROJECT_ID}.api.sanity.io/v1/data/query/${process.env.DATASET}`,
  port: +process.env.PORT!,
};
