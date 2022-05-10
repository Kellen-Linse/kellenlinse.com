import { useState } from 'react';
import {
  Button,
  Divider,
  Menu,
  Typography,
  IconButton,
  Toolbar,
  Box,
  AppBar,
} from '@mui/material';
import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';

import './active.css';
const buttonStyling = {
  transition: 'transform 0.15s ease-in-out',
  '&:hover': { transform: 'scale3d(1.05, 1.05, 1)' },
  fontFamily: 'IBM Plex Mono',
  fontSize: '1.3em' 
};

const HeaderAppBar = ({ lightObj, setWelcome }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position='fixed'
      sx={{ borderBottom: 3, borderColor: 'secondary.main'}}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <IconButton
            onClick={() => setWelcome(true)}
            size='large'
            sx={{ m: 0, color: 'secondary.main' }}
          >
            <DeveloperBoardIcon />
          </IconButton>
          <Typography
            variant='h5'
            component='div'
            sx={{ flexGrow: 1, ml: 0, fontFamily: 'IBM Plex Mono' }}
          >
            KELLEN LINSE
          </Typography>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'end',
            mr: {
              xs: 2,
              sm: 1
            }
          }}
        >
          <IconButton onClick={handleOpenNavMenu} color='inherit'>
            <MenuIcon />
          </IconButton>
          <Menu
            id='menu-appbar'
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'flex', md: 'none' },
              mr: 1,
              maxWidth: 250,
            }}
          >
            <Link to='top' spy={true} smooth={true}>
              <Button
                onClick={() => handleCloseNavMenu()}
                color='inherit'
                sx={buttonStyling}
              >
                About
              </Button>
            </Link>
            <Link to='projects' offset={-70} spy={true} smooth={true}>
              <Button
                onClick={() => handleCloseNavMenu()}
                color='inherit'
                sx={buttonStyling}
              >
                Projects
              </Button>
            </Link>
            <Link to='resume' offset={-70} spy={true} smooth={true}>
              <Button
                onClick={() => handleCloseNavMenu()}
                color='inherit'
                sx={buttonStyling}
              >
                Resume
              </Button>
            </Link>
            <Link to='contact' offset={-70} spy={true} smooth={true}>
              <Button
                onClick={() => handleCloseNavMenu()}
                color='inherit'
                sx={buttonStyling}
              >
                Contact
              </Button>
            </Link>
            <Divider sx={{ mt: 1 }} />
            <Button
              onClick={() => {
                lightObj.setLight(!lightObj.light);
                handleCloseNavMenu();
              }}
              color='secondary'
              variant='outlined'
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
                mx: 5,
                mt: 1,
              }}
            >
              {lightObj.light ? <DarkModeIcon /> : <LightModeIcon />}
            </Button>
          </Menu>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'end',
            alignItems: 'center',
          }}
        >
          <Link
            isDynamic
            activeClass='active'
            to='top'
            spy={true}
            smooth={true}
          >
            <Button
              color='inherit'
              sx={buttonStyling}
            >
              About
            </Button>
          </Link>
          <Link
            isDynamic
            activeClass='active'
            to='projects'
            offset={-70}
            spy={true}
            smooth={true}
          >
            <Button
              color='inherit'
              sx={buttonStyling}
            >
              Projects
            </Button>
          </Link>
          <Link
            isDynamic
            activeClass='active'
            to='resume'
            offset={-70}
            spy={true}
            smooth={true}
          >
            <Button
              color='inherit'
              sx={buttonStyling}
            >
              Resume
            </Button>
          </Link>
          <Link
            isDynamic
            activeClass='active'
            to='contact'
            offset={-70}
            spy={true}
            smooth={true}
          >
            <Button
              color='inherit'
              sx={buttonStyling}
            >
              Contact
            </Button>
          </Link>
          <Button
          sx={buttonStyling}
            onClick={() => lightObj.setLight(!lightObj.light)}
            color='inherit'
          >
            {lightObj.light ? <DarkModeIcon /> : <LightModeIcon />}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default HeaderAppBar;
