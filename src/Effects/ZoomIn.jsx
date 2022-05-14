import { zoomIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

export const ZoomIn = ({ children, duration=2 }) => {
  const styles = {
    zoomIn: {
      animation: `x ${duration}s`,
      animationName: Radium.keyframes(zoomIn, 'zoomIn'),
    },
  };

  return (
    <StyleRoot>
      <div className='zoom-in' style={ styles.zoomIn }>{ children }</div>
    </StyleRoot>
  );
};
