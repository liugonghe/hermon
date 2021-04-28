/*
 * @Author: your name
 * @Date: 2021-04-28 21:59:03
 * @LastEditTime: 2021-04-28 22:03:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /pokemon-demo/setupProxy.js
 */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(createProxyMiddleware('/pokemon', {
    target: 'http://pokeapi.co/api/v2',
    secure: false,
    changeOrigin: true,
  }));
}
