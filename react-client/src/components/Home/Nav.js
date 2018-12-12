import React from 'react'
import zahgan from './zahgan.jpg';
import $ from 'jquery';
import { Modal, ModalBody } from 'reactstrap';
import './event.css';
const jwtDecode = require('jwt-decode');


class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      modal: false,
      userName: '',
      events: false,
      email: null
    }
    this.signOut = this.signOut.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  // Component did mount is checking whether the randomly generated JWT token is stored in the local storage
  // if it has been saved then change the state of loggedIn to true and then save the username in the state as well
  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.setState({
        isLoggedIn: true
      });
      this.setState({
        userName: jwtDecode(localStorage.getItem('token')).firstName
      })
    } else {
      this.setState({
        isLoggedIn: false
      });
    }
  }
  ToHomePage = () => {
    window.location.assign('/');
  }
  ToEvents = () => {
    this.setState({
      events: !this.state.events
    })
  }

  ToAbout = () => {
    $("#clickAbout").click(function () {
      $('html, body').animate({
        scrollTop: $("#about").offset().top
      }, 2000);
    });
  }

  showLoggedInElements = () => {
    if (this.state.isLoggedIn === true) {
      return 'block';
    } else {
      return 'none';
    }
  }

  hideLoggedInElements = () => {
    if (this.state.isLoggedIn === true) {
      return 'none';
    } else {
      return 'block';
    }
  }

  // Post request to logout the user when logout is pressed
  signOut = (event) => {
    $.ajax({
      type: "POST",
      url: '/account/logout',
      headers: {
        token: localStorage.getItem('token')
      },
      success: (res) => {
        alert(res.message)
        if (res.success) {
          localStorage.removeItem('token');
          this.setState({
            isLoggedIn: false
          })
          window.location.reload();
        }
      }
    })
    event.preventDefault();
  }

  // Function to make the first letter in a string uppercase
  jsUcfirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  // getUserEvents (){
  //   $.ajax({
  //     type : 'GET',
  //     url : "/userevents",
  //     data : {
  //       name : 'name',

  //     }
  //   })
  // }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm ">
          <ul className="navbar-nav">
            <li className="active"><a href="/">Home</a></li>
            <li><a href="javascript:void(0);" onClick={this.ToAbout()} id="clickAbout">About</a></li>
            <li><a href="javascript:void(0);" onClick={this.toggle}>Contact us</a></li>
            <img src={zahgan} onClick={this.ToHomePage} style={{ cursor: 'pointer' }}></img>
            <li style={{ 'display': this.state.isLoggedIn === false ? 'block' : 'none' }}><a href="/SignInCreator">Manager</a></li>
            <li><a href="/Eventsets" onClick={this.ToEvents} id="clickEvent">Events</a></li>
            <li style={{ 'display': this.state.isLoggedIn === false ? 'block' : 'none' }}><a href="/signin">Sign in</a></li>
            <li style={{ 'display': this.state.isLoggedIn === false ? 'block' : 'none' }}><a href="/signup">Sign up</a></li>
            <li style={{ 'display': this.state.isLoggedIn === true ? 'block' : 'none' }}><a href="javascript:void(0);" onClick={this.signOut}>Log out</a></li>
            <li style={{ 'display': this.state.isLoggedIn === true ? 'block' : 'none' }}><a href="javascript:void(0);" >Welcome {this.jsUcfirst(this.state.userName)}</a></li>
          </ul>

        </nav>
        <div>
          <Modal className={'modal-open'} isOpen={this.state.modal} toggle={this.toggle} centered={true} size={'lg'} style={{ marginTop: '100px' }}>
            <ModalBody>
              <h2 style={{ textAlign: 'center', fontWeight: "bold", margin: '-5px', fontFamily: 'Times New Roman' }}>Contact Us</h2>  <hr />
              <h4 >
                <p style={{ textAlign: 'center', lineHeight: '23px', fontFamily: 'Times New Roman' }}><strong>Dear Valued User,</strong> <br />   you can contact us whenever you want by: <br /> Phone number: <br />0791333443 <br /> Email: <br />www.zahgan@gmail.com <br />Fax: <br />xxxxxxxxxxxx</p>
              </h4>
            </ModalBody>

          </Modal>
        </div>
      </div>

    )
  }
}
export default Nav