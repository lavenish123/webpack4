const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin} = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ProdImagesPath = 'file-loader?name=[name].[ext]&outputPath=../assets/images/&publicPath=assets/images/'


var isProd = process.env.NODE_ENV === 'production' //true or false


var DevImagesPath = 'file-loader?name=[name].[ext]&outputPath=images/&publicPath=images/';
var ProdFilePathThank = './../thank-you.html';
var DevFilePathThank = 'thank-you.html';






module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'js/bundle.[contenthash].js',
    path: path.resolve(__dirname, 'assets'),
    publicPath: 'assets/'
  },
   mode: 'production',
  module: {

    rules: [{
          test: /\.(gif|png|jpe?g|svg|jpg|webp)$/i,
          use: [ProdImagesPath,
            'image-webpack-loader'
          ]
        },
        {
          test: /\.(ttf|svg|eot)$/i,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          }, ],
        },
        {
        test: /\.css$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['transform-class-properties']
          }
        }
      } /*  babel-loader  */
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({   /*Make cssfile style.css in assets folder*/
      filename: 'css/style.[contenthash].css',
    }),
    new CleanWebpackPlugin({ 
    cleanOnceBeforeBuildPatterns: ['**/*', path.join(process.cwd(), 'index.html*'),], 
     /*clean any[foldername is = staticFiles] folder*/  }),  /*clean assets folder*/
    new HtmlWebpackPlugin({
      title: 'My App',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      },
      hash: false,
      filename: './../index.html',
      template: 'src/index.html'
    }),


    new HtmlWebpackPlugin({
      title: 'Thank-you',
      minify: {
          collapseWhitespace: true,
          removeComments: true
      },
      hash: true,
      //excludeChunks: ['app'],
      chunks: ['app'],
      filename: isProd ? ProdFilePathThank : DevFilePathThank,
      template: './src/thank-you.html'
  }),



  ]
}
