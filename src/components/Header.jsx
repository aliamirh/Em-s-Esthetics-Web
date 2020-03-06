import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1>Em's Esthetics</h1>
      <div>
        <Link to='/'>Home</Link> | <Link to='/services'>Services</Link> |
        <Link to='/contact'>Contact</Link> |
        <Link to='./portfolio'>Portfolio</Link>
      </div>
    </div>
  );
};

export default Header;
