import React from 'react';
import { bounce } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

export const Bouncer = ({ children, delay=0 }) => {
  const styles = {
    bounce: {
      animation: '2 1s',
      animationName: Radium.keyframes(bounce, 'bounce'),
      animationDelay: `${delay}s`
    },
  };

  return (
    <StyleRoot>
      <div className='bouncer' style={ styles.bounce }>{ children }</div>
    </StyleRoot>
  );
};
