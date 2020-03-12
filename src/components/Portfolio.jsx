import React from 'react';
import client from '../clients/client.jpg';
import client2 from '../clients/client2.jpg';
import client3 from '../clients/client3.jpg';
import client4 from '../clients/client4.jpg';
import client5 from '../clients/client5.jpg';
import client6 from '../clients/client6.jpg';
import client7 from '../clients/client7.jpg';
import client8 from '../clients/client8.jpg';
import client9 from '../clients/client9.jpeg';
import client10 from '../clients/client10.jpeg';
import client11 from '../clients/client11.jpeg';
import client12 from '../clients/client12.jpg';

import wedding from '../wedding/wedding.jpg';
import wedding2 from '../wedding/wedding2.jpg';

import { useSpring, animated } from 'react-spring';

const Portfolio = () => {
  const fade = useSpring({
    opacity: 1,
    config: { duration: 800 },
    from: { opacitey: 0 }
  });

  return (
    <div style={divContentMargin}>
      <animated.div style={fade}>
        <p style={headerFont}>Models</p>
        <div>
          <img style={scaleClientImages} src={client} alt='client' />
          <img style={scaleClientImages} src={client2} alt='client2' />
          <img style={scaleClientImages} src={client3} alt='client3' />
          <img style={scaleClientImages} src={client4} alt='client4' />
          <img style={scaleClientImages} src={client5} alt='client5' />
          <img style={scaleClientImages} src={client6} alt='client6' />
          <img style={scaleClientImages} src={client7} alt='client7' />
          <img style={scaleClientImages} src={client8} alt='client8' />
          <img style={scaleClientImages} src={client9} alt='client9' />
          <img style={scaleClientImages} src={client10} alt='client10' />
          <img style={scaleClientImages} src={client11} alt='client11' />
          <img style={scaleClientImages} src={client12} alt='client12' />
        </div>
      </animated.div>
      <animated.div style={fade}>
        <div>
          <p style={headerFont}>Weddings</p>
        </div>
        <img style={scaleClientImages} src={wedding} alt='wedding' />
        <img style={scaleClientImages} src={wedding2} alt='wedding2' />
        <div></div>
      </animated.div>
    </div>
  );
};

const divContentMargin = {
  fontFamily: 'Roboto, sans-serif',
  color: '#545454',
  marginRight: '10%',
  marginLeft: '10%'
};

const headerFont = {
  textAlign: 'center',
  fontSize: '30px'
};

const scaleClientImages = {
  objectFit: 'cover',
  textAlign: 'center',
  width: '300px',
  height: '300px',
  padding: '10px'
};

export default Portfolio;
