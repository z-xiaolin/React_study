/* 应用主 JS文件 */
// 引入 React react-dom 包
import React from "react"
import ReactDOM from "react-dom"

// 引入 App 组件 JS文件
import App from "./App"

// 引入 CSS 文件 --- 一般放在最后引入
import "../css/test.css"

// 渲染组件
ReactDOM.render(<App />, document.getElementById('example'));