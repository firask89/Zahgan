import React from 'react';
import { Fade } from 'react-slideshow-image';
import $ from 'jquery';

const fadeImages = [
  'https://www.bellshakespeare.com.au/wp-content/uploads/2016/08/2017-Events-916x261.jpg',
  'https://financesonline.com/uploads/2017/10/ev.jpg',
  'http://www.fairact.in/wp-content/uploads/2018/04/events-bg.jpg',
  'https://qualifyme.com/wp-content/uploads/2015/10/img-corporate-event.jpg',
  'http://www.leedstrinity.ac.uk/SiteCollectionImages/hero-images/Events_HERO.jpg',
  'https://www.lofoten-aktiv.no/images/fjellturer/fjellturIMG_2779.jpg',
  'https://financesonline.com/uploads/2017/10/ev.jpg'
];

const fadeProperties = {
  duration: 1000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  height: 20
}

class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items:''

    }
  }


   componentDidMount() {
    var that = this
     $.ajax({
      url: '/create',
      type: "GET",
      success: async (data) => {
       await that.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render() {
  
  if (this.state.items) {
    return (
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
          <a href="http://localhost:3000/about">
            <img src={fadeImages[0]} />
            </a>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <a href="http://localhost:3000/signin">
            <img src={fadeImages[1]} />
            </a>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <a href="http://localhost:3000/signin">
            <img src={fadeImages[2]} />
            </a>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <a href="http://localhost:3000/signin">
            <img src={fadeImages[3]} />
            </a>
          </div>
        </div>


        <div className="each-fade">
          <div className="image-container">
          <a href="http://localhost:3000/signin">
            <img src={fadeImages[4]} />
            </a>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <a href="http://localhost:3000/signin">
            <img src={fadeImages[5]} />
            </a>
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
          <a href="http://localhost:3000/signin">
            <img src={fadeImages[6]} />
            </a>
          </div>
        </div>


      </Fade>
    ) } else {
      return (<div>estanna</div>)
    }
  }
}
export default Slideshow
