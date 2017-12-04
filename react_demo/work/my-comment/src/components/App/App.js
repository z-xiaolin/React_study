import React from "react"
import PubSub from "pubsub-js"
import Add from "../Add/Add"
import List from "../List/List"

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            comments:[
                {username:"山西人",comment:"我们有煤矿！"},
                {username:"雄县人",comment:"我有两亩地！"}
            ]
        }
    }
    // 定义 add方法 接收数据
    add = (comment) => {
        // 将数据添加到 数组中
        let {comments} = this.state
        // unshift() -- 将数据添加到 数组的最前面
        comments.unshift(comment)
        // 修改状态
        this.setState({comments})
    }
    // 删除 方法一：定义 del 方法 接收 index 值
    /*del = (index) =>{
        let {comments} = this.state
        // 删除 对应的评论
        comments.splice(index,1)
        // 更新状态
        this.setState({comments})
    }*/
    // 删除 方法二：PubSub 库 -- 接收数据的是订阅方
    // 最好放在 组件将要被挂载的函数中
    componentWillMount(){
        PubSub.subscribe("message", (msg,data) => { // 第一个参数是 事件名；第二个是 数据
            /* 注意：回调函数中的this 值需要修改，否则改为 箭头函数 */
            // console.log(msg,data); // message 0
            let {comments} = this.state
            // splice()-- 对数组的 增删改 操作
            comments.splice(data,1)
            this.setState({comments})
        })
    }

    render(){
        let {comments} = this.state
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                   <Add add={this.add}/>
                   <List comments={comments} del={this.del}/>
                </div>
            </div>
        )
    }
}
export default App