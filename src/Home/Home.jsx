import Footer from './Components/Footer';
import HeaderAppBar from './Components/HeaderAppBar';
import HomeBody from './Components/HomeBody/HomeBody';


function Home({lightObj}) {
  return ( 
  <>
    <HeaderAppBar lightObj={lightObj} position="fixed" />
    <HomeBody />
    <Footer />
  </> 
  );
}

export default Home;