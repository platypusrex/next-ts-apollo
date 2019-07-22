import React from 'react';
import { storiesOf } from '@storybook/react';
import { ApolloLoadingProvider, ApolloErrorProvider, ApolloMockedProvider } from 'apollo-mocked';
import { apolloMocks, typeDefs } from '@utils/apolloMocks';
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
  <ApolloMockedProvider
    typeDefs={typeDefs}
    mocks={apolloMocks}
  >
    <Recipes/>
  </ApolloMockedProvider>
));