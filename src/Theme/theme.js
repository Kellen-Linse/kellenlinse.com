import {createTheme } from '@mui/material/styles';


export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#26c6da',
    },
    secondary: {
      main: '#00e676',
    },
    iconColor: {
      main: 'rgba(0,0,0,0.87)',
    },
    background: {
      default: '#303030',
      paper: '#424242',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(0,0,0,0.87)',
    },
    Typography: {
      fontFamily: 'Quicksand',
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#00e676',
    },
    secondary: {
      main: '#26c6da',
    },
    iconColor: {
      main: '#ffffff',
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
      secondary: '#ffffff',
    },
  },
});