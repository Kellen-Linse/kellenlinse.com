import React from 'react';
import { slideInLeft } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

export const SlideInLeft = ({ children, delay = 0 }) => {
  const styles = {
    slideInLeft: {
      animation: 'x 2s',
      animationName: Radium.keyframes(slideInLeft, 'slideInLeft'),
      animationDelay: `${delay}s`,
    },
  };

  return (
    <StyleRoot>
      <div className='slide-in-left' style={styles.slideInLeft}>
        {children}
      </div>
    </StyleRoot>
  );
};
