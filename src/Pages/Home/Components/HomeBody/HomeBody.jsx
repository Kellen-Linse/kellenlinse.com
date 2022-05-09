import styled from '@emotion/styled';
import About from './About/About';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';

import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import particlesOptions from '../../../WelcomeScreen/particles.json';


 /* 
  *   Creates a component that is the same size as the appbar
  *   To offset the body from being hidden behind. 
  */
const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function HomeBody() {

  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <>
      <Particles options={ particlesOptions } init={ particlesInit } />
      <Offset id='top' />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
}

export default HomeBody;
