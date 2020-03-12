import React from 'react';
import client from '../clients/client.jpg';
import client1 from '../clients/client2.jpg';
import client2 from '../clients/client3.jpg';
import client3 from '../clients/client4.jpg';
import client4 from '../clients/client5.jpg';
import wedding from '../wedding/wedding.jpg';
import wedding2 from '../wedding/wedding2.jpg';

import { useSpring, animated } from 'react-spring';

const Portfolio = () => {
  const fade = useSpring({
    opacity: 1,
    config: { duration: 800 },
    from: { opacity: 0 }
  });

  return (
    <div>
      <animated.div style={fade}>
        <h1>Portfolio</h1>
        <div>
          <img style={scaleClientImages} src={client} alt='client' />
          <img style={scaleClientImages} src={client1} alt='client2' />
          <img style={scaleClientImages} src={client2} alt='client3' />
          <img style={scaleClientImages} src={client3} alt='client4' />
          <img style={scaleClientImages} src={client4} alt='client5' />
        </div>

        <div>
          <h1>Weddings</h1>
        </div>
        <img style={scaleClientImages} src={wedding} alt='wedding' />
        <img style={scaleClientImages} src={wedding2} alt='wedding2' />
        <div></div>
      </animated.div>
    </div>
  );
};

const scaleClientImages = {
  objectFit: 'cover',
  width: '300px',
  height: '300px',
  padding: '10px'
};

export default Portfolio;
