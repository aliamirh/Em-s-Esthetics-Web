import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.jpg';
import Facebook from '../img/facebook.png';
import Instagram from '../img/instagram.png';
import Twitter from '../img/twitter.png';

const Header = () => {
  return (
    <div class='backgroundColor'>
      <img style={headerLogo} src={Logo} alt='logo' />
      <div id='borderHome'>
        <ul style={linkUnordered}>
          <li style={linkListItemSocialMedia}>
            <a href='https://www.facebook.com/EmsEsthetics/'>
              <img style={socialMedia} src={Facebook} alt='facebook' />
            </a>
          </li>
          <li style={linkListItemSocialMedia}>
            <a href='https://www.instagram.com/emsesthetics/'>
              <img style={socialMedia} src={Instagram} alt='instagram' />
            </a>
          </li>
          <li style={linkListItemSocialMedia}>
            <a href='https://twitter.com/emsesthetics'>
              <img style={socialMedia} src={Twitter} alt='twitter' />
            </a>
          </li>
        </ul>
      </div>
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
  );
};

const headerLinksDiv = {
  textAlign: 'center',
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
  color: '#545454',
  textDecoration: 'none'
};

const headerLogo = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: '-70px',
  height: '15%',
  width: '15%'
};
const socialMedia = {
  height: '2%',
  width: '2%'
};

const linkListItemSocialMedia = {
  display: 'inLine',
  padding: '10px'
};

export default Header;
