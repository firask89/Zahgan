import React, { Component } from 'react';
import './App.css';
import Nav from './components/Home/Nav'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomeClass from './components/Home/HomeClass'

import Create from './components/Creator/Create'
import $ from 'jquery';
import Signup from './components/UserSignIn/Signup';
import Signin from './components/UserSignIn/Signin';
import SignInCreator from './components/Creator/SignInCreator';
import Slideshow from './components/Slider/Slideshow';
import Eventcreatshow from './components/Creator/Eventcreatshow';
import Eventsets from './components/Creator/Eventsets'
import Reserved from './components/Creator/Reserved';
import Footer from './components/Footer';
import location from './components/about/pages/location';
import vision from './components/about/pages/vision';


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
            <HomeClass items={this.state.items}/>
            <Nav />
            <Switch>
              <Route path='/SignInCreator' component={SignInCreator} />
              <Route path='/signup' component={Signup} />
              <Route path='/signin' component={Signin} />
              <Route path='/location' component={location} />
              <Route path='/vision' component={vision} />
              <Route path='/Eventcreatshow' component={Eventcreatshow} />
              <Route path='/Eventsets' component={Eventsets} />
              <Route path='/Reserved' component={Reserved} />
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