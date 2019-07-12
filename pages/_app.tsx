import React from 'react';
import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo-hooks';
import { withApollo } from '../shared/apollo/withApollo';

// tslint:disable-next-line no-any
class MyApp extends App<any> {
  render () {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);