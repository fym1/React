import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className='foot'>
                <div className='footer'>
                    <p>RSS | 源码地址</p>
                    <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
                    <p>服务器赞助商为<img src='https://static.cnodejs.org/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9'/>,存储赞助商为<img src='https://static.cnodejs.org/Fg0jtDIcTqVC049oVu5-sn6Om4NX'/>，由<img src='https://static.cnodejs.org/FpMZk31PDyxkC8yStmMQL4XroaGD'/>提供应用性能服务</p>
                    <p>新手搭建Node.js服务器，推荐使用无需备案的<a>DigitalOcean(https://www.digitalocean.com/)</a></p>
                </div>
            </div>
        )
    }
}
