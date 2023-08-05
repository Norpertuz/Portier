export interface SanityElement {
    marks: 'strong',
    text: string,
    _type: string,
    _key: string,
}

export interface SanityContent {
    style: string,
    children: SanityElement[],
}
export interface SanityResult {
    content: string,
    title: SanityContent[],
}

export interface SanityApiResponse {
    query: string,
    result: SanityResult[],
}
