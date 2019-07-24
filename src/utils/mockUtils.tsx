import React from 'react';
import IntrospectionResult from '../../schema.json';
import { StyledThemeProvider } from '@styled/StyledThemeProvider';
import {
  ApolloErrorProvider,
  ApolloErrorProviderProps,
  ApolloLoadingProvider,
  ApolloMockedProvider
} from 'apollo-mocked';
import { User, UserDetail } from '@typings/generated';

export const introspectionResult = IntrospectionResult;

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

export const mockUsers: { [key: string]: User} = {
  user1: { id: 1, firstName: 'Ricky', lastName: 'Bobby', email: 'rbobby@email.com', __typename: 'User' },
  user2: { id: 2, firstName: 'Brennan', lastName: 'Huff', email: 'bhuff@email.com',  __typename: 'User' },
};

export const mockUserDetail: UserDetail = {
  ...mockUsers.user1,
  favoriteColors: [ 'blue' ], quote: 'Pink is the new blue'
};

export const getAllUsersResult: User[] = Object.keys(mockUsers).map(key => mockUsers[key]);

export const apolloMocks = {
  Query: () => ({
    getAllUsers: () => getAllUsersResult,
    getUserById: () => mockUserDetail,
  }),
};