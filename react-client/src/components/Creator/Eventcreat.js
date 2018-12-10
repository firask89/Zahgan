import React from 'react'
import $ from 'jquery';
import Modal from '../Modal/Modal'


class Eventcreat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.item,
      show: false,
      Name: '',
      Phone: '',



    }



    this.handleSubmit = this.handleSubmit.bind(this);
    this.delete = this.delete.bind(this);
  }

  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });

  }

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
      }
    });
    event.preventDefault();
  }


  delete(x) {
    alert("are you sure you want to delete: " + this.state.items.eventName)

    var id = this.state.items._id
    $.ajax({
      type: "DELETE",
      url: '/create/' + id,
      success: function (data) {
        alert("deleted")
      }
    });
  }



  render() {
    return (
      <table class="table table-striped primary">

        <thead>
          <tr class="bg-primary ">
            <th scope="col " className="th-evenName">#</th>
            <th scope="col" className="th-evenName">Event Name</th>
            <th scope="col" className="th-evenName">attendees Number</th>
            <th scope="col" className="th-atendees">attendees Data</th>
            <th scope="col" className="th-atendees"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="primary">
            <th scope="row"></th>
            <td>{this.state.items.eventName}</td>
            <td>{this.state.items.attending.length} / {this.state.items.availableSeats}</td>
            <td>
              {
                this.state.items.attending.map((item) => {
                  return (<div className="row" >

                    <div class="col-lg-4">name : {item.Name} </div>
                    <div class="row"></div>
                    <div class="col-lg-4">
                      phone : {item.Phone}
                    </div>
                  </div>)


                })}</td>
            <td> <form>
              <button className="row btn alert-danger" id="deletbutton" onClick={this.delete}>delete </button>
            </form></td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default Eventcreat