export interface CardType {
    title: string;
    content: string;
    image: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
    altText: string;
  }
