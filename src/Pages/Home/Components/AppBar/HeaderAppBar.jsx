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
      sx={{ borderBottom: 3, borderColor: 'secondary.main' }}
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
            Kellen Linse
          </Typography>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'end',
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
                color='inherit'
                sx={{ fontFamily: 'IBM Plex Mono', px: 3 }}
              >
                About
              </Button>
            </Link>
            <Link to='projects' offset={-70} spy={true} smooth={true}>
              <Button
                color='inherit'
                sx={{ fontFamily: 'IBM Plex Mono', px: 3 }}
              >
                Projects
              </Button>
            </Link>
            <Link to='resume' offset={-70} spy={true} smooth={true}>
              <Button
                color='inherit'
                sx={{ fontFamily: 'IBM Plex Mono', px: 3 }}
              >
                Resume
              </Button>
            </Link>
            <Link to='contact' offset={-70} spy={true} smooth={true}>
              <Button
                color='inherit'
                sx={{ fontFamily: 'IBM Plex Mono', px: 3 }}
              >
                Contact
              </Button>
            </Link>
            <Divider sx={{ mt: 1}} />
            <Button
              onClick={() => lightObj.setLight(!lightObj.light)}
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
          }}
        >
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
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default HeaderAppBar;
