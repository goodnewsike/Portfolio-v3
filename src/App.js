import React from 'react';
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

   return (
      <>
         {/* <Loader /> */}
         <ScrollToTop />
         <MDBContainer fluid className="main-container h-100 p-0">
            <MDBRow className="m-0 g-0">
               <Navbar />
               <Switch>
                  <Route exact path="/" component={Home} />
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
