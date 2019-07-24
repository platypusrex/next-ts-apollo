import React from 'react';
import { Layout } from '@components/Layout';
import { Link } from '@components/Link';
import { Users } from '@modules/Users';
import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

export const PageTitle = styled.h1`
  margin: 0 20px 0 0;
  line-height: 42px;
`;

const UsersPage: React.FC<{}> = () => {
  return (
    <Layout title="Recipes">
      <TitleWrapper>
        <PageTitle>Users</PageTitle>
      </TitleWrapper>

      <Users/>

      <Link href="/" size="lg" title="Home link">
        Go home
      </Link>
    </Layout>
  );
};

export default UsersPage;