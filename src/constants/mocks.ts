import { User, UserDetail } from '@typings/generated';

export const mockUsers: { [key: string]: User} = {
  user1: { id: 1, firstName: 'Ricky', lastName: 'Bobby', email: 'rbobby@email.com', __typename: 'User' },
  user2: { id: 2, firstName: 'Brennan', lastName: 'Huff', email: 'bhuff@email.com',  __typename: 'User' },
};

export const mockUserDetail: UserDetail = {
  ...mockUsers.user1,
  favoriteColors: [ 'blue' ], quote: 'Pink is the new blue'
};

export const getAllUsersResult: User[] = Object.keys(mockUsers).map(key => mockUsers[key]);
