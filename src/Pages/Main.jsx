import { useState } from 'react';
import Home from './Home/Home';
import WelcomeScreen from './WelcomeScreen/WelcomeScreen';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import particlesOptions from './Particles/particles.json';
import { FadeIn } from '../Effects/FadeIn';

function Main({ lightObj }) {
  // Holds state of welcome screen
  const [welcome, setWelcome] = useState(true); // Change to true when not working on Home
  // Sets up particles
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <>
      <FadeIn duration={6}>
        <Particles options={particlesOptions} init={particlesInit} />
      </FadeIn>
      {welcome ? (
        <WelcomeScreen setWelcome={setWelcome} />
      ) : (
        <FadeIn duration={3}>
          <Home lightObj={lightObj} setWelcome={setWelcome} />
        </FadeIn>
      )}
    </>
  );
}

export default Main;
