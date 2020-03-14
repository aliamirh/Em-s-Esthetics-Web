import React from 'react';
import brushset1 from '../products/brushset1.jpg';
import brushset2 from '../products/brushset2.jpg';
import brushset3 from '../products/brushset3.jpg';
import brushset4 from '../products/brushset4.jpg';
import brush1 from '../products/brush1.jpg';
import brush2 from '../products/brush2.jpg';
import brush3 from '../products/brush3.jpg';
import brush4 from '../products/brush4.jpg';

const Merch = () => {
  return (
    <div>
      <div style={alignImg}>
        <p style={divContentMargin}>Brush Sets</p>
        <img style={pictureSize} src={brushset1} alt='brush' />
        <img style={pictureSize} src={brushset2} alt='brush' />
        <img style={pictureSize} src={brushset3} alt='brush' />
        <img style={pictureSize} src={brushset4} alt='brush' />
      </div>
      <div style={alignImg}>
        <p style={divContentMargin}>Single</p>
        <img style={pictureSize} src={brush1} alt='brush' />
        <img style={pictureSize} src={brush2} alt='brush' />
        <img style={pictureSize} src={brush3} alt='brush' />
        <img style={pictureSize} src={brush4} alt='brush' />
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
  padding: '10px',
  borderRadius: '50%'
};

const alignImg = {
  textAlign: 'center'
};

export default Merch;
