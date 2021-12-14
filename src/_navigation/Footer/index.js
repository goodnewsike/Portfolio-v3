import React from 'react';
import {MDBContainer, MDBRow} from 'mdb-react-ui-kit';
import SocialLinks from '../../_components/SocialLinks';
import './index.scss';

function Footer() {
   return (
      <MDBContainer fluid className="__footer p-0 py-5 position-relative">
         <MDBContainer className="p-0 __container h-100 d-flex align-items-center justify-content-center">
            <MDBRow className="m-0 inner w-100">
               <div className="d-flex align-items-center justify-content-between">
                  <p className="text-capitalize">&copy; Ike Goodnews O. {new Date().getFullYear()}</p>
                  <SocialLinks socialClass="social-links" linksClass="links" />
               </div>
            </MDBRow>
         </MDBContainer>
      </MDBContainer>
   );
}

export default Footer;
