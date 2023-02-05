module.exports = {
  basePath: '/omorashi-stories',
  assetPrefix: '/omorashi-stories/',
  trailingSlash: true,
    webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': __dirname,
    };
    return config;
  }
};