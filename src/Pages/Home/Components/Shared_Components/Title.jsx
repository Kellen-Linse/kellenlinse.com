import { Grid, Typography, Paper } from '@mui/material';

function Title({ title }) {
  return (
    <Grid style={{ textAlign: 'center', textShadow: '2px 2px #fff' }} container>
      <Grid item xs={12}>
        <Typography
          sx={{
            pt: {
              xs: 2,
              m: 1,
            },
            color: '#00e676',
            textAlign: 'center',
            fontWeight: '400',
            textShadow: '1px 1px 2px rgba(0, 0, 0, .7)',
            fontSize: {
              xs: '2em', // theme.breakpoints.up('xs')
              sm: '2em', // theme.breakpoints.up('sm')
              md: '2em', // theme.breakpoints.up('md')
              lg: '2.5em', // theme.breakpoints.up('lg')
              xl: '3em', // theme.breakpoints.up('xl')
            },
          }}
          variant='h2'
        >
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={4} />
          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={1} md={4} lg={4} xl={4}/>
              <Grid item xs={10} md={4} lg={4} xl={4} >
                <Paper style={{ backgroundColor: '#00e676', height: '3px' }} />
              </Grid>
              <Grid item xs={1} md={4} lg={4} xl={4}/>
            </Grid>
          </Grid>
          <Grid item xs={4} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Title;
