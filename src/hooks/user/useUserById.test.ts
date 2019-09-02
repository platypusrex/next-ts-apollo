import { renderHook } from '@testing-library/react-hooks';
import { useUserById } from './useUserById';
import {
  StyledErrorProvider,
  StyledMockedProvider,
  StyledLoadingProvider,
  mockUserDetail
} from '@utils/mockUtils';

describe('useUserById', () => {
  it('to be loading data', () => {
    const { result } = renderHook(() => useUserById(1), {
      wrapper: StyledLoadingProvider
    });

    expect(result.current.loading).toBe(true);
  });

  it('to throw an error', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useUserById(1), {
      wrapper: StyledErrorProvider
    });

    await waitForNextUpdate();

    const errorMessage =
      result.current.error &&
      result.current.error.message;

    expect(errorMessage).toEqual('GraphQL error: Unspecified error from ErrorProvider.');
  });

  it('to resolve a list of users', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useUserById(1), {
      wrapper: StyledMockedProvider
    });

    await waitForNextUpdate();

    expect(result.current.user).toEqual(mockUserDetail);
  });
});
