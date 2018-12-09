import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import EventClassNew from './EventClassNew'
import Create from '../Creator/Create'
import Slideshow from '../Slider/Slideshow';
import Vision from '../about/Vision';

class HomeClass extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef();
    }

    scrollToMyRef = () => {
        window.scrollTo({
            top: this.myRef.current.offsetTop,
            behavior: "smooth"
        })
    }
    render() {
        console.log("HomeClass", this.props.items)
        return (
            <div>
                <div className="container-fluid " >
                    <Slideshow />
                    <Vision />
                    <div classsName="images">
                        <p className="main_title"><span>Events</span></p>
                        {
                            this.props.items.map((item) => {
                                return (<div ref={this.myRef}>
                                    <EventClassNew item={item} />
                                </div>)
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeClass

