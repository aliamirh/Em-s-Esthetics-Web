import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo.jpg';
import { Spring } from 'react-spring/renderprops';

const Header = () => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {props => (
        <div style={props}>
          <img style={headerLogo} src={Logo} alt='logo' />
          <div style={headerLinksDiv}>
            <ul style={linkUnordered}>
              <li style={linkListItem}>
                <Link style={linkTo} to='/'>
                  Home
                </Link>
              </li>
              <li style={linkListItem}>
                <Link style={linkTo} to='/services'>
                  Services
                </Link>
              </li>
              <li style={linkListItem}>
                <Link style={linkTo} to='/contact'>
                  Contact
                </Link>
              </li>
              <li style={linkListItem}>
                <Link style={linkTo} to='./portfolio'>
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Spring>
  );
};

const headerLinksDiv = {
  textAlign: 'center',
  backgroundColor: '#72a675',
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

const linkTo = {
  color: 'white',
  textDecoration: 'none'
};

const headerLogo = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  height: '50%',
  width: '40%'
};

export default Header;
