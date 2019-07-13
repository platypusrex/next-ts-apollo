import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { styledTheme } from '../src/styled/theme.ts';
import { ThemeProvider } from 'styled-components';

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /\.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator((story) => (
  <ThemeProvider theme={styledTheme}>
    {story(styledTheme)}
  </ThemeProvider>
));

configure(loadStories, module);
