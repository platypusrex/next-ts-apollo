import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  padding: 20px;
`;

interface Props {
  title?: string;
}

export const Layout: React.FC<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <LayoutWrapper>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{' '}
          |{' '}
          <Link href="/users">
            <a>Users</a>
          </Link>
        </nav>
      </header>

      {children}

      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </LayoutWrapper>
  </React.Fragment>
);