import { useState } from 'react';
import Home from './Home/Home';
import WelcomeScreen from './WelcomeScreen/WelcomeScreen';

function Main({ lightObj }) {
  // Holds state of welcome screen
  const [welcome, setWelcome] = useState(false); // Change to true when not working on Home

  return (
    <>
      {welcome ? (
        <WelcomeScreen setWelcome={setWelcome} />
      ) : (
        <Home lightObj={lightObj} setWelcome={setWelcome} />
      )}
    </>
  );
}

export default Main;
