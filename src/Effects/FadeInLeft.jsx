import React from 'react';
import { fadeInLeftBig } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

export const FadeInLeft = ({ children, duration=2 }) => {
  const styles = {
    fadeInLeft: {
      animation: `x ${duration}s`,
      animationName: Radium.keyframes(fadeInLeftBig, 'fadeInLeftBig'),
    },
  };

  return (
    <StyleRoot>
      <div className='fade-in-left' style={ styles.fadeInLeft }>{ children }</div>
    </StyleRoot>
  );
};
