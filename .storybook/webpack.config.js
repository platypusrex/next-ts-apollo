const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
        options: {
          configFileName: './.storybook/tsconfig.json'
        }
      },
    ]
  });

  config.resolve.alias = {
    "@pages": path.resolve(__dirname, '../pages'),
    "@apollo": path.resolve(__dirname, '../src/apollo'),
    "@components": path.resolve(__dirname, '../src/components'),
    "@hooks": path.resolve(__dirname, '../src/hooks'),
    "@styled": path.resolve(__dirname, '../src/styled'),
    "@typings": path.resolve(__dirname, '../src/typings'),
    "@utils": path.resolve(__dirname, '../src/utils'),
  };

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};