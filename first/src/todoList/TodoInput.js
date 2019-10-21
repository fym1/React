import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoInput extends Component {
    enterPress = (event) => {
        if(event.key === 'Enter') {
            this.props.add(event.target.value);
            event.target.value = ''
        }
    }
    render() {
        return (
            <div>
                <input ref='title' onKeyDown={this.enterPress} className="search" placeholder="添加ToDo"/>
            </div>
        )
    }
}
