import { Grid, Paper, Typography } from '@mui/material';
import Title from '../../Shared_Components/Title';

import bgImage from '../images/circuit_board_cropped.jpg';
import profileImage from '../images/Profile_Large.jpg';

const styles = {
  bgPaper: {
    backgroundImage: `url(${bgImage})`,
    height: 560,
    backgroundSize: 'cover',
  },
  imgPaper: {
    border: '5px solid #00e676',
    backgroundImage: `url(${profileImage})`,
    height: 300,
    width: 300,
    borderRadius: '50%',
    margin: '28px',
    backgroundSize: 'cover',
  },
  infoPaper: {
    backgroundColor: 'grey',
    color: 'white',
    textAlign: 'center',
    borderRadius: '20%',
    border: '5px solid #00e676',
    maxWidth: '400px'
  },
};

function About() {
  return (
    <Paper id='about' elevation={0} style={styles.bgPaper}>
      <Grid container>
        <Grid item xs={12}>
          <Title title='ABOUT' />
        </Grid>
        <Grid
          item
          container
          direction='column'
          justify='center'
          alignItems='center'
          xs={12}
          md={6}
        >
          <Paper id='about' elevation={0} style={styles.imgPaper} />
        </Grid>
        <Grid
          item
          container
          direction='column'
          justify='center'
          alignItems='center'
          xs={12}
          md={6}
        >
          <Paper sx={{ m: 4 }} style={styles.infoPaper}>
            <Typography sx={{ m: 4 }} >
              Kellen is a Seattle based IoT and Full Stack Software Developer,
              with a keen interest in visual and interactive arts. His growth
              mindset and constant curiosity have led him to develop a multitude
              of skills across several disciplines, including low voltage and
              vehicle electronics, programming and software development, basic
              CAD design, 3D printing, circuit board design, circuit board
              manufacturing, product design, and interactive art.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default About;
