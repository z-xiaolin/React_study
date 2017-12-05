import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory, IndexRoute} from "react-router"

import App from "./components/App"
import NewsContainer from "./components/news_container"
import NewsDetail from "./components/news_detail"
import UserCenter from "./components/user_center"

import "./componentCss/pc.css"

ReactDOM.render(
    (
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={NewsContainer}></IndexRoute>
                <Route path="/UserCenter" component={UserCenter}></Route>
                <Route path="/NewsDetail/:NewsId" component={NewsDetail}></Route>
            </Route>
        </Router>
    ),
    document.getElementById('root')
);
