import React from 'react';
import {MDBRow} from 'mdb-react-ui-kit';
import './index.scss';

function Footer() {
   return (
      <MDBRow className="m-0 footer">
         <div className="inner p-0">footer</div>
         {/* copyright &copy;{new Date().getFullYear()} */}
      </MDBRow>
   );
}

export default Footer;
