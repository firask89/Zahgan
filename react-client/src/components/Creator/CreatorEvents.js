import React from 'react'
import $ from 'jquery';
import { Redirect } from 'react-router-dom'
import '../UserSignIn/Signin.css';
import Create from './Create'

class CreatorEvents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: this.props.events
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
    }

    handleSubmit(event) {
        var obj = {
            email: this.state.email,
            password: this.state.password
        }
        $.ajax({
            type: "POST",
            url: '/creator/signin',
            data: {
                email: obj.email,
                password: obj.password
            },
            success: (res) => {
                alert(res.message)
                alert(res.sess)
                if (res.success) {
                    this.setState({
                        isLoggedIn: true,
                        sess: res.sess
                    })
                }
            }
        });
        event.preventDefault();
    }

    render() {
        if (!this.props.events) {
            return (
                <h3>No events yet</h3>
            )
        } else {
            return (
                <div>
                    {
                        this.state.events.map((event) => {
                        return (<div style={{marginLeft:".5%", marginRight:".5%"}}>
                            <div className="col-lg-4 thumbnail">
                                <img src={event.url}/>
                                <h5>eventName: {event.eventName}</h5>
                                <h5>email: {event.email}</h5>
                            </div>
                        </div>)
                    })}
                </div>
            );
        }
    }
}
export default CreatorEvents