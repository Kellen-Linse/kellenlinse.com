import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';

export default function HeaderAppBar({lightObj}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{borderBottom: "3px solid #00e676"}}>
        <Toolbar>
          <DeveloperBoardIcon />
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, ml: 2 }}>
            Kellen Linse
          </Typography>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Resume</Button>
          <Button color="inherit">Contact</Button>
          <Button onClick={() => lightObj.setLight(!lightObj.light)} color="inherit">
            {lightObj.light ? <DarkModeIcon /> : <LightModeIcon /> }
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}