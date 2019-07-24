import React from 'react'
import { useUserById } from '@hooks/user/useUserById';
import styled from 'styled-components';

const Header = styled.h2`
  margin-bottom: 10px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

interface UserDetailProps {
  userId: number | string;
}

export const UserDetail: React.FC<UserDetailProps> = ({ userId }) => {
  const { user, error, loading } = useUserById(userId);

  if (error) {
    return <p>{error.message}</p>;
  }

  if (loading) {
    return <p>loading...</p>;
  }

  if (!user) {
    return <p>User not found.</p>;
  }

  return (
    <React.Fragment>
      <Header>{user.firstName} {user.lastName}</Header>

      <ContentWrapper>
        <p>User name: {user.firstName} {user.lastName}</p>
        <p>User email: {user.email}</p>
        <p>User quote: {user.quote}</p>
        {user.favoriteColors && (
          <p>
            <span>User favorite colors: </span>
            <span>{user.favoriteColors.join(', ')}</span>
          </p>
        )}
      </ContentWrapper>
    </React.Fragment>
  );
};