import React from "react"
import PubSub from "pubsub-js"

class Item extends React.Component{
    
    // 定义 delComment 删除函数
    delComment =() => {
        // 将 index 值 交给 App组件
        // 删除之前的提示
        if(window.confirm(`确定删除 ${this.props.comment.username} 的评论吗？`)){
            // 方法一：函数实参形式
            /*this.props.del(this.props.index) */

            // 方法二：PubSub 库 实现 -- 发送数据的是发布方 -- 发布消息
            PubSub.publish("message",this.props.index)
        }
    }

    render(){
        // 得到 List传来的 index 值
        /*console.log(this.props.key); // undefined */
        console.log(this.props.index);

        let {comment} = this.props
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a onClick={this.delComment} href="javascript:;">删除</a>
                </div>
                <p clas sName="user"><span >{comment.username}</span><span> 说: </span></p>
                <p className="centence">{comment.comment}</p>
            </li>
        )
    }
}
export default Item