import React from 'react';
import merch from '../products/brushset2.jpg';

const Merch = () => {
  return (
    <div>
      <div style={alignImg}>
        <p style={divContentMargin}>Merch</p>
        <img style={pictureSize} src={merch} alt='brush' />
      </div>
    </div>
  );
};

const divContentMargin = {
  fontFamily: 'Roboto, sans-serif',
  color: '#545454',
  marginRight: '10%',
  marginLeft: '10%',
  fontSize: '30px',
  textAlign: 'center'
};

const pictureSize = {
  width: '20%',
  height: '40%'
};

const alignImg = {
  textAlign: 'center'
};

export default Merch;
