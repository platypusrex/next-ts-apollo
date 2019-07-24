import React from 'react';
import { cleanup, render, waitForElement } from '@testing-library/react';
import { Users } from './';
import {
  StyledErrorProvider,
  StyledLoadingProvider,
  StyledMockedProvider,
} from '../../utils/mockUtils';

describe('Users', () => {
  afterEach(cleanup);

  it('should render loading component', async () => {
    const loadingText = 'loading...';

    const { getByText } = render(
      <StyledLoadingProvider>
        <Users/>
      </StyledLoadingProvider>
    );

    const node = await waitForElement(() => getByText(loadingText));
    expect(node.innerHTML).toEqual(loadingText);
  });

  it('should render error component', async () => {
    const errorMessage = 'Failed to fetch users.';
    const errorRes = `GraphQL error: ${errorMessage}`;

    const { getByText } = render((
      <StyledErrorProvider errorMessages={errorMessage}>
        <Users/>
      </StyledErrorProvider>
    ));

    const node = await waitForElement(() => getByText(errorRes));
    expect(node.innerHTML).toEqual(errorRes);
  });

  it('should render a list of users', async () => {
    const { getByText } = render(
      <StyledMockedProvider>
        <Users/>
      </StyledMockedProvider>
    );

    const node = await waitForElement(() => getByText('Ricky Bobby'));

    expect(node.innerHTML).toEqual('Ricky Bobby');
  });
});