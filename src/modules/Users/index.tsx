import React from 'react';
import { Link } from '@components/Link';
import { userAllUsers } from '@hooks/user/useAllUsers';
import styled from 'styled-components';

const List = styled.ul`
  max-width: 400px;
  padding: 12px;
  background: ${({ theme }) => theme.colors.secondary};
`;

const ListItem = styled.li`
  padding: 20px;
  list-style: none;
  background: #fff;
  
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  
  h4 {
    margin: 0;
    text-transform: uppercase;
  }
`;

export const Users: React.FC<{}> = () => {
  const { users, loading, error } = userAllUsers();

  if (error) {
    return <p>{error.message}</p>;
  }

  if (loading) {
    return <p>loading...</p>;
  }

  if (!users.length) {
    return <p>Empty List</p>;
  }

  return (
    <List>
      {users.map(user => (
        <ListItem key={user.id}>
          <Link href="/users/[id]" as={`users/${user.id}`}>
            <h4>{user.firstName} {user.lastName}</h4>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};