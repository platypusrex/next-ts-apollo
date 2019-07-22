import React from 'react';
import NextApp, { AppProps, Container } from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';
import { withApollo, WithApolloProps } from '@containers/withApollo';
import { styledTheme } from '@styled/theme';

class App extends NextApp<AppProps & WithApolloProps> {
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

export default withApollo(App);