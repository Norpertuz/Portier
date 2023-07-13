import { SanityApiResponse, SanityElement } from 'types/sanity';
import axios from 'axios';
import { env } from '../constants/env';

const { authToken, uri } = env;

export async function getSchemaInformation(): Promise<string> {
  let feedback: string = '';
  try {
    const response = await axios.get<SanityApiResponse>(uri, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
      params: {
        query: '*[_type =="introductionSection"]',
      },
    });
    // map filter
    // config axios
    // nazewnictwo
    // arrow functions
    if (response.status === 200 && response.data.result) {
      const responsedChildren: SanityElement[] = response.data.result[0].content[0].children;
      for (let i: number = 0; i < responsedChildren.length; i++) {
        const currentText : string = responsedChildren[i].text;
        const isMarked : boolean = !!responsedChildren[i].marks?.[0];

        if (isMarked) {
          feedback += `<strong>${currentText}</strong>`;
        } else {
          feedback += currentText;
        }
      }
    } else {
      console.error('Błąd podczas pobierania schematu');
    }
  } catch (error) {
    if (error instanceof Error) {
      // TypeScript knows variable error is Error
      console.log(error.message);
    } else {
      console.log('Unexpected error', error);
    }
  }
  return feedback;
}
