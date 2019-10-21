import React, { Component } from 'react'
import storage from './storage'
export default class Todoing extends Component {   
    getNum=()=>{
        var i = 0;
        var list = this.props.list;
        list.map((value) => {
            if(!value.checked){
                i++;
            }
        })
        console.log(i);
        return i;
    }
    render() {
        var list = this.props.list;
        var i = 0;
        var j = 0;
        list.map((value) => {
            if(!value.checked){
                i++;
            }else{
                j++;
            }
        })
        return (
            <div className="content">
                <div className="list">
                    <h2 className="list-title">正在进行
                        <span className='title-numb'>{i}</span>
                    </h2>
                </div>
                <ul>
                {
                    list.map((value, key) => {
                    if (!value.checked) {
                        return (
                        <li key={key} className={'ToDoItem' + (this.props.list === 'true' ? ' ToDoItem-finish' : '')}>
                            <input type='checkbox' checked={value.checked} onChange={(e)=>this.props.che(key,e)} />
                            <p>{value.title}</p>
                            <span onClick={(e)=>this.props.del(key,e)}>-</span>
                        </li>
                        )
                    }
                    })
                }
                </ul>
                <div className="list">
                    <h2 className="list-title">已经完成
                        <span className='title-numb'>{j}</span>
                    </h2>
                </div>
                
                <ul>
                {
                    list.map((value, key) => {
                    if (value.checked) {
                        return (
                        <li key={key} className={'ToDoItem' + (this.props.list === 'true' ? ' ToDoItem-finish' : '')}>
                            <input type='checkbox' checked={value.checked} onChange={(e)=>this.props.che(key,e)} />
                            <p>{value.title}</p>
                            <span onClick={(e)=>this.props.del(key,e)}>-</span></li>
                        )
                    }
                    })
                }
                </ul>
            </div>
        )
    }
}
