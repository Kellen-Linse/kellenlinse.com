import styled from '@emotion/styled';
import { Box } from '@mui/material';

import Image from '../images/circuit_board.jpg'

const styles = {
  imgPaper: {
      backgroundImage: `url(${Image})`,
      height: 500,
  }
};

function HomeBody() {
  const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

  return (
    <>
      <Offset id='top' />
      <Box id='about' elevation={0} style={styles.imgPaper}>
      <div style={{color: 'white'}} >
        <h1>This is About section</h1>
        To Do: resize the background image...
      </div>
      </ Box>

      <div id='projects' style={{ height: 500 }}>
        <h1>This is Projects section</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
        repellendus. Totam nihil similique a repellat minus dolor amet quasi.
        Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
      </div>
      <div id='resume' style={{ height: 500 }}>
        <h1>This is Resume section</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
        repellendus. Totam nihil similique a repellat minus dolor amet quasi.
        Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
      </div>
      <div id='contact' style={{ height: 500 }}>
        <h1>This is Contact section</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
        repellendus. Totam nihil similique a repellat minus dolor amet quasi.
        Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
      </div>
    </>
  );
}

export default HomeBody;
