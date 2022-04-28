import { Paper, Typography } from '@mui/material';

import Image from '../images/circuit_board_cropped.jpg';

const styles = {
  imgPaper: {
    backgroundImage: `url(${Image})`,
    height: 500,
    backgroundSize: 'cover',
  },
  sectionHeaderSX: {},
};

function About() {
  return (
    <Paper id='about' elevation={0} style={styles.imgPaper}>
      <div style={{ color: 'white' }}>
        <Typography variant='h2'>About</Typography>
        {/* <h1>This is About section</h1> */}
        To Do: resize the background image...
      </div>
    </Paper>
  );
}

export default About;
