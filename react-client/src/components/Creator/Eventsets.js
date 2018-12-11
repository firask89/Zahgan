import React from 'react'
import $ from 'jquery';
import EventClassNew from '../Home/EventClassNew'
import GoogleMapReact from 'google-map-react';

import Eventcreat from './Eventcreat'
import Eventcreatsets from './Eventcreatsets'
import Slideshow from '../Slider/Slideshow';


import { BrowserRouter, Route, Switch } from 'react-router-dom'



class Eventcreatshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    $('#home').hide();
    $.ajax({
      url: '/create',
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
      <div>
        <div>
          {
            this.state.items.map((item) => {
              return (<div >
                <EventClassNew item={item} />
                <Eventcreatsets item={item} />
              </div>)
            })
          }
        </div>
      </div>
    );
  }
}
export default Eventcreatshow
