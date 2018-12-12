import React from 'react'
import $ from 'jquery';

import Eventcreat from './Eventcreat'



import { BrowserRouter, Route, Switch } from 'react-router-dom'



class Eventcreatshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };



  }

  componentDidMount() {

    $.ajax({
      url: '/create',
      success: (data) => {
        console.log(data)
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
      <div class="container-fluid">


        <div class="container-fluid">

          {
            this.state.items.map((item) => {
              return (<div >
                <Eventcreat item={item} />
              </div>)

            })

          }
        </div>
      </div>




    );
  }
}
export default Eventcreatshow
