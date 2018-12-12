import React from 'react'
import $ from 'jquery';
import { Redirect } from 'react-router-dom'
import '../UserSignIn/Signin.css';
import Create from './Create'

class SignInCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false,
      sess: '',
      events: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    $('#home').hide();
    $.ajax({
      type: "GET",
      url: '/creator/signin/check',
      success: (res) => {
        console.log('res.sess==============', res.sess, res.email)
        if (res.success) {
          this.getEvents(res.email)
          this.setState({
            isLoggedIn: true,
            sess: res.sess
          })
        }
      }
    });
  }

  handleSubmit(event) {
    var obj = {
      email: this.state.email,
      password: this.state.password
    }
    console.log("submit====", obj)
    $.ajax({
      type: "POST",
      url: '/creator/signin',
      data: {
        email: obj.email,
        password: obj.password
      },
      success: (res) => {
        alert('hello!')
        if (res.success) {
          this.getEvents(res.sess)
          this.setState({
            isLoggedIn: true,
            sess: res.sess
          })
        }
      }
    });

    event.preventDefault();
  }

  getEvents(email) {
    console.log('in get events =============', this.state.email, "2", email)
    if (this.state.email || email) {
      $.ajax({
        type: "POST",
        url: '/creator/events',
        data: { email: this.state.email || email },
        success: (res) => {
          if (res.success) {
            this.setState({
              events: res.events,
            })
          }
        }
      });
    }
  }


  render() {
    if (this.state.sess && this.state.events.length > 0) {
      console.log(this.state.events)
      return (
        <Create events={this.state.events}></Create>
      )
    } else {
      return (
        <div className="wrapper">
          <form className="form-signin" onSubmit={this.handleSubmit}>
            <h2 className="form-signin-heading">Event Manager login</h2>
            <input type="text" className="form-control" name="email" placeholder="Email Address" required="" autoFocus="" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
            <input type="password" className="form-control" name="password" placeholder="Password" required="" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
            <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
          </form>
        </div>
      );
    }
  }
}
export default SignInCreator
