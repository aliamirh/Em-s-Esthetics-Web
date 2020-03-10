import React from 'react';
import Ems from '../fillerImages/emily.jpg';

const Home = () => {
  return (
    <div style={divContentMargin}>
      <div>
        <img style={emsPhoto} src={Ems} alt='Owner' />
      </div>
      <div>
        <h3>About Em's Esthetics:</h3>
        <p>
          Emily is a Licensed Esthetician who specializes in holistic skincare,
          natural makeup, waxing, plant-based tinting, eyelash extensions and
          essential oils. She was certified for volume lash extensions in May
          2018 and has been licensed in esthetics since May 2015
        </p>
      </div>
      <div>
        <h2>Where Beauty Happens Naturally</h2>
      </div>
    </div>
  );
};

const emsPhoto = {
  width: '40%'
};

const divContentMargin = {
  marginLeft: '20%',
  marginRight: '20%'
};

export default Home;
