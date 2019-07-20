import React from 'react';
import { storiesOf } from '@storybook/react';
import { ApolloLoadingProvider, ApolloErrorProvider, ApolloMockingProvider } from 'apollo-mocked';
import { apolloMocks, introspectionResult } from '@utils/apolloMocks';
import Recipes from './';

const recipesStories = storiesOf('Recipes', module);

recipesStories.add('loading', () => (
  <ApolloLoadingProvider>
    <Recipes/>
  </ApolloLoadingProvider>
));

recipesStories.add('error', () => (
  <ApolloErrorProvider>
    <Recipes/>
  </ApolloErrorProvider>
));

recipesStories.add('data', () => (
  <ApolloMockingProvider
    introspectionResult={introspectionResult}
    mocks={apolloMocks}
  >
    <Recipes/>
  </ApolloMockingProvider>
));