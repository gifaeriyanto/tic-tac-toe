const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const nextConfig = {
  webpack(config, options) {
    // Do not run type checking twice:
    if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin());

    config.resolve.modules.unshift(__dirname);

    return config;
  },
  target: 'serverless',
};

module.exports = withSass(withCSS(nextConfig));
