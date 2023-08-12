import { information } from './information';

export const secondinformation = {
  name: 'secondinformation',
  title: 'Second Information',
  type: 'document',
  fields: [
    ...information.fields,
  ],
};
