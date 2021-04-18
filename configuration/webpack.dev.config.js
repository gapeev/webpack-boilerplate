/* eslint-disable-next-line import/no-extraneous-dependencies */
import { merge } from 'webpack-merge';
import webpackConfiguration from '../webpack.config.js';
import environment from './environment.js';

export default merge(webpackConfiguration, {
  mode: 'development',
  devtool: 'eval-source-map',

  devServer: {
    contentBase: environment.paths.output,
    watchContentBase: true,
    publicPath: '/',
    open: true,
    historyApiFallback: true,
    compress: true,
    overlay: true,
    hot: false,
    watchOptions: {
      poll: 300,
    },
    ...environment.server,
  },

  watchOptions: {
    aggregateTimeout: 300,
    poll: 300,
    ignored: /node_modules/,
  },
});
