import React from 'react';
import Product from '../products/product.jpg';

const Home = () => {
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
          cruelty-free beauty to the Vancouver, Washington and Portland, Oregon
          area. I strive to assist you on your journey towards loving your
          unique born-with-it beauty and skin health. Offering an array of
          services, I support local and holistic in the up-and-coming downtown
          Vancouver area.
        </p>
        <div style={comeVisit}>
          <p>Come Visit</p>
        </div>
        <div style={address}>
          <p>7618 NE Hazel Dell Ave. Vancouver, Washington</p>
          <p>360.605.6447</p>
          <p>emsesthetics@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

const comeVisit = {
  fontWeight: 'bold',
  fontSize: '20px',
  textAlign: 'center'
};

const address = {
  fontWeight: 'bold',
  textAlign: 'center'
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
  marginLeft: '20%',
  marginRight: '20%'
};

export default Home;
