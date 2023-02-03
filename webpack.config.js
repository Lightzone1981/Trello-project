const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
// встроенный модуль Node.js для работы с
const path = require('path')

module.exports = {
  // установить контекст что бы не писать каждый раз src/scripts
  context: path.resolve(__dirname, 'src/scripts'),
  // указать исходный  файл
  entry: './index.js',
  // указать куда будет идти сборка
  output: {
    // такая запись более универсальна
    filename: 'index.js',
    // папка где будет лежать сборка
    path: path.resolve(__dirname, 'dist'),
    // очищаем папку каждый раз после сборки
    clean: true
  },
  // пакет для запуска локального сервера в режиме разработки
  devServer: {
    port: 8080,
    hot: true,
    open: true
  },
  // плагины для оптимизации css js файлов
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()]
  },
  // плагины
  plugins: [
    // для html
    new HtmlWebpackPlugin({
      // указываем путь до нужного html файла
      template: path.resolve(__dirname, 'public/index.html')
    }),
    // плагин для того что бы css собирался в отдельный файл
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      // loader для того что бы сборщик мог работать с scss
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  }
}
