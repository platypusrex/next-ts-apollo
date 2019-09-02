import React from 'react';
import { cleanup, render, waitForElement } from '@testing-library/react';
import { UserDetail } from './';
import {
  StyledErrorProvider,
  StyledLoadingProvider,
  StyledMockedProvider,
} from '@utils/mockUtils';

describe('UserDetail', () => {
  afterEach(cleanup);

  it('should render loading component', async () => {
    const loadingText = 'loading...';

    const { getByText } = render(
      <StyledLoadingProvider>
        <UserDetail userId={1}/>
      </StyledLoadingProvider>
    );

    const node = await waitForElement(() => getByText(loadingText));
    expect(node).toHaveTextContent(loadingText);
  });

  it('should render error component', async () => {
    const errorMessage = 'Failed to fetch users.';
    const errorRes = `GraphQL error: ${errorMessage}`;

    const { getByText } = render((
      <StyledErrorProvider errorMessages={errorMessage}>
        <UserDetail userId={1}/>
      </StyledErrorProvider>
    ));

    const node = await waitForElement(() => getByText(errorRes));
    expect(node).toHaveTextContent(errorRes);
  });

  it('should render a list of users', async () => {
    const { getByText } = render(
      <StyledMockedProvider>
        <UserDetail userId={1}/>
      </StyledMockedProvider>
    );

    const node = await waitForElement(() => getByText('Ricky Bobby'));

    expect(node).toHaveTextContent('Ricky Bobby');
  });
});
