import React from 'react';
import { storiesOf } from '@storybook/react';
import { ApolloLoadingProvider, ApolloErrorProvider, ApolloMockedProvider } from 'apollo-mocked';
import { apolloMocks, introspectionResult } from '@utils/mockUtils';
import { UserDetail } from './';

const usersStories = storiesOf('UserDetail', module);

usersStories.add('loading', () => (
  <ApolloLoadingProvider>
    <UserDetail userId={1}/>
  </ApolloLoadingProvider>
));

usersStories.add('error', () => (
  <ApolloErrorProvider>
    <UserDetail userId={1}/>
  </ApolloErrorProvider>
));

usersStories.add('data', () => (
  <ApolloMockedProvider
    introspectionResult={introspectionResult}
    mocks={apolloMocks}
  >
    <UserDetail userId={1}/>
  </ApolloMockedProvider>
));