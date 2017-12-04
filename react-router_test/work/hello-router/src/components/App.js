import React,{Component} from "react"
// 引入 Link 组件
import {Link} from "react-router"
import "./App.css"

class App extends React.Component{

    render(){
        return (
            <div>
                <h2>App组件。。。。</h2>
                <ul>
                    {/* 通过 link 组件来实现 a 标签的链接功能 */}
                    <li><Link to="/about" activeClassName="active">About-Route</Link></li>
                    <li><Link to="/repos" activeClassName="active">Repos-Route</Link></li>
                </ul>
                {/* 显示当前子路由的组件内容 */}
                {this.props.children}
            </div>
        )
    }
}
export default App