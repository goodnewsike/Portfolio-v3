import React from 'react';
import {MDBContainer} from 'mdb-react-ui-kit';
import './index.scss';
import Hero from '../../_sections/Hero';
import About from '../../_sections/About';
import Experience from '../../_sections/Experience';
import Project from '../../_sections/Project';
import Contact from '../../_sections/Contact';

function Home() {
   return (
      <MDBContainer fluid className="home p-0">
         <MDBContainer className="inner p-0">
            <Hero />
            <About />
            <Experience />
            <Project />
            <Contact />
         </MDBContainer>
      </MDBContainer>
   );
}

export default Home;
