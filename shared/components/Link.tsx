import React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import styled from 'styled-components';

const linkSize = {
  sm: '12px',
  default: '14px',
  large: '16px',
};

const StyledLink = styled('a')<{ size?: LinkSize }>`
  font-size: ${({ size }) => size ? linkSize[size] : linkSize.default};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary};
  
  &:hover {
    text-decoration: underline;
  }
`;

type LinkSize = 'sm' | 'default' | 'large';

interface LinkProps extends NextLinkProps {
  size?: LinkSize;
}

export const Link: React.FC<LinkProps> = ({ size, children, ...nextLinkProps }) => (
  <NextLink {...nextLinkProps}>
    <StyledLink size={size}>
      {children}
    </StyledLink>
  </NextLink>
);