import { Typography, Grid, Button, Container } from '@mui/material';
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import particlesOptions from './particles.json';

function WelcomeScreen({ setWelcome }) {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <>
      <Particles options={particlesOptions} init={particlesInit} />
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justifyContent='center'
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={3} align='center'>
          <Typography
            color='white'
            variant='h4'
            sx={{
              textAlign: 'center',
              fontSize: {
                xs: '1.2em', // theme.breakpoints.up('xs')
                sm: '1.4em', // theme.breakpoints.up('sm')
                md: '2em', // theme.breakpoints.up('md')
                lg: '2.5em', // theme.breakpoints.up('lg')
                xl: '3em', // theme.breakpoints.up('xl')
              },
            }}
          >
            Hello, I'm{' '}
            <span style={{ color: '#26c6da', fontWeight: 'bold' }}>
              Kellen Linse
            </span>
            .
          </Typography>
          <Typography
            color='white'
            variant='h4'
            sx={{
              textAlign: 'center',
              fontSize: {
                xs: '1.2em', // theme.breakpoints.up('xs')
                sm: '1.4em', // theme.breakpoints.up('sm')
                md: '2em', // theme.breakpoints.up('md')
                lg: '2.5em', // theme.breakpoints.up('lg')
                xl: '3em', // theme.breakpoints.up('xl')
              },
            }}
          >
            Internet of Things and Full Stack software developer.
          </Typography>
          <Typography
            color='white'
            variant='h4'
            sx={{
              textAlign: 'center',
              fontSize: {
                xs: '1.2em', // theme.breakpoints.up('xs')
                sm: '1.4em', // theme.breakpoints.up('sm')
                md: '2em', // theme.breakpoints.up('md')
                lg: '2.5em', // theme.breakpoints.up('lg')
                xl: '3em', // theme.breakpoints.up('xl')
              },
            }}
          >
            Interactive and visual artist.
          </Typography>
          <Button
            variant='outlined'
            size='large'
            sx={{
              color: 'white',
              borderColor: 'white',
              fontSize: {
                xs: '1.2em', // theme.breakpoints.up('xs')
                sm: '1.4em', // theme.breakpoints.up('sm')
                md: '2em', // theme.breakpoints.up('md')
                lg: '2.5em', // theme.breakpoints.up('lg')
                xl: '3em', // theme.breakpoints.up('xl')
              },
              m: 3,
              borderWidth: 2,
            }}
            onClick={() => setWelcome(false)}
          >
            Enter
          </Button>
        </Grid>
        <Grid item xs={1}></Grid>
        <Container
          sx={{
            position: 'fixed',
            mb: 5,
            bottom: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Typography
            color='white'
            variant='h4'
            sx={{
              textAlign: 'center',
              fontSize: {
                xs: '1.2em', // theme.breakpoints.up('xs')
                sm: '1.4em', // theme.breakpoints.up('sm')
                md: '1.4em', // theme.breakpoints.up('md')
                lg: '1.8em', // theme.breakpoints.up('lg')
                xl: '2em', // theme.breakpoints.up('xl')
              },
            }}
          >
            Click anywhere to make more particles!
          </Typography>
        </Container>
      </Grid>
    </>
  );
}

export default WelcomeScreen;
