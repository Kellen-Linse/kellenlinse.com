import React from 'react';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

export const FadeIn = ({ children, delay=0, duration=2 }) => {
  const styles = {
    fadeIn: {
      animation: `x ${duration}s`,
      animationName: Radium.keyframes(fadeIn, 'fadeIn'),
      animationDelay: `${delay}s`
    },
  };

  return (
    <StyleRoot>
      <div className='fade-in' style={ styles.fadeIn }>{ children }</div>
    </StyleRoot>
  );
};
