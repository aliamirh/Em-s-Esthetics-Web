import React from 'react';
import merch from '../products/product4.jpg';

const Merch = () => {
  return (
    <div>
      <p style={divContentMargin}>Merch</p>
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
