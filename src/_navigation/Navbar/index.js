import React, {useCallback, useState} from 'react';
import classNames from 'classnames';
import {Fade, Zoom} from 'react-reveal';
import {MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBCollapse} from 'mdb-react-ui-kit';
import {Divider} from '@material-ui/core';
import {useLocationCode} from '../../_helpers/hooks';
import MenuButton from '../../_components/MenuButton';
import {navbarLinks} from '../../_helpers/routes';
import './index.scss';
// import scrollDirection from '../../_components/UseScroll';
// import {useScrollPosition} from '@n8tb1t/use-scroll-position';

import cv from '../../_assets/GoodnewsOgechukwuIke.pdf';

function Navbar() {
   const code = useLocationCode();
   const [showBasic, setShowBasic] = useState(false);
   const pageName = useCallback(() => {
      switch (code) {
         case 1:
            return 'Home';
         case 2:
            return 'Projects';
         default:
            return '';
      }
   }, [code]);

   const styles = {
      active: {
         visibility: 'visible',
         transition: 'all 0.5s',
      },
      hidden: {
         visibility: 'hidden',
         transition: 'all 0.5s',
         transform: 'translateY(-100%)',
      },
   };

   // const [hidden, setHidden] = useState(code === 1 ? true : false);
   // useScrollPosition(
   //    ({currPos}) => {
   //       setState((prev) => ({...prev, position: currPos.y}));
   //       if (code === 1) {
   //          setHidden(currPos.y < 25 ? true : false);
   //       }
   //    },
   //    [code],
   //    false,
   //    true,
   //    100,
   // );

   // useEffect(() => {
   //    if (code !== 1) {
   //       hidden && setHidden(false);
   //    } else {
   //       state.position < 25 && !hidden && setHidden(true);
   //    }

   //    setState((prev) => ({
   //       ...prev,
   //       activeLink: code,
   //    }));
   // }, [code, hidden, state.position]);

   return code !== 3 ? (
      <MDBNavbar
         className="__nav"
         // style={scrollDirection === 'down' ? styles.active : styles.hidden}
         expand="xl">
         <MDBContainer className="__container">
            <Zoom duration={2500} delay={500}>
               <MDBNavbarBrand href="#" className="__nav-brand px-2 pb-2 d-flex align-items-center justify-content-center">
                  <span className="">G</span>
               </MDBNavbarBrand>
            </Zoom>

            {/* {showBasic && <span className="d-xl-none page_name">{pageName}</span>} */}

            <MDBNavbarToggler
               aria-controls="navbarSupportedContent"
               aria-expanded="false"
               aria-label="Toggle navigation"
               onClick={() => setShowBasic((showBasic) => !showBasic)}>
               {/* <MDBIcon icon="bars" fas /> */}
               <MenuButton open={showBasic} className="__nav-toggle-icon" />
            </MDBNavbarToggler>

            <MDBCollapse className="w-auto __collapse" navbar show={showBasic}>
               <Divider className="d-xl-none nav_divider" />

               <MDBNavbarNav tag="div" className="__navbar ms-auto w-auto mb-2 mb-lg-0 position-relative">
                  {navbarLinks.map((links, i) => (
                     <MDBNavbarItem className="me-2" key={i}>
                        <Fade left duration={2500} delay={500}>
                           <MDBNavbarLink
                              href={links.url}
                              className={classNames('__nav-links', {
                                 active: code === links.activeLink,
                              })}>
                              {links.name}
                           </MDBNavbarLink>
                        </Fade>
                     </MDBNavbarItem>
                  ))}
                  <Fade left duration={2000} delay={1000}>
                     <MDBNavbarItem className="">
                        <MDBNavbarLink download href={cv} className="__nav-links px-3 download text-capitalize">
                           download cv
                        </MDBNavbarLink>
                     </MDBNavbarItem>
                  </Fade>
               </MDBNavbarNav>
            </MDBCollapse>
         </MDBContainer>
      </MDBNavbar>
   ) : null;
}

export default Navbar;
