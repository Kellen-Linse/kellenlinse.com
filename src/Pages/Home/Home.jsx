import Footer from './Components/HomeBody/Footer/Footer';
import HeaderAppBar from './Components/AppBar/HeaderAppBar';
import HomeBody from './Components/HomeBody/HomeBody';


function Home({lightObj, setWelcome}) {
  return ( 
  <>
    <HeaderAppBar lightObj={lightObj} setWelcome={setWelcome} position="fixed" />
    <HomeBody />
    <Footer />
  </> 
  );
}

export default Home;