import { Grid, Stack } from '@mui/material';

import { SlideInLeft } from '../../../../../Effects/SlideInLeft';
import Title from '../../Shared_Components/Title';
import Bio from './Components/Bio';
import Headshot from './Components/Headshot';
import Skills from './Components/Skills';

function About() {
  return (
    <Grid id='about' container minHeight={1000} alignItems='stretch'>
      <Title title='<ABOUT />' txtColor='primary.main' />
      <Grid
        item
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        height={'100%'}
        xs={12}
        md={6}
        minHeight={900}
      >
        <Stack
          height={'100%'}
          direction='column'
          justifyContent='space-between'
          alignItems='center'
        >
          <SlideInLeft>
            <Headshot />
          </SlideInLeft>
          <Bio />
        </Stack>
      </Grid>
      <Grid
        item
        container
        direction='column'
        justify='center'
        alignItems='center'
        xs={12}
        md={6}
        sx={{
          mb: 5,
        }}
      >
        <Skills />
      </Grid>
    </Grid>
  );
}

export default About;
