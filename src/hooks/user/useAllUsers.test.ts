import { renderHook } from '@testing-library/react-hooks';
import { userAllUsers } from './useAllUsers';
import {
  getAllUsersResult,
  StyledErrorProvider,
  StyledMockedProvider,
  StyledLoadingProvider
} from '@utils/mockUtils';

describe('useAllUsers', () => {
  it('to be loading data', () => {
    const { result } = renderHook(() => userAllUsers(), {
      wrapper: StyledLoadingProvider
    });

    expect(result.current.loading).toBe(true);
  });

  it('to throw an error', async () => {
    const { result, waitForNextUpdate } = renderHook(() => userAllUsers(), {
      wrapper: StyledErrorProvider
    });

    await waitForNextUpdate();

    const errorMessage =
      result.current.error &&
      result.current.error.message;

    expect(errorMessage).toEqual('GraphQL error: Unspecified error from ErrorProvider.');
  });

  it('to resolve a list of users', async () => {
    const { result, waitForNextUpdate } = renderHook(() => userAllUsers(), {
      wrapper: StyledMockedProvider
    });

    await waitForNextUpdate();

    expect(result.current.users).toEqual(getAllUsersResult);
  });
});
