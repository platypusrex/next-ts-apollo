import React from 'react';
import { ThemeProvider } from 'styled-components';
import { styledTheme } from '@styled/theme';

interface StyledThemeProviderProps {
  children: React.ReactElement;
}

export const StyledThemeProvider: React.FC<StyledThemeProviderProps> = ({ children }) => (
  <ThemeProvider theme={styledTheme}>{children}</ThemeProvider>
);