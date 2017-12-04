import React from "react"
// 引入 antd 组件库中的 组件
import {Button,Pagination} from "antd"

// 引入 css 样式
// import "antd/dist/antd.css"
/* 实现 按需加载(css/js)
 * 使用 eject 命令将所有内建的配置暴露出来
    npm run eject
 * 下载 babel-plugin-import (用于按需加载组件代码和样式的 babel 插件)
    npm install babel-plugin-import --save-dev
 * 修改配置: config/webpack.config.dev.js
 *  babel-loader /  options:
      "plugins": [
         ["import", { libraryName: "antd", style: "css" }] // `style: true` 会加载 less 文件
       ],
 */
class App extends React.Component{

    render(){
        return (
            <div>
                <div>
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                    <br/><br/>
                    <Pagination defaultCurrent={6} total={500} />
                </div>
            </div>
        )
    }
}
export default App