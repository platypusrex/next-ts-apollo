import React from 'react';
import NextApp, { AppProps, Container } from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import { StyledThemeProvider } from '@styled/StyledThemeProvider';
import { withApollo, WithApolloProps } from '@containers/withApollo';
import { GlobalStyle } from '@styled/globalStyle';

class App extends NextApp<AppProps & WithApolloProps> {
  render () {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <Container>
        <GlobalStyle/>
        <ApolloProvider client={apolloClient}>
          <StyledThemeProvider>
            <Component {...pageProps} />
          </StyledThemeProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(App);