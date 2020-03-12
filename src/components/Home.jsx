import React from 'react';
import Product from '../products/product.jpg';
import YouTube from 'react-youtube';

class Home extends React.Component {
  _onReady(event) {
    event.target.pauseVideo();
  }
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1
      }
    };
    return (
      <div style={divContentMargin}>
        <div style={floatContentLeft}>
          <img style={emsProduct} src={Product} alt='Owner' />
          <div>
            <a href='#' class='myButton'>
              Book Now
            </a>
          </div>
        </div>
        <div style={slogan}>
          <br></br>
          <h3>Where Beauty Happens Naturally</h3>
        </div>
        <div style={boldMission}>
          <p>
            My mission is to lend a healing hand by offering natural and
            cruelty-free beauty to the Vancouver, Washington and Portland,
            Oregon area. I strive to assist you on your journey towards loving
            your unique born-with-it beauty and skin health. Offering an array
            of services, I support local and holistic in the up-and-coming
            downtown Vancouver area.
          </p>
          <div style={serviceContainer}>
            <div style={left}>
              <h4>Makeup & Waxing</h4>
              <h5>Enhance Your Natural Glow</h5>
            </div>
            <div style={middle}>
              <h4>Holistic Skin Treatments</h4>
              <h5>Love Your Born-With-It Beauty</h5>
            </div>
            <div style={right}>
              <h4>Eyelash Extensions</h4>
              <h5>Wake Up Like This</h5>
            </div>
          </div>
          <div>
            <YouTube
              videoId='2oKayY5vX6c'
              opts={opts}
              onReady={this._onReady}
            />
          </div>
        </div>
      </div>
    );
  }
}

const left = {
  width: '25%',
  backgroundColor: 'white',
  marginRight: '20px',
  textAlign: 'center',
  padding: '10px',
  border: '4px double #d3c95d'
};
const middle = {
  width: '25%',
  backgroundColor: 'white',
  marginRight: '20px',
  textAlign: 'center',
  padding: '10px',
  border: '4px double #d3c95d'
};
const right = {
  width: '25%',
  backgroundColor: 'white',
  textAlign: 'center',
  padding: '10px',
  border: '4px double #d3c95d'
};
const serviceContainer = {
  display: 'flex',
  marginBottom: '20px'
};

const boldMission = {
  marginRight: '30%'
};
const floatContentLeft = {
  float: 'left',
  padding: '15px'
};
const slogan = {
  fontFamily: 'Bellota, cursive',
  fontSize: '25px',
  color: '#d3c95d',
  textDecoration: 'underline'
};
const emsProduct = {
  width: '300px',
  height: '300px',
  borderRadius: '100%'
};

const divContentMargin = {
  fontFamily: 'Roboto, sans-serif',
  color: '#545454',
  marginRight: '10%',
  marginLeft: '10%'
};

export default Home;
