import React,{Component} from "react"
import Search from "./Search"
import List from "./List"

class App extends Component{
    constructor(props){
        super(props )
        // 初始化状态
        this.state = {
            searchUsers:null
        }
    }
    // 定义 搜索方法
    Search = (users)=> {
        this.setState({searchUsers:users})
    }

    render(){
        return (
            <div className="container">
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>

                    <Search Search={this.Search}/>
                </section>

                <List searchName={this.state.searchUsers}/>
            </div>
        )
    }
}
export default App