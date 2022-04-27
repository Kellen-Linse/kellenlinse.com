import { useState } from 'react';
import Home from './Home/Home';
import WelcomeScreen from './WelcomeScreen/WelcomeScreen';

function Main() {
  const [welcome, setWelcome] = useState(true);

  return <>{welcome ? <WelcomeScreen setWelcome={setWelcome} /> : <Home />}</>;
}

export default Main;
