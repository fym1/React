import React from 'react';
import TodoInput from './TodoInput'
import Todoing from './Todoing'
import './index.css'
export default class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      name: 'TodoList2'
    }
  }
  addData = (item) => {
      let tempList = this.state.list;
      tempList.push({
        title: item,
        checked: false
      })
      this.setState({
        list: tempList
      })
      //表单置为空
      this.refs.title.value = '';
      localStorage.setItem('todoList', JSON.stringify(tempList));
      console.log(this.state.list);
  }
  delData = (key) => {
    var temList = this.state.list
    temList.splice(key, 1)
    this.setState({
      list: temList
    })
    localStorage.setItem('todoList', JSON.stringify(temList))
  }
  checkData = (key) => {
    let tempList = this.state.list;
    tempList[key].checked = !tempList[key].checked;
    this.setState({
      list: tempList
    })
    localStorage.setItem('todoList', JSON.stringify(tempList))
  }
  // 生命周期函数 页面加载就会触发
  componentDidMount () {
    var todoList = JSON.parse(localStorage.getItem('todoList'))
    if (todoList) {
      this.setState({
        list: todoList
      })
    }
  }
  render () {
    return (
      <div className="App">
        <div className='header'>
          <div className='header-content'>
            <div className="header-title">ToDoList</div>
            <TodoInput add={this.addData} ref='title'/>
          </div>    
        </div>   
        <br />       
        <Todoing del={this.delData} list={this.state.list} che={this.checkData} className='content'/>
      </div>
    )
  }
}
