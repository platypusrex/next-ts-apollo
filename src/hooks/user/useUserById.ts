import { useQuery } from '@apollo/react-hooks';
import { QueryResult } from '@apollo/react-common';
import { userByIdQuery } from '@constants/graphqlLoader';
import { UserByIdQuery, UserByIdQueryVariables, UserDetail } from '@typings/generated';

type UserByIdResult = Omit<QueryResult<UserByIdQuery, UserByIdQueryVariables>, 'data'>;
type UseUserById = (userId: number | string) => UserByIdResult & {
  user?: UserDetail;
};

export const useUserById: UseUserById = (userId) => {
  const id = typeof userId === 'string' ? Number(userId) : userId;

  const { data, ...rest } = useQuery<UserByIdQuery, UserByIdQueryVariables>(userByIdQuery, {
    variables: { userId: id },
  });

  const user =
    data &&
    data.getUserById;

  return { user, ...rest };
};
