import path from 'path';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import environment from './configuration/environment.js';

export default {
  entry: {
    app: path.resolve(environment.paths.source, 'js', 'app.js'),
  },
  output: {
    filename: 'js/[name].js',
    path: environment.paths.output,
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.((c|sa|sc)ss)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'autoprefixer',
                ],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
        exclude: [
          /node_modules/,
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                useBuiltIns: 'usage',
                corejs: 3.10,
              }],
            ],
          },
        },
      },
      {
        test: /\.(png|gif|jpe?g|svg)$/,
        type: 'asset',
        generator: {
          filename: 'images/[hash:6][ext][query]',
        },
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: 'asset',
        generator: {
          filename: 'fonts/[hash:6][ext][query]',
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  optimization: {
    minimizer: [
      '...',
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({ template: path.resolve(environment.paths.source, 'index.html') }),
  ],
  target: 'web',
};
