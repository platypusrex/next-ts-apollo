import React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { StyledLink } from './styles';
import { themeColors, themeFont } from '@styled/theme';

export type LinkSize = keyof typeof themeFont.size;
export type LinkType = keyof typeof themeColors;

export interface CustomLinkProps {
  size?: LinkSize;
  type?: LinkType;
}

export type LinkProps =
  NextLinkProps &
  CustomLinkProps;

export const Link: React.FC<LinkProps> = ({ size, type, children, ...nextLinkProps }) => (
  <NextLink {...nextLinkProps} passHref={true}>
    <StyledLink size={size} type={type}>
      {children}
    </StyledLink>
  </NextLink>
);