import React from 'react';
import { storiesOf } from '@storybook/react';
import { ApolloLoadingProvider, ApolloErrorProvider, ApolloMockedProvider } from 'apollo-mocked';
import { apolloMocks, introspectionResult } from '@utils/mockUtils';
import { Users } from './';

const usersStories = storiesOf('Users', module);

usersStories.add('loading', () => (
  <ApolloLoadingProvider>
    <Users/>
  </ApolloLoadingProvider>
));

usersStories.add('error', () => (
  <ApolloErrorProvider>
    <Users/>
  </ApolloErrorProvider>
));

usersStories.add('data', () => (
  <ApolloMockedProvider
    introspectionResult={introspectionResult}
    mocks={apolloMocks}
  >
    <Users/>
  </ApolloMockedProvider>
));