import React from 'react';
import $ from 'jquery';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        }
    }
    componentDidMount() {
        var that = this;
        $.ajax({
            type: 'POST',
            url: '/welcome',
            success: function (data) {
                that.setState({
                    events: data
                })
            }
        })
    }
    render() {
        console.log(this.state.events[0])
        return (
            <div>
                <h1>
                    {this.state.events[0]}
                </h1>
            </div>
        )
    }
}

export default Welcome;