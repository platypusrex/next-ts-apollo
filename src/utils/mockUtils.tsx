import React from 'react';
import IntrospectionResult from '../../schema.json';
import { StyledThemeProvider } from '@styled/StyledThemeProvider';
import {
  ApolloErrorProvider,
  ApolloErrorProviderProps,
  ApolloLoadingProvider,
  ApolloMockedProvider
} from 'apollo-mocked';
import { getAllUsersResult, mockUserDetail } from '@constants/mocks';

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

export const apolloMocks = {
  Query: () => ({
    getAllUsers: () => getAllUsersResult,
    getUserById: () => mockUserDetail,
  }),
};
