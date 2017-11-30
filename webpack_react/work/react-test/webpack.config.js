/*
 // webpack 的配置
 // 引入 path 包
 const path = require('path') //path内置的模块，用来设置路径。

 module.exports = {
 entry: "./src/js/main.js",
 output:{
 filename:"bundle.js",
 path:path.resolve(__dirname,"dist")
 },
 module:{
 rules:[
 // 处理CSS
 {
 test:/\.css$/,
 use:['style-loader',
 'css-loader']
 },
 // babel 处理 js
 {
 test:/\.js$/,
 exclude:/node_modules/, // 排除 node_modules 文件夹
 use:["babel-loader"]
 }
 ]

 },
 // 利用 webpack-dev-server 实现 热加载
 devServer:{
 contentBase:"./",
 hot:true
 }
 }*/

const path = require('path'); //path内置的模块，用来设置路径。

module.exports = {
    entry: './src/js/main.js',   // 入口文件
    output: {                     // 输出配置
        filename: 'bundle.js',      // 输出文件名
        path: path.resolve(__dirname, 'dist')   //输出文件路径配置
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            //babel处理js
            {
                test: /\.js$/,
                exclude: /node_modules/, //排除此文件夹
                use: [
                    'babel-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: './', //内置服务器动态加载页面index.html 所在的目录
        hot: true
    }
};