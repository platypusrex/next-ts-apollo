import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { Layout } from '../layout/Layout';
import { List } from '../shared/components/List';
import { User } from '../shared/types';
import { findAll } from '../shared/utils/sample-api';

interface Props {
  items: User[];
  pathname: string;
}

const WithInitialProps: NextPage<Props> = ({ items, pathname }) => (
  <Layout title="List Example (as Functional Component) | Next.js + TypeScript Example">
    <h1>List Example (as Function Component)</h1>
    <p>You are currently on: {pathname}</p>
    <List items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

WithInitialProps.getInitialProps = async ({ pathname }) => {
  // Example for including initial props in a Next.js function compnent page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = await findAll();

  return { items, pathname };
};

export default WithInitialProps;
