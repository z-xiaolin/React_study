import React from "react"
import axios from "axios"

class List extends React.Component{
    constructor(props){
        super(props )
        // 初始化状态
        this.state = {
            firstView:true,
            loading:false,
            users: null,
            error:null
        }
    }
    // 组件将要接收新的 props数据
    componentWillReceiveProps(nextProps){
        console.log(nextProps); // 对象
        this.setState({
            firstView:false,
            loading:true
        })

        // 发送 AJAX 请求 获取用户数据列表
        let url = `https://api.github.com/search/users?q=${nextProps.searchName}`
        axios.get(url)
            .then((response)=>{
                console.log(response.data.items); // 数组
                let users = response.data.items
                this.setState({
                    users,
                    loading:false
                })
            })
            .catch( error => {
                console.log(error.message);
                this.setState({
                    error:error,
                    loading:false
                })
            })
    }

    render(){
        let {firstView,loading,users,error} = this.state
        if(firstView){
            return <h2>Enter name to search</h2>
        } else if(loading){
            return <h2>Loading......</h2>
        } else if(users){
            return (
                <div className="row">
                    {
                        users.map((item,index) => {
                            return (
                                <div className="card" key={index}>
                                    <a href={item.html_url} target="_blank">
                                        <img src={item.avatar_url} style={{width: '100px'}}/>
                                    </a>
                                    <p className="card-text">{item.login}</p>
                                </div>
                            )
                        })
                    }
                </div>
            )
        } else {
            return <h3>暂时没有匹配到用户，请重新匹配。</h3>
        }
    }
}
export default List