import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {Element, scroller} from 'react-scroll';
import './index.scss';

import Hero from '../../_sections/Hero';
import About from '../../_sections/About';
import Experience from '../../_sections/Experience';
import Projects from '../../_sections/Project';
import Contact from '../../_sections/Contact';
// import Services from '../../_sections/Services';

function Home(props) {
   const {state} = useLocation();
   useEffect(() => {
      if ('home' === state?.section) {
         switch (state?.tab) {
            case 'hero':
               scroller.scrollTo('hero', {
                  duration: 2000,
                  delay: 0,
                  smooth: 'easeInOutQuad',
                  offset: 0,
               });
               break;
            case 'about':
               scroller.scrollTo('about', {
                  duration: 2000,
                  delay: 0,
                  smooth: 'easeInOutQuad',
                  offset: 0,
               });
               break;
            case 'experience':
               scroller.scrollTo('experience', {
                  duration: 2000,
                  delay: 0,
                  smooth: 'easeInOutQuad',
                  offset: 0,
               });
               break;
            case 'projects':
               scroller.scrollTo('projects', {
                  duration: 2000,
                  delay: 0,
                  smooth: 'easeInOutQuad',
                  offset: 0,
               });
               break;
            case 'contact':
               scroller.scrollTo('contact', {
                  duration: 2000,
                  delay: 0,
                  smooth: 'easeInOutQuad',
                  offset: 0,
               });
               break;
            default:
               break;
         }
      }
   }, [state?.tab, state?.section]);

   return (
      <>
         <Element name="home" className="__home">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
         </Element>
      </>
   );
}

export default Home;
