import React, { Component } from 'react'
import Header from './components/Header'
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom';
import Home from './container/Home';
import Api from './container/Api';
import About from './container/About';
import Start from './container/Start';
import Right from './container/Right'
import Page from './page'
import Content from './container/Content'
import Footer from './components/Footer'
import Login from './container/Login'
export default class App extends Component {
    render() {
        // let {url} = this.props.match;
        
        console.log(this.props);
        return (           
            <Router basename = '/React/second/build'>
                <div>
                    <Header/>
                </div>
                <div className='content'>
                    <div className="left">                        
                        <Route path='/home' component={Home}/>
                        <Route path='/fym/:id' component={Content}/>
                        <Route path='/start' component={Start}/>
                        <Route path='/api' component={Api}/>
                        <Route path='/about' component={About}/>
                        <Route path='/login' component={Login}/>
                        <Route exact path="/" render={() => (<Redirect from='/' to="/home/all/1"/>)}/>                 
                    </div>
                    <div>
                        <Right/>
                    </div>
                </div>
                <div>
                    <Footer/>
                </div>
            </Router>
        )
    }
}