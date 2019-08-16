import React from 'react';
import Head from 'next/head';
import AppComponent, { AppContext, AppProps } from 'next/app';
import ApolloClient from 'apollo-client';
import { getDataFromTree } from '@apollo/react-ssr';
import { initApollo } from '@utils/initApollo';

export type WithApolloProps = {
  apolloClient: ApolloClient<{}>
};

type ApolloProps = AppProps & {
  // tslint:disable-next-line no-any
  apolloState: any;
};

export const withApollo = (App: typeof AppComponent) => {
  return class Apollo extends React.Component<ApolloProps> {
    static displayName = 'withApollo(App)';

    // tslint:disable-next-line no-any
    static async getInitialProps (ctx: AppContext & { AppTree: any }) {
      const { AppTree } = ctx;

      let appProps = {};

      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      const apollo = initApollo();

      if (typeof window === 'undefined') {
        try {
          // Run all GraphQL queries
          await getDataFromTree(<AppTree {...appProps} apolloClient={apollo} />);
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          // tslint:disable-next-line no-console
          console.error('Error while running `getDataFromTree`', error);
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind();
      }

      // Extract query data from the Apollo store
      const apolloState = apollo.cache.extract();

      return { ...appProps, apolloState };
    }

    public apolloClient: ApolloClient<{}>;

    constructor (props: ApolloProps) {
      super(props);
      this.apolloClient = initApollo(props.apolloState);
    }

    render () {
      return <App {...this.props} apolloClient={this.apolloClient} />;
    }
  };
};
