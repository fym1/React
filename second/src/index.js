import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
//容器组件 / UI组件（展示组件）
//智能组件 / 木偶组件
//容器组件(container/pages)：写成类组件（有生命周期）逻辑、功能
//UI组件(componets)：写成函数组件，展示、返回React元素（功能为展示）
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)