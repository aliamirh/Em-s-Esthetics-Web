import React from 'react';

const Bottomer = () => {
  return (
    <div>
      <hr></hr>
      <div style={marginContent}>
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
export default Bottomer;
