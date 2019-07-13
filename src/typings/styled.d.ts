import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
    }

    font: {
      size: {
        sm: string;
        default: string;
        lg: string;
      }
    }
  }
}