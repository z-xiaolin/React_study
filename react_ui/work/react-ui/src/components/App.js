import React,{Component} from "react"
import {Button,Pagination,Steps } from "antd"
// 引入 css样式
import 'antd/dist/antd.css'

const Step = Steps.Step;

class App extends Component{

    render(){
        return (
            <div>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button> <br/><br/>
                <Pagination defaultCurrent={6} total={500} />
                <br/>
                <Steps direction="vertical" size="small" current={1}>
                    <Step title="Finished" description="This is a description." />
                    <Step title="In Progress" description="This is a description." />
                    <Step title="Waiting" description="This is a description." />
                </Steps>
            </div>
        )
    }
}
export default App
