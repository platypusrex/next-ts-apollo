import React from 'react';
import IntrospectionResult from '../../schema.json';
import TypeDefs from '../../schema.graphql';
import { StyledThemeProvider } from '@styled/StyledThemeProvider';
import {
  ApolloErrorProvider,
  ApolloErrorProviderProps,
  ApolloLoadingProvider,
  ApolloMockedProvider
} from 'apollo-mocked';
import { User, UserDetail } from '@typings/generated';

export const introspectionResult = IntrospectionResult;
export const typeDefs = TypeDefs;

export const StyledMockedProvider: React.FC<{}> = ({ children }) => (
  <StyledThemeProvider>
    <ApolloMockedProvider
      introspectionResult={introspectionResult}
      mocks={apolloMocks}
    >
      {children}
    </ApolloMockedProvider>
  </StyledThemeProvider>
);

export const StyledErrorProvider: React.FC<ApolloErrorProviderProps> = ({ children, ...errorProviderProps }) => (
  <StyledThemeProvider>
    <ApolloErrorProvider {...errorProviderProps}>
      {children}
    </ApolloErrorProvider>
  </StyledThemeProvider>
);

export const StyledLoadingProvider: React.FC<{}> = ({ children }) => (
  <StyledThemeProvider>
    <ApolloLoadingProvider>
      {children}
    </ApolloLoadingProvider>
  </StyledThemeProvider>
);

export const mockUsers: { [key: string]: Omit<User, '__typename'> } = {
  user1: { id: 1, firstName: 'Ricky', lastName: 'Bobby', email: 'rbobby@email.com' },
  user2: { id: 2, firstName: 'Brennan', lastName: 'Huff', email: 'bhuff@email.com' },
};

export const mockUserDetail: Omit<UserDetail, '__typename'> = {
  ...mockUsers.user1,
  favoriteColors: [ 'blue' ], quote: 'Pink is the new blue'
};

export const apolloMocks = {
  Query: () => ({
    getAllUsers: () => Object.keys(mockUsers).map(key => mockUsers[key]),
    getUserById: () => mockUserDetail,
  }),
};