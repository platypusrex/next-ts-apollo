import { useQuery } from '@apollo/react-hooks';
import { QueryResult } from '@apollo/react-common';
import { allUsersQuery } from '@constants/graphqlLoader';
import { AllUsersQuery, User } from '@typings/generated';

type AllUsersQueryResult = Omit<QueryResult<AllUsersQuery, {}>, 'data'>;
type UseAllUsers = () => AllUsersQueryResult & {
  users: User[];
};

export const userAllUsers: UseAllUsers = () => {
  const { data, ...rest } = useQuery<AllUsersQuery>(allUsersQuery);

  const users =
    data &&
    data.getAllUsers || [];

  return { users, ...rest };
};