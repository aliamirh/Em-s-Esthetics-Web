import React from 'react';
import { Link } from 'react-router-dom';
import Img from './src/Img/logo.jpg';

console.log('hello', Img);

const Header = () => {
  return (
    <div>
      <div>
        <img src={Img} alt='logo' />
      </div>
      <h1 style={headerLogo}>Em's Esthetics </h1>
      <div style={headerLinks}>
        <Link to='/'>Home</Link> | <Link to='/services'>Services</Link> |
        <Link to='/contact'>Contact</Link> |
        <Link to='./portfolio'>Portfolio</Link>
      </div>
    </div>
  );
};

const headerLinks = {
  textAlign: 'center',
  backgroundColor: '#a7cdd1'
};

const headerLogo = {
  textAlign: 'center'
};

export default Header;
