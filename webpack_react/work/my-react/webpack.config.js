const path = require("path")
console.log(path);

module.exports = {
    entry:"./src/js/main.js",
    output:{
        filename:"bundle.js",
        path: path.resolve(__dirname,"dist")
    },
    module:{
        rules:[
            // 处理 CSS
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            },
            // babel 处理 js
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:["babel-loader"]
            }
        ]
    },

    // 配置webpack-dev-server
    devServer:{
        contentBase: './',//内置服务器动态加载页面index.html 所在的目录
    }
}