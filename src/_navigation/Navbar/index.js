import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import {MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem, MDBCollapse} from 'mdb-react-ui-kit';
import UseScrollDirection from '../../_components/UseScrollDirection';
import {useLocationCode} from '../../_helpers/hooks';
import MenuButton from '../../_components/MenuButton';
import {navbarLinks} from '../../_helpers/routes';
import Aos from 'aos';
import 'aos/dist/aos.css';
// import Button from '../../_components/Button';
import './index.scss';

// import cv from '../../_assets/GoodnewsOgechukwuIke.pdf';

function Navbar(props) {
   const code = useLocationCode();
   const [showBasic, setShowBasic] = useState(false);
   const handleShowBasic = () => {
      setShowBasic((showBasic) => !showBasic);
   };
   const hideShowBasic = () => {
      setShowBasic(false);
   };
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

   useEffect(() => {
      Aos.init({duration: 2000});
   }, []);

   return code !== 3 ? (
      <MDBNavbar className="__nav" style={scrollDirection === 'up' ? styles.active : styles.hidden} expand="xl">
         <MDBContainer className="__container">
            <MDBNavbarBrand data-aos="fade-left" href="#" className="__nav-brand px-2 pb-2 d-flex align-items-center justify-content-center">
               <span className="">G</span>
            </MDBNavbarBrand>

            <MDBNavbarToggler aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={handleShowBasic}>
               <MenuButton open={showBasic} className="__nav-toggle-icon" />
            </MDBNavbarToggler>

            <MDBCollapse className={showBasic ? 'w-auto __collapse __collapse-screen' : 'w-auto __collapse'} navbar show={showBasic}>
               <MDBNavbarNav tag="div" className="__navbar ms-auto w-auto mb-2 mb-lg-0 d-flex align-items-center position-relative">
                  {navbarLinks.map((links, i) => (
                     <MDBNavbarItem className="me-3" key={i}>
                        <Link
                           data-aos="fade-right"
                           to={{
                              pathname: links.pathname,
                              state: {
                                 section: links.section,
                                 tab: links.tab,
                              },
                           }}
                           // onClick={props.onClick}
                           onClick={hideShowBasic}
                           className={classNames('__nav-links', {
                              active: code === links.tab,
                           })}>
                           {links.name}
                        </Link>
                     </MDBNavbarItem>
                  ))}
                  {/* <Fade left duration={2000} delay={1000}>
                     <Button btnClassName="align-middle download_btn" type="file" fileClassName="download_cv" fileName={cv} fileTitle="download cV" />
                  </Fade> */}
               </MDBNavbarNav>
            </MDBCollapse>
         </MDBContainer>
      </MDBNavbar>
   ) : null;
}

export default Navbar;
