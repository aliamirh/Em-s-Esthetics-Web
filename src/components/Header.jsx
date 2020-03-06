import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo.jpg';

const Header = () => {
  return (
    <div>
      <img style={headerLogo} src={Logo} alt='logo' />
      <div style={headerLinks}>
        <ul style={linkUnordered}>
          <li style={linkListItem}>
            <Link to='/'>Home</Link>
          </li>
          <li style={linkListItem}>
            <Link to='/services'>Services</Link>
          </li>
          <li style={linkListItem}>
            <Link to='/contact'>Contact</Link>
          </li>
          <li style={linkListItem}>
            <Link to='./portfolio'>Portfolio</Link>
          </li>
        </ul>
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

const linkUnordered = {
  listStyle: 'none'
};

const linkListItem = {
  display: 'inLine',
  padding: '40px'
};

const headerLogo = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  height: '50%',
  width: '40%'
};

export default Header;
