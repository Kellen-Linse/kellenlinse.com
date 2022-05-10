import React from 'react';
import { fadeInRightBig } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

export const FadeInRight = ({ children, duration=2 }) => {
  const styles = {
    fadeInRight: {
      animation: `x ${duration}s`,
      animationName: Radium.keyframes(fadeInRightBig, 'fadeInRightBig'),

    },
  };

  return (
    <StyleRoot>
      <div className='test' style={ styles.fadeInRight }>{ children }</div>
    </StyleRoot>
  );
};
