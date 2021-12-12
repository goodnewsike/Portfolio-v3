import React, {useRef} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {MDBContainer, MDBRow} from 'mdb-react-ui-kit';
import ScrollToTop from './_components/ScrollToTop';
// import {ThemeContext} from './_theme';
import './App.scss';

import Navbar from './_navigation/Navbar';
import Footer from './_navigation/Footer';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import NotFound from './404';

function App() {
   // const [{ themeName }] = useContext(ThemeContext);
   // {`${themeName} main-container h-100 p-0`}

   const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
   const heroReference = useRef(null);
   const aboutReference = useRef(null);
   const experienceReference = useRef(null);
   const projectsReference = useRef(null);
   const contactReference = useRef(null);

   const executeHeroRef = () => scrollToRef(heroReference);
   const executeAboutRef = () => scrollToRef(heroReference);
   const executeExperienceRef = () => scrollToRef(heroReference);
   const executeProjectsRef = () => scrollToRef(heroReference);
   const executeContactRef = () => scrollToRef(heroReference);

   const refs = {
      heroRef: heroReference,
      aboutRef: aboutReference,
      experienceRef: experienceReference,
      projectsRef: projectsReference,
      contactRef: contactReference,
   };

   const execute = {
      hero: executeHeroRef,
      about: executeAboutRef,
      experience: executeExperienceRef,
      projects: executeProjectsRef,
      contact: executeContactRef,
   };

   return (
      <>
         {/* <Loader /> */}
         <ScrollToTop />
         <MDBContainer fluid className="main-container h-100 p-0">
            <MDBRow className="m-0 g-0">
               <Navbar /*onClick={execute}*/ />
               <Switch>
                  <Route exact path="/" {...refs} component={Home} />
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/projects" component={Projects} />
                  <Route component={NotFound} />
               </Switch>
               <Footer />
            </MDBRow>
         </MDBContainer>
      </>
   );
}

export default withRouter(App);
