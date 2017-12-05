import React from "react"
import {Row, Col} from "antd"

class NewsFooter extends React.Component{
    constructor(props){
        super(props )
    }

    render(){
        return (
            <div>
                <h3>NewsFooter 底部。。。</h3>
                <Row>
                    <Col span={24}>
                        &copy; 2016 ReactNews. All Rights Reserved
                    </Col>
                </Row>
            </div>
        )
    }
}
export default NewsFooter