import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo.jpg';

const Header = () => {
  return (
    <div>
      <img style={headerLogo} src={Logo} alt='logo' />

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
  backgroundColor: '#faf0e6',
  fontSize: '25px',
  fontFamily: 'Roboto, sans-serif'
};

const headerLogo = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  height: '50%',
  width: '40%'
};

export default Header;
