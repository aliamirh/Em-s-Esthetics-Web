import React from 'react';
import merch from '../products/brushset2.jpg';

const Merch = () => {
  return (
    <div>
      <p style={divContentMargin}>Merch</p>
      <img src={merch} alt='brush' />
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
export default Merch;
