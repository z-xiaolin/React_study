import React,{Component} from "react"
import {Link} from "react-router"

class Repos extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            repos:[
                {name : 'google', repo : 'Angular'},
                {name : 'facebook', repo : 'yarn'},
                {name : 'facebook', repo : 'React'},
                {name : 'antd', repo : 'antd'},
            ]
        }
    }

    render(){
        let {repos} = this.state
        return (
            <div>
                <h3>Repos组件。。。。</h3>
                <ul>
                    {
                        repos.map((item,index) => {
                            return <li key={index}><Link activeClassName="repos" to={`/repos/${item.name}/${item.repo}`}>{item.repo}</Link></li>
                        })
                    }
                </ul>
                {this.props.children}
            </div>
        )
    }
}
export default Repos