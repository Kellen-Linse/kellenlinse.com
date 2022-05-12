import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Main from './Pages/Main';
import { darkTheme, lightTheme } from './Theme/theme';

function App() {
  const [light, setLight] = useState(false);

  return (
    <ThemeProvider theme={light ? lightTheme : darkTheme}>
      <CssBaseline />
      <Main lightObj={{ setLight, light }} />
    </ThemeProvider>
  );
}

export default App;
