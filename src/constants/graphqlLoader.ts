import { DocumentNode } from 'graphql';
import AllUsersQuery from '../graphql/user/allUsersQuery.graphql';
import UserByIdQuery from '../graphql/user/userByIdQuery.graphql';

export const allUsersQuery: DocumentNode = AllUsersQuery;
export const userByIdQuery: DocumentNode = UserByIdQuery;
