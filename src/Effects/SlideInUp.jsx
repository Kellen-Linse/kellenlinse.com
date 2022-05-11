import React from 'react';
import { slideInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

export const SlideInUp = ({ children, delay=0 }) => {
  const styles = {
    slideInUp: {
      animation: 'x 2s',
      animationName: Radium.keyframes(slideInUp, 'slideInUp'),
      animationDelay: `${delay}s`
    },
  };

  return (
    <StyleRoot>
      <div className='test' style={ styles.slideInUp }>{ children }</div>
    </StyleRoot>
  );
};
