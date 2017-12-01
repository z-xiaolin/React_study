import React from "react"

class Add extends React.Component{

    // 定义 AddComment 的回调函数
    AddComment = () => {
        // 收集数据
        let username = this.refs.username.value
        let comment = this.refs.comment.value
        // 判断内容是否合法
        if(!username || !comment){
            alert("请输入完整内容！")
            return
        }

        // 整理数据
        let obj = {username,comment}

        // 将数据交给 App 组件
        this.props.add(obj)

        // 清空内容
        this.refs.username.value = ""
        this.refs.comment.value = ""
    }

    render(){
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input ref="username" autoFocus="autoFocus" type="text" className="form-control" placeholder="用户名" />
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea ref="comment" className="form-control" rows="6" placeholder="评论内容"></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button onClick={this.AddComment} type="button" className="btn btn-default pull-right">提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Add