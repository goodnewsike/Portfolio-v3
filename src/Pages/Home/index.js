import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {Element, scroller} from 'react-scroll';
import './index.scss';

import Hero from '../../_sections/Hero';
import About from '../../_sections/About';
import Experience from '../../_sections/Experience';
import Projects from '../../_sections/Project';
import Contact from '../../_sections/Contact';
import Services from '../../_sections/Services';
// import { useInView } from "react-intersection-observer";

function Home() {
   // const [sectionRef, setSectionRef] = useInView({ threshold: 0.5 });

   const {state} = useLocation();
   // const [tab, setTab] = useState(1);
   useEffect(() => {
      if ('home' === state?.section) {
         switch (state?.tab) {
            case 'hero':
               scroller.scrollTo('hero', {
                  duration: 1500,
                  delay: 100,
                  smooth: 'easeInOutQuad',
                  // offset: -58,
               });
               break;
            case 'about':
               scroller.scrollTo('about', {
                  duration: 1500,
                  delay: 100,
                  smooth: 'easeInOutQuad',
                  // offset: -58,
               });
               break;
            case 'services':
               scroller.scrollTo('services', {
                  duration: 1500,
                  delay: 100,
                  smooth: 'easeInOutQuad',
                  // offset: -58,
               });
               break;
            case 'experience':
               scroller.scrollTo('experience', {
                  duration: 1500,
                  delay: 100,
                  smooth: 'easeInOutQuad',
                  // offset: -58,
               });
               break;
            case 'projects':
               scroller.scrollTo('projects', {
                  duration: 1500,
                  delay: 100,
                  smooth: 'easeInOutQuad',
                  // offset: -58,
               });
               break;
            case 'contact':
               scroller.scrollTo('contact', {
                  duration: 1500,
                  delay: 100,
                  smooth: 'easeInOutQuad',
                  // offset: -58,
               });
               break;
            default:
               break;
         }
      }
   }, [state?.tab, state?.section]);

   return (
      <>
         <Element name="home">
            <Hero />
            <About />
            {/* <Services /> */}
            <Experience />
            <Projects />
            <Contact />
            {/* {tab === 1 && <Hero />}
            {tab === 2 && <About />}
            {tab === 3 && <Services />}
            {tab === 4 && <Experience />}
            {tab === 5 && <Projects />}
            {tab === 6 && <Contact />} */}
         </Element>
      </>
   );
}

export default Home;
