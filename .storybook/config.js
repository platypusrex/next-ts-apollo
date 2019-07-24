import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { styledTheme } from '../src/styled/theme.ts';
import { ThemeProvider } from 'styled-components';

// automatically import all files ending in *.stories.js
const pages = require.context('../pages', true, /\.stories.tsx$/);
const modules = require.context('../src/modules', true, /\.stories.tsx$/);
const components = require.context('../src/components', true, /\.stories.tsx$/);
const libs = [ pages, modules, components ];

function loadStories() {
  libs.forEach(req => req.keys().forEach(f => req(f)))
}

addDecorator((story) => (
  <ThemeProvider theme={styledTheme}>
    {story(styledTheme)}
  </ThemeProvider>
));

configure(loadStories, module);
