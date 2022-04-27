import Main from './Main';
import { ThemeProvider } from '@mui/system';

export const theme = {
  palette: {
    type: 'dark',
    primary: {
      main: '#26c6da',
    },
    secondary: {
      main: '#00e676',
    },
  },
};

function App() {
  return <Main />
}

export default App;
