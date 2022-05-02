import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Main from './Main';

export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#26c6da',
    },
    secondary: {
      main: '#00e676',
    },
    iconColor:{
      main: 'rgba(0,0,0,0.87)',
    },
    background: {
      default: '#303030',
      paper: '#424242',
    },
    text: {
      primary: '#ffffff',
    },
    Typography: {
      fontFamily: 'Quicksand'
    }
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
    iconColor:{
      main: '#ffffff',
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
    },
  },
});


function App() {
  const [light, setLight] = useState(false);
  return (
    <ThemeProvider theme={light ? lightTheme : darkTheme}>
      <CssBaseline />
      <Main lightObj={{setLight, light}} />
    </ThemeProvider>
  );
}

export default App;
