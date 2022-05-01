import * as React from 'react';
import { Link } from 'react-scroll';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@mui/material';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';

export default function HeaderAppBar({ lightObj, position, setWelcome }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position={position} style={{ borderBottom: '3px solid #00e676' }}>
        <Toolbar>
          <IconButton onClick={() => setWelcome(true)} sx={{ m: 0 }}>
            <DeveloperBoardIcon />
          </IconButton>
          <Typography
            variant='h5'
            component='div'
            sx={{ flexGrow: 1, ml: 0, fontFamily: 'IBM Plex Mono' }}
          >
            Kellen Linse
          </Typography>
          <Link to='top' spy={true} smooth={true}>
            <Button color='inherit' sx={{ fontFamily: 'IBM Plex Mono' }}>
              About
            </Button>
          </Link>
          <Link to='projects' offset={-70} spy={true} smooth={true}>
            <Button color='inherit' sx={{ fontFamily: 'IBM Plex Mono' }}>
              Projects
            </Button>
          </Link>
          <Link to='resume' offset={-70} spy={true} smooth={true}>
            <Button color='inherit' sx={{ fontFamily: 'IBM Plex Mono' }}>
              Resume
            </Button>
          </Link>
          <Link to='contact' offset={-70} spy={true} smooth={true}>
            <Button color='inherit' sx={{ fontFamily: 'IBM Plex Mono' }}>
              Contact
            </Button>
          </Link>
          <Button
            onClick={() => lightObj.setLight(!lightObj.light)}
            color='inherit'
          >
            {lightObj.light ? <DarkModeIcon /> : <LightModeIcon />}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
