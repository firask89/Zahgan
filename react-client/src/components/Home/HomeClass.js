import React from 'react'
import EventClassNew from './EventClassNew'
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
        return (
            <div>
                <div className="container-fluid" >
                    <Slideshow />
                    <Vision />
                    <div classsname="images">
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

