import { Typography, Grid, Button, Container } from '@mui/material';

import React from 'react';
import { Bouncer } from '../../Effects/Bouncer';
import { FadeInLeft } from '../../Effects/FadeInLeft';
import { FadeInRight } from '../../Effects/FadeInRight';
import { ZoomIn } from '../../Effects/ZoomIn';

const clickContainerSX = {
  position: 'fixed',
  mb: 5,
  bottom: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
};

function WelcomeScreen({ setWelcome }) {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justifyContent='center'
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={3} align='center'>
          <WelcomeMessage />
          <ZoomIn duration={2}>
            <EnterButton setWelcome={setWelcome} />
          </ZoomIn>
        </Grid>
        <Grid item xs={1}></Grid>
        <Container sx={clickContainerSX}>
          <Bouncer delay={4}>
            <ClickPrompt />
          </Bouncer>
        </Container>
      </Grid>
    </>
  );
}

export default WelcomeScreen;

function ClickPrompt() {
  return (
    <Typography
      color='white'
      variant='h4'
      sx={{
        textAlign: 'center',
        fontSize: {
          xs: '1.2em',
          // theme.breakpoints.up('xs')
          sm: '1.4em',
          // theme.breakpoints.up('sm')
          md: '1.4em',
          // theme.breakpoints.up('md')
          lg: '1.8em',
          // theme.breakpoints.up('lg')
          xl: '2em', // theme.breakpoints.up('xl')
        },
      }}
    >
      Click anywhere to make more particles!
    </Typography>
  );
}

function WelcomeMessage() {
  return (
    <>
      <FadeInLeft>
        <Typography
          color='white'
          variant='h4'
          sx={{
            textAlign: 'center',
            fontSize: {
              xs: '1.2em',
              // theme.breakpoints.up('xs')
              sm: '1.4em',
              // theme.breakpoints.up('sm')
              md: '2em',
              // theme.breakpoints.up('md')
              lg: '2.5em',
              // theme.breakpoints.up('lg')
              xl: '3em', // theme.breakpoints.up('xl')
            },
          }}
        >
          Hello, I'm{' '}
          <span
            style={{
              color: '#26c6da',
              fontWeight: 'bold',
            }}
          >
            Kellen Linse
          </span>
          .
        </Typography>
      </FadeInLeft>
      <FadeInRight>
        <Typography
          color='white'
          variant='h4'
          sx={{
            textAlign: 'center',
            fontSize: {
              xs: '1.2em',
              // theme.breakpoints.up('xs')
              sm: '1.4em',
              // theme.breakpoints.up('sm')
              md: '2em',
              // theme.breakpoints.up('md')
              lg: '2.5em',
              // theme.breakpoints.up('lg')
              xl: '3em', // theme.breakpoints.up('xl')
            },
          }}
        >
          Internet of Things and Full Stack software developer.
        </Typography>
      </FadeInRight>
      <FadeInRight duration={2}>
        <Typography
          color='white'
          variant='h4'
          sx={{
            textAlign: 'center',
            fontSize: {
              xs: '1.2em',
              // theme.breakpoints.up('xs')
              sm: '1.4em',
              // theme.breakpoints.up('sm')
              md: '2em',
              // theme.breakpoints.up('md')
              lg: '2.5em',
              // theme.breakpoints.up('lg')
              xl: '3em', // theme.breakpoints.up('xl')
            },
          }}
        >
          Interactive and visual artist.
        </Typography>
      </FadeInRight>
    </>
  );
}

function EnterButton({ setWelcome }) {
  return (
    <Button
      variant='outlined'
      size='large'
      sx={{
        color: 'white',
        borderColor: 'white',
        fontSize: {
          xs: '1.2em',
          // theme.breakpoints.up('xs')
          sm: '1.4em',
          // theme.breakpoints.up('sm')
          md: '2em',
          // theme.breakpoints.up('md')
          lg: '2.5em',
          // theme.breakpoints.up('lg')
          xl: '3em', // theme.breakpoints.up('xl')
        },
        m: 3,
        borderWidth: 2,
      }}
      onClick={() => setWelcome(false)}
    >
      Enter
    </Button>
  );
}
