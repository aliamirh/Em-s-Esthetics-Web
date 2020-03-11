import React from 'react';
import { useSpring, animated } from 'react-spring';

const Portfolio = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div>
      <h1>Portfolio</h1>
    </div>
  );
};

export default Portfolio;
