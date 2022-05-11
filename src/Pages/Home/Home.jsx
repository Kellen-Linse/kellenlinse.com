import Footer from './Components/HomeBody/Footer/Footer';
import HeaderAppBar from './Components/AppBar/HeaderAppBar';
import HomeBody from './Components/HomeBody/HomeBody';
import { Box } from '@mui/system';

const homeBodySX = {
  width: '100%',
  height: '100%',
  margin: 0,
  overflow: 'hidden',
};


function Home({lightObj, setWelcome}) {
  return ( 
  <Box sx={homeBodySX}>
    <HeaderAppBar lightObj={lightObj} setWelcome={setWelcome}/>
    <HomeBody />
    <Footer />
  </Box> 
  );
}

export default Home;