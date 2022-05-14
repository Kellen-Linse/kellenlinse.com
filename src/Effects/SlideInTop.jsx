import React from 'react';
import { slideInTop } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

export const SlideInRight = ({ children, delay=0 }) => {
  const styles = {
    slideInRight: {
      animation: 'x 2s',
      animationName: Radium.keyframes(slideInRight, 'slideInRight'),
      animationDelay: `${delay}s`
    },
  };

  return (
    <StyleRoot>
      <div className='slide-in-right' style={ styles.slideInRight }>{ children }</div>
    </StyleRoot>
  );
};
