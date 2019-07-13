import { CustomLinkProps } from './';
import styled from 'styled-components';

export const StyledLink = styled('a')<CustomLinkProps>`
  font-size: ${({ size, theme }) => size ? theme.font.size[size] : theme.font.size.default};
  color: ${({ type, theme }) => type ? theme.colors[type] : theme.colors.main};
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;