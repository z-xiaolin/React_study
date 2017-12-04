import React from "react"

class Search extends React.Component{
    constructor(props){
        super(props )
    }

    // 定义 搜索 的方法
    searchUsers = () => {
        // 收集数据
        let users = this.refs.users.value
        // 将数据发送给 App组件
        this.props.Search(users)
    }
    render(){
        return (
            <div>
                <input ref='users' type="text" placeholder="enter the name you search"/>
                <button onClick={this.searchUsers}>Search</button>
            </div>
        )
    }
}
export default Search