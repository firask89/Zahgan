import React, { Component } from 'react';
import './App.css';
import Nav from './components/Home/Nav'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomeClass from './components/Home/HomeClass'
import Welcome from "./welcome";

import $ from 'jquery';
import Signup from './components/UserSignIn/Signup';
import Signin from './components/UserSignIn/Signin';
import SignInCreator from './components/Creator/SignInCreator';
import Eventcreatshow from './components/Creator/Eventcreatshow';
import Eventsets from './components/Creator/Eventsets'
import Reserved from './components/Creator/Reserved';

class App extends Component {

  constructor() {
    super()
    this.state = {
      items: [],
      authorized: false
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/create',
      type: "GET",
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }



  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div>
            <Nav />
            <div id='home'>
              <HomeClass items={this.state.items} />
            </div>
            <Switch>
              <Route path='/SignInCreator' component={SignInCreator} />
              <Route path='/signup' component={Signup} />
              <Route path='/signin' component={Signin} />
              <Route path='/Eventcreatshow' component={Eventcreatshow} />
              <Route path='/Eventsets' component={Eventsets} />
              <Route path='/Reserved' component={Reserved} />
              <Route path='/welcome' component={Welcome} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

/*
              <Route path='/HomeClass' render={() => {
                return (
                  <HomeClass items={this.state.items} />
                )
              }} />
              */