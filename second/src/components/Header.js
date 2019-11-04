import React from 'react';
import {Link,Route} from 'react-router-dom'; 
import Home from '../container/Home' 
import Start from '../container/Start'
import Api from '../container/Api'
import About from '../container/About'
import Register from '../container/Register'
import Login from '../container/Login'
import Content from '../container/Content'
export default function Header(){
    return (
        <div className='header'>
            <header>
                <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt=""/>
                <input type='text'/>
                <div style={{float:'right'}}>
                    <Link to='/home/all/1'>首页</Link>
                    <Link to='/start'>新手入门</Link>
                    <Link to='/api'>API</Link>
                    <Link to='/about'>关于</Link>
                    <Link to='/register'>注册</Link>
                    <Link to='/login'>登录</Link>
                </div>
                <div>
                    {/* <Route path='' component={Content}/> */}
                    {/* <Route path='/home' component={Home}/>
                    <Route path='/start' component={Start}/>
                    <Route path='/api' component={Api}/>
                    <Route path='/about' component={About}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/login' component={Login}/> */}
                </div>
            </header>
        </div>
    )
}