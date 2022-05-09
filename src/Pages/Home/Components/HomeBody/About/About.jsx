import { Grid, Paper, Stack } from '@mui/material';
import Title from '../../Shared_Components/Title';
import profileImage from '../images/Profile_Large.jpg';
import Bio from './Components/Bio';

const styles = {
  bgPaper: {
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
};

function About() {



  return (
      <><Grid container>
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
              <Bio />
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
