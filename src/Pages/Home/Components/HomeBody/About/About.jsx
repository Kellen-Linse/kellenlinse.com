import { Grid, Stack } from '@mui/material';
import Title from '../../Shared_Components/Title';
import Bio from './Components/Bio';
import Headshot from './Components/Headshot';

function About() {
  return (
    <Grid 
      id='about' 
      container 
      minHeight={1000} 
      alignItems='stretch'>
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
          <Headshot />
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
      ></Grid>
    </Grid>
  );
}

export default About;
