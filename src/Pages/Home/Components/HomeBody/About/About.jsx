import { Grid, Paper } from '@mui/material';
import Title from '../../Shared_Components/Title';

import Image from '../images/circuit_board_cropped.jpg';

const styles = {
  imgPaper: {
    backgroundImage: `url(${Image})`,
    height: 800,
    backgroundSize: 'cover',
  },
};

function About() {
  return (
    <Paper id='about' elevation={0} style={styles.imgPaper}>

      <Grid container>
        <Grid item xs={12}>
          <Title title='ABOUT' />
        </Grid>
      </Grid>
      <div style={{ color: 'white' }}>
        
        {/* <h1>This is About section</h1> */}
        To Do: resize the background image...
      </div>
    </Paper>
  );
}

export default About;
