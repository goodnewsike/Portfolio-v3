import React from 'react';
import './index.scss';
import Hero from '../../_sections/Hero';
import About from '../../_sections/About';
import Experience from '../../_sections/Experience';
import Projects from '../../_sections/Project';
import Contact from '../../_sections/Contact';
// import { useInView } from "react-intersection-observer";

function Home() {
   // const [sectionRef, setSectionRef] = useInView({ threshold: 0.5 });

   return (
      <>
         <Hero />
         <About />
         <Experience />
         <Projects />
         <Contact />
      </>
   );
}

export default Home;
