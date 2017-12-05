import React from "react"
import {Row, Col, Carousel,Tabs } from "antd"
const TabPane = Tabs.TabPane;

/*import carousel_1 from "../images/carousel_1.jpg"
import carousel_2 from "../images/carousel_2.jpg"
import carousel_3 from "../images/carousel_3.jpg"
import carousel_4 from "../images/carousel_4.jpg"

import "../componentCss/news_container.css"*/

class NewsContainer extends React.Component{

    render(){
        return (
            <div className="newsContainer">
                news_container 组件。。。
               {/* <Row>
                    <Col span={1}></Col>
                    <Col span={22}>
                         图片轮播
                        <div className="leftContainer1">
                            <Carousel autoplay>
                                <div className="carousel_img"><img src={carousel_1} alt=""/></div>
                                <div className="carousel_img"><img src={carousel_2} alt=""/></div>
                                <div className="carousel_img"><img src={carousel_3} alt=""/></div>
                                <div className="carousel_img"><img src={carousel_4} alt=""/></div>
                            </Carousel>
                           <h3> 国际新闻</h3>
                        </div>
                         中间新闻列表
                        <Tabs className="news_tab">
                            <TabPane tab="娱乐新闻" key="1">
                                娱乐新闻的内容。。。。
                            </TabPane>
                            <TabPane tab="科技新闻" key="2">
                                科技新闻的内容。。。。
                            </TabPane>
                        </Tabs>
                        <Tabs className="react_pro">
                            <TabPane tab="React_产品" key="3">
                                科技新闻的内容。。。。
                            </TabPane>
                        </Tabs>

                    </Col>
                    <Col span={1}></Col>
                </Row>*/}
            </div>
        )
    }
}
export default NewsContainer