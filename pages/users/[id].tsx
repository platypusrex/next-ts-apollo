import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from '@components/Layout';
import { UserDetail as UserDetailComponent } from '@modules/UserDetail';

const UserDetail: React.FC<{}> = () => {
  const { query: { id } } = useRouter();
  const userId = Array.isArray(id) ? id[0] : id;

  return (
    <Layout>
      <UserDetailComponent userId={userId}/>
    </Layout>
  );
};

export default UserDetail;