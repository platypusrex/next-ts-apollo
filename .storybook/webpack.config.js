const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push(
    {
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'graphql-tag/loader',
          options: {
            configFileName: './.storybook/tsconfig.json'
          }
        }
      ]
    },
    {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('awesome-typescript-loader'),
          options: {
            configFileName: './.storybook/tsconfig.json'
          }
        },
      ]
    }
  );

  config.resolve.alias = {
    "@pages": path.resolve(__dirname, '../pages'),
    "@apollo": path.resolve(__dirname, '../src/apollo'),
    "@components": path.resolve(__dirname, '../src/components'),
    "@constants": path.resolve(__dirname, '../src/constants'),
    "@containers": path.resolve(__dirname, '../src/containers'),
    "@hooks": path.resolve(__dirname, '../src/hooks'),
    "@styled": path.resolve(__dirname, '../src/styled'),
    "@typings": path.resolve(__dirname, '../src/typings'),
    "@utils": path.resolve(__dirname, '../src/utils'),
  };

  config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx', '.graphql', '.gql', );

  return config;
};