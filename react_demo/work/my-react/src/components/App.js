import React from "react"
// 引入图片
import logo from "./logo.svg"
/* 定义组件 */
class App extends React.Component{
    render(){
        return (
            <div className="App">
                <div className="App-header">
                    <img className="App-logo" src={logo} />
                    <h2 className="App-title">Hello - React!</h2>
                </div>
                <p className="App-intro">hello ant-design of react!</p>
                <h2 className="Zyw">张永旺是二哈！！！</h2>
            </div>
        )
    }
}
/* 暴露 组件 */
export default App