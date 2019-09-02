import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { styledTheme } from '@styled/theme';
import { Link, LinkProps } from './';

const LinkWithTheme: React.FC<LinkProps> = ({ size }) => (
  <ThemeProvider theme={styledTheme}>
    <Link href="/" size={size}>
      Link Text
    </Link>
  </ThemeProvider>
);

const defaultProps: LinkProps = { href: '/', };
const textMatcher = 'Link Text';

describe('Link', () => {
  const { getByText } = render(
    <LinkWithTheme {...defaultProps}/>
  );
  const anchorNode = getByText(textMatcher);

  it('Should render with the correct text', () => {
    expect(anchorNode).toHaveTextContent(textMatcher);
  });

  it('should render with correct href attribute', () => {
    expect(anchorNode).toHaveAttribute('href');
  });
});
