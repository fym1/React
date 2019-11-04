import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
export default class page extends Component {
    render() {
        var list=[];
        for(var i = 1;i<50;i++){
            var j = i-1;
            list[j] = i;
        }
        return (
            <div>
                    {
                        list.map((item)=>(
                            <div key={item} style={{float:'left',marginLeft:'3px'}}>
                                <NavLink activeStyle={
                                    {background:'red',
                                    color:'#fff'}
                                } to={'/home/jinghua/'+item}>{item}</NavLink>
                            </div>
                        ))
                    }
            </div>
        )
    }
}