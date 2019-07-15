import React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { StyledLink } from './styles';
import { themeColors, themeFont } from '@styled/theme';

export type LinkSize = keyof typeof themeFont.size;
export type LinkType = keyof typeof themeColors;

interface AnchorProps {
  rel?: string;
  target?: string;
  referrerPolicy?: string;
  tabIndex?: number;
  title?: string;
  role?: string;
}

export interface CustomLinkProps extends AnchorProps {
  size?: LinkSize;
  type?: LinkType;
}

export type LinkProps =
  NextLinkProps &
  CustomLinkProps;

export const Link: React.FC<LinkProps> = ({
  size,
  type,
  rel,
  target,
  referrerPolicy,
  tabIndex,
  title,
  role,
  children,
  ...nextLinkProps
}) => (
  <NextLink {...nextLinkProps} passHref={true}>
    <StyledLink
      size={size}
      type={type}
      rel={rel}
      target={target}
      referrerPolicy={referrerPolicy}
      tabIndex={tabIndex}
      title={title}
      role={role}
    >
      {children}
    </StyledLink>
  </NextLink>
);