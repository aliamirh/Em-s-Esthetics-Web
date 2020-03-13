import React from 'react';
import brushset1 from '../products/brushset1.jpg';
import brushset2 from '../products/brushset2.jpg';
import brushset3 from '../products/brushset3.jpg';
const Merch = () => {
  return (
    <div>
      <div style={alignImg}>
        <p style={divContentMargin}>Merch</p>
        <img style={pictureSize} src={brushset1} alt='brush' />
        <img style={pictureSize} src={brushset2} alt='brush' />
        <img style={pictureSize} src={brushset3} alt='brush' />
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
  height: '40%',
  padding: '10px'
};

const alignImg = {
  textAlign: 'center'
};

export default Merch;
