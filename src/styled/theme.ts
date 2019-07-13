import { DefaultTheme } from 'styled-components';

export const themeColors = {
  main: 'cornflowerblue',
  secondary: 'darkseagreen',
};

export const themeFont = {
  size: {
    sm: '12px',
    default: '14px',
    lg: '16px',
  },
};

const styledTheme: DefaultTheme = {
  colors: themeColors,
  font: themeFont,
};

export { styledTheme };