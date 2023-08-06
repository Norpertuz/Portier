import { SanityApiResponse, SanityElement } from 'types/sanity';
import { AxiosResponse } from 'axios';
import { apiClient } from './axiosClient';

export async function getContentFromSchema(): Promise<string> {
  let content: string = '';
  try {
    const response: AxiosResponse<SanityApiResponse> = await apiClient.get('', {
      params: { query: '*[_type =="introduction"]' },
    });
    if (response.status === 200 && response.data.result) {
      const responsedChildren : SanityElement[] = response.data.result[0].title[0].children;
      content = responsedChildren
        .map((child) => (child.marks?.[0] ? `<strong>${child.text}</strong>` : child.text))
        .join('');
    } else {
      console.error('Error during schema download process');
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log('Unexpected error', error);
    }
  }
  return content;
}
