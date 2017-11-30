/* 应用主js 文件 */
// 引入外部模块与组件
import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import "./components/App.css"
import "./index.css"

// 渲染组件
ReactDOM.render(<App />, document.getElementById('example'));