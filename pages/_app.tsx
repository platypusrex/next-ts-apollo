import React from 'react';
import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo-hooks';
import { ThemeProvider } from 'styled-components';
import { withApollo } from '@apollo/withApollo';
import { styledTheme } from '@styled/theme';

// tslint:disable-next-line no-any
class MyApp extends App<any> {
  render () {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={styledTheme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);