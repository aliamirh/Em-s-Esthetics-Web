import React from 'react';
import Ems from '../fillerImages/emily.jpg';

const Home = () => {
  return (
    <div>
      <div>
        <img style={emsPhoto} src={Ems} alt='Owner' />
        <div style={textOverflow}>
          <h2>T.Emily Amirhamzeh</h2>
        </div>
      </div>
    </div>
  );
};

const emsPhoto = {
  width: '20%',
  borderRadius: '20%'
};

const textOverflow = {
  position: 'absolute',
  top: '68%',
  left: '10%',
  transform: 'translate(-50%, -50%)',
  fontSize: '27px',
  paddingLeft: '2px',
  color: '#72a675'
};

export default Home;
