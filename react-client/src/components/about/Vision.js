import React from 'react'
import zahgan from '../Home/zahgan.jpg';
import vision from './pages/vision'
import './Vision.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Vision extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
		}
		this.toggle = this.toggle.bind(this);
	}
	toggle() {
		this.setState({
		  modal: !this.state.modal
		});
	  }
    render() {
		return (


			<div id="about">
				<div className="row">
					<div className="col-md-12">
						<p className="main_title"><span>About Us</span></p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4"  onClick={this.toggle}>
						<div className="box" >
							<div className="box-icon"> <span className="glyphicon glyphicon-heart-empty "></span> </div>
							<div className="info">
								<h4 className="text-center">About</h4>
								<p> Our mission is to provide you with a tool to find the best events happening around you <br/>
								<u>read more</u></p>
							</div>
						</div>
					</div>
					
					<div className="col-md-4">
					<Link to='/locaton'>
						<div className="box">
							<div className="box-icon"> <span className="glyphicon glyphicon-map-marker"></span> </div>
							<div className="info">
								<h4 className="text-center">Our location</h4>
								<p>Our team will be happy to meet you
								<br /><u>Our location</u>
								</p>
							</div>
						</div>
						</Link>
					</div>
					<div className="col-md-4">
						<div className="box">
							<div className="box-icon"> <span className="glyphicon glyphicon-earphone"></span> </div>
							<div className="info">
								<h4 className="text-center">help</h4>
								<p> Do you need help? Our team will be happy to help you, contact us at <br /> 06-xxxxxxx </p>          </div>
						</div>
					</div>
				</div>
					<div>
						<Modal className={'modal-open'} isOpen={this.state.modal} toggle={this.toggle} centered={true} size={'lg'} >
							<ModalBody>
								<h2 style={{ textAlign: 'center', fontWeight: "bold", margin:'-5px', fontFamily: 'Times New Roman'}}>About Us</h2>  <hr/>
								<p style={{fontSize:'20px', fontFamily: 'Times New Roman'}}> <strong>Zahgaan</strong> is an online event registration created to help manage events, festivals, conferences, workshops and activities.
									it saves you the time and effort of managing events, handling attendee communication,
									manual registration.
									<br/> <br/>
									Zahgaan.com is a service platform that allows event organizers or venue managers to post their events and start accepting registrations or reservations online, in addition to that,
									Zahgaan.com provides its audiences with the latest events and alerts based on their personal preferences.
								</p>
							</ModalBody>
						</Modal>
					</div>
			</div>


		)
	}	
}
export default Vision