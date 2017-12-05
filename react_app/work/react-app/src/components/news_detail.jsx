import React from "react"
import {Router, Route, hashHistory, IndexRoute} from "react-router"

class NewsDetail extends React.Component{

    render(){
        return (
            <div>
                NewsDetail 组件内容。。。{this.props.params.NewsId}
            </div>
        )
    }
}
export default NewsDetail