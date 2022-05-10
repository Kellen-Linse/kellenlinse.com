import styled from '@emotion/styled';
import About from './About/About';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';

 /* 
  *   Creates a component that is the same size as the appbar
  *   To offset the body from being hidden behind. 
  */
const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function HomeBody() {

  return (
    <>
      <Offset id='top' />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
}

export default HomeBody;
