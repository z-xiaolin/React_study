import React from "react"

// 定义组件
function Repo({params}) {
    return <h4>用户名:{params.name}, 仓库名:{params.repo}</h4>
}
// 暴露组件
export default Repo