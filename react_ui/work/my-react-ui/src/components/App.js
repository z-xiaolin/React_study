import React from "react"
import {Button,Pagination} from "antd"
// 引入 css 样式
import "antd/dist/antd.css"

class App extends React.Component{

    render(){
        return (
            <div>
                <div>
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                    <br/><br/>
                    <Pagination defaultCurrent={6} total={500} />
                </div>
            </div>
        )
    }
}
export default App