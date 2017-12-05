import React from "react"
import {Link} from "react-router"
import  axios from "axios"

import logo from "../images/logo.png"
// 引入 antd 库 的组件
import { Row, Col, Menu, Icon, Button,Modal, Tabs, Form, Input, message, } from "antd"
const MenuItem = Menu.Item
const TabPane = Tabs.TabPane
const FormItem = Form.Item

class NewsHeader extends React.Component{
    constructor(props){
        super(props )
        // 初始化状态/数据
        this.state = {
            key: "toutiao",
            username: null,
            userId:null,
            isShow:false
        }
    }

    // 页面将要被挂载时
    componentWillMount(){
        // 判断用户是否是登录
        let userObj = JSON.parse(localStorage.getItem("user_key"))
        if(userObj){ // 登录状态
            // 修改状态
            this.setState({
                username:userObj.username,
                userId:userObj.userId
            })
        }
    }

    // 定义 MenuItem 的事件回调函数
    changeKey = ({ key }) => {
        /*console.log(item, key, keypath);
        console.log(event);*/
        // 判断 点击的 key 值 是否是 登录/注册
        if(key === "loginRegister"){
            // 修改 isShow 状态
            this.setState({isShow:true})
            // 清空 表单项的内容
            this.props.form.resetFields()
        }
        // 修改状态
        this.setState({key})
    }

    // 定义 弹层的按钮事件
   /* changeShow = () => {
        // 修改状态
        this.setState({isShow:false})
    }*/
   changeShow = (isShow) => {
       // 修改 isShow 状态
       this.setState({isShow})
   }

   // 定义 切换 Tabs 时的方法
    /*changeSafe = () => {
       // 清空表单项 的内容
        this.props.form.resetFields()
    }*/

    // 定义 提交表单项 方法
    handleSubmit = (isRegister,event) => {
        // 阻止默认行为
        event.preventDefault()
        // 发送ajax请求的准备工作
        let {username,password, r_userName, r_password, r_confirmPassword} = this.props.form.getFieldsValue()
        let action = isRegister? "register" : "login"
        let url = `http://newsapi.gugujiankong.com/Handler.ashx?action=${action}&username=${username}&password=${password}&r_userName=${r_userName}&r_password=${r_password}&r_confirmPassword=${r_confirmPassword}`
        // 发送 ajax 请求 
        axios.get(url)
            .then((response) => {
                // 收集数据
                let data = response.data
                // 判断 isRegister 的值（是否为注册的表单提交项）
                if(isRegister){ // 注册成功
                    message.info("恭喜注册成功！")
                } else if(!data) {  // 登录失败
                    message.info("登陆失败，用户名或密码错误！")
                } else { // 登录成功
                    message.info("登录成功！")
                    // 修改状态
                    this.setState({
                        username: data.NickUserName,
                        userId: data.UserId
                    })
                    // 保存用户的数据到 localStorage
                    let {username, userId} = this.state
                    let obj = {username, userId}
                    // 将用户信息保存到 localStorage
                    localStorage.setItem("user_key", JSON.stringify(obj))
                }
            })
            .catch(error => {
                console.log(error);
            })
        // 修改状态 isShow
        this.setState({isShow:false})
    }

    // 定义 退出 的方法
    handleOut = () => {
        // 修改状态 username
        this.setState({
            username:null,
            userId: null
        })
        // 清空 localStorage 中的用户信息
        localStorage.removeItem("user_key")
    }

    render(){
        let {key, username, userId, isShow } = this.state
        let {getFieldDecorator} = this.props.form
        let UserItem = username?
            ( // 用户已登录
                <MenuItem key="userCenter" className="register">
                    <Button type="primary">{username}</Button>&nbsp;
                    <Button type="dashed"><Link to="/UserCenter">个人中心</Link></Button>&nbsp;
                    <Button onClick={this.handleOut}><Link to="/">退出</Link> </Button>
                </MenuItem>
            ):
            (  // 未登录
                <MenuItem key="loginRegister" className="register">
                    <Icon type="appstore"/> 登录/注册
                </MenuItem>
            )

        return (
            <div>
                {/* 栅格 来布局 */}
                <Row>
                    <Col span={1}></Col>
                    <Col span={3}>
                        <div className="logo">
                            <img src={logo} alt=""/>
                            <span>ReactNews</span>
                        </div>
                    </Col>
                    <Col span={19}>
                        {/*菜单： mode="horizontal" -- 水平排列 */}
                        <Menu onClick={this.changeKey} mode="horizontal" selectedKeys={[key]}>
                            <MenuItem key="toutiao">
                                <Icon type="appstore"/> 头条
                            </MenuItem>
                            <MenuItem key="shehui">
                                <Icon type="appstore"/> 社会
                            </MenuItem>
                            <MenuItem key="guonei">
                                <Icon type="appstore"/> 国内
                            </MenuItem>
                            <MenuItem key="guoji">
                                <Icon type="appstore"/> 国际
                            </MenuItem>
                            <MenuItem key="yule">
                                <Icon type="appstore"/> 娱乐
                            </MenuItem>
                            <MenuItem key="tiyu">
                                <Icon type="appstore"/> 体育
                            </MenuItem>
                            <MenuItem key="keji">
                                <Icon type="appstore"/> 科技
                            </MenuItem>
                            <MenuItem key="shishang">
                                <Icon type="appstore"/> 时尚
                            </MenuItem>
                            {UserItem}
                        </Menu>

                        {/*对话框的弹层 -- 用户登录/注册 */}
                        <Modal title="用户中心" visible={isShow} okText="确定"
                            onOk={this.changeShow.bind(this, false)} onCancel={this.changeShow.bind(this, false)}>
                            <Tabs onChange={ ()=> this.props.form.resetFields()}>
                                <TabPane tab="登录" key="1">
                                    <Form onSubmit={this.handleSubmit.bind(this, false)}>
                                        <FormItem label="用户名">
                                             {/*getFieldDecorator('唯一标识')(表单项)*/}
                                            {
                                                getFieldDecorator('username')(<Input placeholder="请输入用户名" />)
                                            }
                                        </FormItem>
                                        <FormItem label="密码">
                                            {
                                                getFieldDecorator('password')(<Input type="password"  placeholder="请输入密码" />)
                                            }
                                        </FormItem>
                                        <Button htmlType="submit" type="primary">登录</Button>

                                    </Form>
                                </TabPane>

                                <TabPane tab="注册" key="2">
                                    <Form onSubmit={this.handleSubmit.bind(this, true)}>
                                        <FormItem label="用户名">
                                            {/*getFieldDecorator('唯一标识')(表单项)*/}
                                            {
                                                getFieldDecorator('r_userName')(<Input  placeholder="请输入用户名" />)
                                            }
                                        </FormItem>
                                        <FormItem label="密码">
                                            {
                                                getFieldDecorator('r_password')(<Input type="password"  placeholder="请输入密码" />)
                                            }
                                        </FormItem>
                                        <FormItem label="确认密码">
                                            {
                                                getFieldDecorator('r_confirmPassword')(<Input type="password"  placeholder="请确认密码" />)
                                            }
                                        </FormItem>
                                        <Button htmlType="submit" type="primary">注册</Button>

                                    </Form>
                                </TabPane>
                            </Tabs>
                        </Modal>
                    </Col>
                    <Col span={1}></Col>
                </Row>
            </div>
        )
    }
}
/*
* 1、this.props.form
* 2、getFieldDecorator：用于对表单相进行双向数据绑定 */
export default Form.create()(NewsHeader)