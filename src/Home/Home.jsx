import HeaderAppBar from './Components/HeaderAppBar';
import HomeBody from './HomeBody';


function Home({lightObj}) {
  return ( 
  <>
    <HeaderAppBar  lightObj={lightObj} position="fixed" />
    <HomeBody />
  </> 
  );
}

export default Home;