import React, {useCallback, useState} from 'react';
import {useLocationCode} from '../../_helpers/hooks';
import classNames from 'classnames';
// import {useScrollPosition} from '@n8tb1t/use-scroll-position';
import {
   MDBContainer,
   MDBNavbar,
   MDBNavbarBrand,
   MDBNavbarToggler,
   MDBNavbarNav,
   MDBNavbarItem,
   MDBNavbarLink,
   MDBCollapse,
   // MDBIcon,
   // MDBBtn,
   // MDBDropdown,
   // MDBDropdownToggle,
   // MDBDropdownMenu,
   // MDBDropdownItem,
   // MDBDropdownLink,
} from 'mdb-react-ui-kit';
import {Divider} from '@material-ui/core';
import MenuButton from '../../_components/MenuButton';
import './index.scss';
import {navbarLinks} from '../../_helpers/routes';

function Navbar() {
   const code = useLocationCode();
   const [showBasic, setShowBasic] = useState(false);
   // const [state, setState] = useState({
   //    open: false,
   //    activeLink: code,
   //    position: 0,
   // });
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
      <MDBNavbar className="__nav" expand="xl" light>
         <MDBContainer className="__container">
            <MDBNavbarBrand className="__nav-brand">&lt;Goodnews /&gt;</MDBNavbarBrand>

            {showBasic && <span className="d-xl-none page_name">{pageName}</span>}

            <MDBNavbarToggler
               aria-controls="navbarSupportedContent"
               aria-expanded="false"
               aria-label="Toggle navigation"
               onClick={() => setShowBasic((showBasic) => !showBasic)}>
               {/* <MDBIcon icon="bars" fas /> */}
               <MenuButton open={showBasic} className="__nav-toggle-icon" />
            </MDBNavbarToggler>

            <MDBCollapse className="w-auto" navbar show={showBasic}>
               <Divider className="d-xl-none nav_divider" />
               <MDBNavbarNav tag="div" className="ms-auto w-auto mb-2 mb-lg-0 position-relative">
                  {navbarLinks.map((links, i) => (
                     <MDBNavbarItem key={i}>
                        <MDBNavbarLink
                           href={links.url}
                           className={classNames('text-capitalize', {
                              active: code === links.activeLink,
                           })}
                           // active
                        >
                           {links.name}
                        </MDBNavbarLink>
                     </MDBNavbarItem>
                  ))}
               </MDBNavbarNav>
            </MDBCollapse>
         </MDBContainer>
      </MDBNavbar>
   ) : null;
}

export default Navbar;
