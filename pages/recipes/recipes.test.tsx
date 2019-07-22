import React from 'react';
import { ApolloErrorProvider, ApolloLoadingProvider } from 'apollo-mocked';
import { cleanup, render, waitForElement } from '@testing-library/react';
import Recipes from './';

describe('Recipes', () => {
  afterEach(cleanup);

  it('should render loading component', async () => {
    const loadingText = 'loading...';

    const { getByText } = render(
      <ApolloLoadingProvider>
        <Recipes/>
      </ApolloLoadingProvider>
    );

    const node = await waitForElement(() => getByText(loadingText));
    expect(node.innerHTML).toEqual(loadingText);
  });

  it('should render error component', async () => {
    const errorMessage = 'Failed to fetch recipes.';
    const errorRes = `GraphQL error: ${errorMessage}`;

    const { getByText } = render((
      <ApolloErrorProvider errorMessages={errorMessage}>
        <Recipes/>
      </ApolloErrorProvider>
    ));

    const node = await waitForElement(() => getByText(errorRes), {
      timeout: 1000
    });

    expect(node.innerHTML).toEqual(errorRes);
  });
});