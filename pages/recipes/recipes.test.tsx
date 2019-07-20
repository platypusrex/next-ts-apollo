import React from 'react';
import { ApolloErrorProvider, ApolloLoadingProvider } from 'apollo-mocked';
import { cleanup, render } from '@testing-library/react';
import Recipes from './';

afterEach(cleanup);

describe('Recipes', () => {
  it('should render loading component if query is in flight', () => {
    const { debug } = render(
      <ApolloLoadingProvider>
        <Recipes/>
      </ApolloLoadingProvider>
    );

    debug();
  });

  it('should render error component if query fails', async () => {
    const errorMessage = 'Failed to fetch recipes.';

    const { debug } = render((
      <ApolloErrorProvider errorMessages={errorMessage}>
        <Recipes/>
      </ApolloErrorProvider>
    ));

    await Promise.resolve();
    debug();
  });
});