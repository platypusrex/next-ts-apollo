const withGraphql = require('next-plugin-graphql');

module.exports = withGraphql({
  webpack(config) {
    return config;
  }
});