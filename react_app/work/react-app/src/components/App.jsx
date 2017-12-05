import React from "react"
import {Link} from "react-router"
import NewsHeader from "./news_header"
import NewsFooter from "./news_footer"

class App extends React.Component{
    render(){
        return (
            <div>
                <NewsHeader />

                <p><Link to="/NewsDetail/11">新闻111.。</Link></p>
                <p><Link to="/NewsDetail/22">新闻222.。</Link></p>
                <p><Link to="/UserCenter">用户中心.。</Link></p>

                {this.props.children}
                <br/>
                <NewsFooter/>
            </div>
        )
    }
}
export default App