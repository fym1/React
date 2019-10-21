import React, { Component } from 'react'
import TodoHeader from './todo/TodoHeader';
import TodoFooter from './todo/TodoFooter';
import TodoMain from './todo/TodoMain';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      todo: {
        list: [],
        add: (item) => { //添加一个todo
          this.setState(preState => {
            let newTodo = preState.todo
            let list = Object.assign([], newTodo.list)
            list.push({
              text: item,
              id: new Date().getTime(),
              status: 'working'
            })
            newTodo.list = list
            return {
              todo: newTodo
            }
          })
        },
        delete: (id) => { //删除一个todo
          this.setState(preState => {
            let newTodo = preState.todo
            let list = newTodo.list.filter(item => id !== item.id)
            newTodo.list = list
            return {
              todo: newTodo
            }
          })
        },
        finish: (id) => { //完成一个todo
          this.setState(preState => {
            let newTodo = preState.todo
            let list = newTodo.list.map(item => {
              if(item.id === id) {
                item.status = 'finished'
              }
              return item
            })
            newTodo.list = list
            return {
              todo: newTodo
            }
          })
        },
        clear: () => { //清空todo列表
          this.setState(preState => {
            let newTodo = preState.todo
            newTodo.list = []
            return {
              todo: newTodo
            }
          })
        }
      }
    }
  }
  render() {
    return (
      <div className="App">
        <TodoHeader todo={this.state.todo}></TodoHeader>
        <TodoMain todo={this.state.todo}></TodoMain>
        <TodoFooter clear={this.state.todo.clear}></TodoFooter>
      </div>
    );
  }
}

export default App;
