import { useState } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Main from './Main';
import { darkTheme, lightTheme } from './Theme/theme';

function App() {
  const [light, setLight] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  if(initialLoad){
    disableBodyScroll(document);
    setTimeout(() => {
      enableBodyScroll(document);
      setInitialLoad(false)
    }, 3000);
  }
  
  return (
    <ThemeProvider theme={light ? lightTheme : darkTheme}>
      <CssBaseline />
      <Main lightObj={{ setLight, light }} />
    </ThemeProvider>
  );
}

export default App;
