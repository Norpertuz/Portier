import { SanityApiResponse, SanityElement } from 'types/sanity';
import { makeApiRequest } from './axiosClient';

export async function getSchemaInformation(): Promise<string> {
  let tagedString: string = '';
  try {
    const response = await makeApiRequest<SanityApiResponse>('', {
      query: '*[_type =="introductionSection"]',
    });

    if (response.status === 200 && response.data.result) {
      const responsedChildren: SanityElement[] = response.data.result[0].content[0].children;

      tagedString = responsedChildren
        .map((child) => (child.marks?.[0] ? `<strong>${child.text}</strong>` : child.text))
        .join('');
    } else {
      console.error('Błąd podczas pobierania schematu');
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log('Unexpected error', error);
    }
  }
  return tagedString;
}
