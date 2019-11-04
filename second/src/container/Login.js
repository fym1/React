import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Login extends Component {
    render() {
        return (
            <div>
                <div className='login'>
                    <p>用户名</p><input type="text" name="username" />
                    <p>密码</p><input type="pwd" name="pwd" />
                    <br></br>
                    <button>
                        <Link to={`home/all/1`}>登陆</Link>
                    </button>
                </div>
            </div>
        )
    }
}
