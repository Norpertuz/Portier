import { render, waitFor } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Button } from '#components/button';
import { ButtonProps } from '#types/props';

type TestData = {
  [variant in 'initialization' | 'medium' | 'small']: ButtonProps;
};

const testData: TestData = {
  initialization: { children: 'Initialize', url: '/portfolio' },
  medium: { children: 'Medium Button', size: 'md', url: '/' },
  small: { children: 'Small Button', size: 'sm', url: '/about-me' }
};

describe('Button Component', () => {
  it('initialize a component with default props', async () => {
    const { initialization } = testData;
    const { getByTestId } = render(<Button {...initialization} />);
    const defaultButton = getByTestId('button');

    const tree = renderer.create(<Button {...initialization} />).toJSON();

    await waitFor(() => {
      expect(defaultButton).toBeInTheDocument();
      expect(defaultButton).toHaveTextContent(initialization.children);
      expect(defaultButton).toHaveAttribute('class', 'button');
      expect(defaultButton).toHaveAttribute('href', initialization.url);
      expect(tree).toMatchSnapshot();
    });
  });

  it('renders the standard button', async () => {
    const { medium } = testData;
    const { getByTestId } = render(<Button {...medium} />);
    const mediumButton = getByTestId('button');

    const tree = renderer.create(<Button {...medium} />).toJSON();

    await waitFor(() => {
      expect(mediumButton).toBeInTheDocument();
      expect(mediumButton).toHaveAttribute('class', 'button');
      expect(tree).toMatchSnapshot();
    });
  });

  it('renders the smaller button', async () => {
    const { small } = testData;
    const { getByTestId } = render(<Button {...small} />);
    const smallButton = getByTestId('button');

    const tree = renderer.create(<Button {...small} />).toJSON();

    await waitFor(() => {
      expect(smallButton).toBeInTheDocument();
      expect(smallButton).toHaveAttribute('class', 'button--sm');
      expect(tree).toMatchSnapshot();
    });
  });
});
