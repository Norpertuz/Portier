import Root from '@app/page';
import { render, screen } from '@testing-library/react';

describe('Root', () => {
  it('renders a heading', () => {
    render(<Root />);

    const heading = screen.getByRole('heading', {
      name: 'Hello world'
    });

    expect(heading).toBeInTheDocument();
  });
});
