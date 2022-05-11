import { Grid, Typography } from '@mui/material';
import {SlideInRight} from '../../../../Effects/SlideInRight'


function Title({ title, txtColor }) {
  return (
    <Grid sx={{ textAlign: 'center', textShadow: '2px 2px #fff', mt: 3 }} container>
      <Grid item xs={12}>
        <SlideInRight>

        <Typography
          sx={{
            pt: {
              xs: 2,
              m: 1,
            },
            fontFamily: 'IBM Plex Mono',
            color: txtColor,
            textAlign: 'center',
            fontWeight: '400',
            textShadow: '1px 1px 3px rgba(150, 150, 150, .7)',
            fontSize: {
              xs: '2em', // theme.breakpoints.up('xs')
              sm: '2.2em', // theme.breakpoints.up('sm')
              md: '2.4em', // theme.breakpoints.up('md')
              lg: '2.5em', // theme.breakpoints.up('lg')
              xl: '3em', // theme.breakpoints.up('xl')
            },
          }}
          variant='h2'
        >
          {title.toUpperCase()}
        </Typography>
        </SlideInRight>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={4} />
          <Grid item xs={4}>
            <Grid container sx={{pb: 4}}>
            </Grid>
          </Grid>
          <Grid item xs={4} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Title;
