import React, { Component } from 'react'
import {Link,Route,Redirect} from 'react-router-dom';
import All from './All'
import Jinghua from './Jinghua'
import Share from './Share'
import Ask from './Ask'
import Employ from './Empoly'
import Test from './Test'
export default class Home extends Component {
    render() {
        let {url} = this.props.match
        console.log(this.props)
        return (
            <div>
                <div className='home'>
                    <Link to={`${url}/all/1`}>全部</Link>
                    <Link to={`${url}/jinghua/1`}>精华</Link>
                    <Link to={`${url}/share/1`}>分享</Link>
                    <Link to={`${url}/ask/1`}>问答</Link>
                    <Link to={`${url}/employ/1`}>招聘</Link>
                    <Link to={`${url}/test/1`}>客户端测试</Link>
                </div>
                <div>
                    {/* <Route exact path={`/`} component={All}/> */}
                    <Route path={`${url}/all/:id`} component={All}/>
                    <Route path={`${url}/jinghua/:id`} component={Jinghua}/>
                    <Route path={`${url}/share/:id`} component={Share}/>
                    <Route path={`${url}/ask/:id`} component={Ask}/>
                    <Route path={`${url}/employ/:id`} component={Employ}/>
                    <Route path={`${url}/test/:id`} component={Test}/>
                    <Route exact path={`${url}`} render={() => (<Redirect from={`${url}`} to={`${url}/all/1`}/>)}/>      
                    
                </div>
                {/* <Page/> */}
            </div>
        )
    }
}