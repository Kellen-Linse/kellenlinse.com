import { Grid, Paper, Stack, Typography } from '@mui/material';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import particlesOptions from '../../../../WelcomeScreen/particles.json';
import Title from '../../Shared_Components/Title';

import bgImage from '../images/circuit_board_cropped.jpg';
import profileImage from '../images/Profile_Large.jpg';

const styles = {
  bgPaper: {
    // backgroundImage: `url(${bgImage})`,
    backgroundColor: 'black',
    backgroundSize: 'cover',
    minHeight: '800px',
  },
  imgPaper: {
    backgroundImage: `url(${profileImage})`,
    height: 300,
    width: 300,
    borderRadius: '50%',
    margin: '28px',
    backgroundSize: 'cover',
  },
  infoPaper: {
    textAlign: 'center',
    borderRadius: '20%',
    border: '5px solid #00e676',
    maxWidth: '400px',
  },
};

function About() {

  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
      <><Particles options={ particlesOptions } init={ particlesInit } /><Grid container>
          <Grid id='about' item xs={ 12 }>
            <Title title='ABOUT' />
          </Grid>
          <Grid
            item
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            xs={ 12 }
            md={ 6 }
          >
            <Stack
              direction='column'
              justifyContent='center'
              alignItems='center'
              spacing={ 2 }
            >
              <Paper  elevation={ 0 } style={ styles.imgPaper } />
              <Paper sx={ { m: 4 } } style={ styles.infoPaper }>
                <Typography sx={ { m: 4 } }>
                  I'm a Seattle based IoT and Full Stack Software Developer, and
                  an interactive visual artist. My growth mindset and constant
                  curiosity have led me to develop a multitude of skills across
                  several disciplines, including low voltage and vehicle
                  electronics, programming and software development, basic CAD
                  design, 3D printing, circuit board design, and product design.
                </Typography>
              </Paper>
            </Stack>
          </Grid>
          <Grid
            item
            container
            direction='column'
            justify='center'
            alignItems='center'
            xs={ 12 }
            md={ 6 }
          ></Grid>
        </Grid></>
  );
}

export default About;
