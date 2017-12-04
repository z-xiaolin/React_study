import React from 'react';
import ReactDOM from 'react-dom';
// 引入 react-router 库
import {Router,Route,hashHistory,IndexRoute} from "react-router"

import App from "./components/App"
import About from "./components/About"
import Repos from "./components/Repos"
import Home from "./components/Home"
import Repo from "./components/Repo"
/*
 *   1、注册路由
 *   2、Router： 路由器组件： 管理路由
 *     * history: 管理路由地址的
 *   3、Route： 注册路由组件
 *     path: 路由路径
 *   4、IndexRoute：默认子路由组件
 *   5、路由路径不确定时，使用 占位符 --  :xxx
 *   6、Link：路由链接组件 - 用来生成a标签的
 *      activeClassName="xxx" -- 用来设置css样式的属性
 * */
// 渲染组件
ReactDOM.render(
    // 路由的使用
    (   // Router 路由器 的设置
        <Router history={hashHistory}>
            {/*Route 路由 的设置 path：设置根路由  component：渲染的主组件 */}
            <Route path="/" component={App}>
                <IndexRoute component={Home}></IndexRoute>
                <Route path="/about" component={About}></Route>
                <Route path="/repos" component={Repos}>
                    {/* 定义 Repo 组件的路由 */}
                    <Route path="/repos/:name/:repo" component={Repo}></Route>
                </Route>
            </Route>
        </Router>
    ),
    document.getElementById('root')
);