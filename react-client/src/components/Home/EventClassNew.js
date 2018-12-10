import React from 'react'
import $ from 'jquery';
import Modal from '../Modal/Modal'
import './event.css';
import SimpleMap from '../Creator/map'


class EventClassNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.item,
      show: false,
      Name: '',
      Phone: '',
      isLoggedIn: false,

    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log('componentdidmount')
    if (localStorage.getItem('token')) {
      this.setState({
        isLoggedIn: true
      });
    } else {
      this.setState({
        isLoggedIn: false
      });
    }
  }
// to toggle the modal
  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });

  }
  // take the data when its submit

  handleSubmit(event, item) {
    console.log("secound parameter", this.state.items.attending)
    var obj = {
      Name: this.state.Name,
      Phone: this.state.Phone,
    }
    var id = this.state.items._id
    console.log('Name', this.state.Name)
    console.log("my items ana wy7ya", id)
    //var array =[obj]
    //var array= this.state.items.attending
    //getComputedStyle. 
    this.state.items.attending.push(obj);
    this.state.items.availableSeats = this.state.items.availableSeats


    var yahya = this.state.items
    var y7ya = '/create/' + id;

    $.ajax({
      type: "PUT",
      url: '/create/' + id,
      data: yahya,
      success: function (data) {
        console.log("my data", data)
        alert("successfully attended")
        document.getElementById("name").value = ''
        document.getElementById("phone").value = ''
      }
    });
    
    


    // alert(obj.eventName + ' saved !');

    // $.ajax({
    //   url: '/create',
    //   success: (data) => {
    //     console.log(data)
    //     this.setState({
    //       items: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
    event.preventDefault();
  }

  render() {

    console.log('gele', this.state.items)

    return (
      <div>
        <Modal

          show={this.state.show}
          onClose={this.showModal}>
      
      <div className="row">
     
      <div className="col-sm-12">
      <div className="Popup-images">
              <img src={this.state.items.url}></img>
              </div>
              </div></div>

              <div className="row">
             
              <div className="col-sm-6">
              <div className="row"> <div className="col-sm-3">
              <p>Event Name</p>
              </div>
              <div className="col-sm-3">
              {this.state.items.eventName}
             
              </div>
              <div style={{'display': this.state.isLoggedIn === true ? 'block': 'none'}} className="col-sm-2">
              Name
             
              </div>
              <div className="col-sm-2">
              <input id="name" style={{'display': this.state.isLoggedIn === true ? 'block': 'none'}} type="text" value={this.state.Name}
                  onChange={e => this.setState({ Name: e.target.value })}></input>
             
              </div></div>
              <div className="row">   <div className="col-sm-3">
             <p>Event Cost</p>
             </div>
             <div className="col-sm-3">
             {this.state.items.cost}
            
             </div>   
             <div style={{'display': this.state.isLoggedIn === true ? 'block': 'none'}} className="col-sm-2">
              Phone
             
              </div>
              <div className="col-sm-2">
              <input id="phone" style={{'display': this.state.isLoggedIn === true ? 'block': 'none'}} type="text" value={this.state.Phone}
                  onChange={e => this.setState({ Phone: e.target.value })}></input>
             
              </div></div>
              <div className="row" >
              <div className="col-sm-3">
             <p >Event Description</p>
             </div>
             <div className="col-sm-9" >
             {this.state.items.des}
            
             </div>
            </div>
              <div className="row">
              <div className="col-sm-3">
             <p >Event Date</p>
             </div>
             <div className="col-sm-9" >
             {this.state.items.date}
            
             </div>
              </div>
             
        
             <button type="submit" onClick={this.handleSubmit} style={{'display': this.state.isLoggedIn === true ? 'block': 'none'}}>Attend</button>
           
             </div>
             <div className="col-sm-5">   <div className="mapModal">
       
       <SimpleMap item={this.state.items} /> 
      
      </div></div>
             </div>

        </Modal>


     <div id="events">
         
         <div className="images">
 
         <a href="#" onClick={this.showModal}>
  <div className="card">
    <figure className="front">
      <img src={this.state.items.url} alt="front"/>
      <div className="caption">
        <h2>{this.state.items.eventName}</h2>
        <p>{this.state.items.des}</p>
        <a href="#">View more</a>
      </div>			
    </figure>


  </div>
 </a>
</div>
</div>
</div>
    );
  }
}
export default EventClassNew