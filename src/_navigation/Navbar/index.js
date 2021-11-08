import React, {useState} from 'react';
import classNames from 'classnames';
import {Fade, Zoom} from 'react-reveal';
import {MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBCollapse} from 'mdb-react-ui-kit';
import UseScrollDirection from '../../_components/UseScrollDirection';
import {Divider} from '@material-ui/core';
import {useLocationCode} from '../../_helpers/hooks';
import MenuButton from '../../_components/MenuButton';
import {navbarLinks} from '../../_helpers/routes';
import Button from '../../_components/Button';
import './index.scss';

import cv from '../../_assets/GoodnewsOgechukwuIke.pdf';

function Navbar() {
   const code = useLocationCode();
   const [showBasic, setShowBasic] = useState(false);
   const scrollDirection = UseScrollDirection('down');
   const styles = {
      active: {
         visibility: 'visible',
         transition: 'all 0.5s',
         // background: 'rgba(0, 0, 0, 0.5)',
      },
      hidden: {
         visibility: 'hidden',
         transition: 'all 0.5s',
         transform: 'translateY(-100%)',
      },
   };

   return code !== 3 ? (
      <MDBNavbar className="__nav" style={scrollDirection === 'up' ? styles.active : styles.hidden} expand="xl">
         <MDBContainer className="__container">
            <Zoom duration={2500} delay={500}>
               <MDBNavbarBrand href="#" className="__nav-brand px-2 pb-2 d-flex align-items-center justify-content-center">
                  <span className="">G</span>
               </MDBNavbarBrand>
            </Zoom>

            <MDBNavbarToggler
               aria-controls="navbarSupportedContent"
               aria-expanded="false"
               aria-label="Toggle navigation"
               onClick={() => setShowBasic((showBasic) => !showBasic)}>
               <MenuButton open={showBasic} className="__nav-toggle-icon" />
            </MDBNavbarToggler>

            <MDBCollapse className="w-auto __collapse" navbar show={showBasic}>
               <Divider className="d-xl-none nav_divider" />

               <MDBNavbarNav tag="div" className="__navbar ms-auto w-auto mb-2 mb-lg-0 d-flex align-items-center position-relative">
                  {navbarLinks.map((links, i) => (
                     <MDBNavbarItem className="me-1" key={i}>
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
                     <Button btnClassName="align-middle download_btn" type="file" fileClassName="download_cv" fileName={cv} fileTitle="download cV" />
                  </Fade>
               </MDBNavbarNav>
            </MDBCollapse>
         </MDBContainer>
      </MDBNavbar>
   ) : null;
}

export default Navbar;
