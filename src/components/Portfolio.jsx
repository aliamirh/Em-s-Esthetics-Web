import React from 'react';
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
      </animated.div>
    </div>
  );
};

export default Portfolio;
