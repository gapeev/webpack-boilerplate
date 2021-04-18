/* eslint-disable-next-line import/no-extraneous-dependencies */
import { merge } from 'webpack-merge';
import webpackConfiguration from '../webpack.config.js';

export default merge(webpackConfiguration, {
  mode: 'production',
  devtool: false,
});
