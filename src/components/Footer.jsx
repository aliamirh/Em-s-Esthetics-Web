import React from 'react';

const Footer = () => {
  return (
    <div>
      <div style={backgroundColor}>
        <div style={marginContent}>
          <div style={comeVisit}>
            <p>Come Visit Us</p>
          </div>
          <div style={address}>
            <p>7618 NE Hazel Dell Ave. Vancouver, Washington</p>
            <p>360.605.6447</p>
            <p>emsesthetics@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const backgroundColor = {
  backgroundColor: '#dbdbd9',
  borderTop: '5px double #d3c95d'
};
const marginContent = {
  marginLeft: '20%',
  marginRight: '20%'
};
const comeVisit = {
  fontWeight: 'bold',
  fontSize: '20px',
  textAlign: 'left'
};

const address = {
  fontWeight: 'bold',
  textAlign: 'left'
};
export default Footer;
