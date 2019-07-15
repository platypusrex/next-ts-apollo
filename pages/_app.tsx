import React from 'react';
import App, { AppProps, Container } from 'next/app';
import { ApolloProvider } from 'react-apollo-hooks';
import { ThemeProvider } from 'styled-components';
import { withApollo, WithApolloProps } from '@apollo/withApollo';
import { styledTheme } from '@styled/theme';

class MyApp extends App<AppProps & WithApolloProps> {
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