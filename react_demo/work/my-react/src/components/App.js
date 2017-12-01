import React from "react"
// 引入图片
import logo from "./logo.svg"
/* 定义组件 */
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list:[
                {name:"北京市",JC:"京"},
                {name:"天津市",JC:"津"},
                {name:"河北省",JC:"冀"},
                {name:"山西省",JC:"晋"},
                {name:"辽宁省",JC:"辽"},
                {name:"吉林省",JC:"吉"},
                {name:"江苏省",JC:"苏"},
                {name:"浙江省",JC:"浙"},
                {name:"安徽省",JC:"皖"},
                {name:"福建省",JC:"闽"},
                {name:"江西省",JC:"赣"},
                {name:"山东省",JC:"鲁"},
                {name:"河南省",JC:"豫"},
                {name:"湖北省",JC:"鄂"},
                {name:"湖南省",JC:"湘"},
                {name:"广东省",JC:"粤"},
                {name:"海南省",JC:"琼"},
                {name:"重庆市",JC:"渝"},
                {name:"台湾省",JC:"台"},
                {name:"青海省",JC:"青"},
                {name:"上海市",JC:"沪、申"},
                {name:"四川省",JC:"川、蜀"},
                {name:"贵州省",JC:"贵、黔"},
                {name:"云南省",JC:"滇、云"},
                {name:"陕西省",JC:"陕、秦"},
                {name:"甘肃省",JC:"甘、陇"},
                {name:"黑龙江省",JC:"黑"},
                {name:"西藏自治区",JC:"藏"},
                {name:"内蒙古自治区",JC:"蒙"},
                {name:"香港特别行政区",JC:"港"},
                {name:"澳门特别行政区",JC:"澳"},
                {name:"宁夏回族自治区",JC:"宁"},
                {name:"广西壮族自治区",JC:"桂"},
                {name:"新疆维吾尔自治区",JC:"新"},
            ]
        };
    }
    render(){
        let {list} = this.state
        return (
            <div className="App">
                <div className="App-header">
                    {/*<img className="App-logo" src={logo} />*/}
                    <h2 className="App-title">Hello - China!</h2>
                    <table className="Table-style">
                        <tr>
                            <td style={{color:"red"}}>省份名称</td>
                            <td style={{color:"red"}}>省份简称</td>
                        </tr>
                        <tr>
                            <td>
                                {
                                    list.map((item,index)=>{
                                        return <tr key={index}>{item.name}</tr>
                                    })
                                }
                            </td>
                            <td>
                                {

                                    list.map((item,index)=>{
                                        return <tr key={index}>{item.JC}</tr>
                                    })
                                }
                            </td>
                        </tr>

                    </table>

                </div>
                <p className="App-intro">hello ant-design of react!</p>
            </div>
        )
    }
}
/* 暴露 组件 */
export default App