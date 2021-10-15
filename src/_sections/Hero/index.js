import React from 'react';
import {MDBRow} from 'mdb-react-ui-kit';
import './index.scss';

const Hero = () => {
   return (
      <MDBRow className="m-0 hero w-100">
         <div className="p-0 col-md-6 col-sm-12">
            <div className="inner h-100 d-flex align-items-center justify-content-center">
               <h4 className="text-capitalize">goodnews ike</h4>
            </div>
         </div>
         <div className="p-0 col-md-6 col-sm-12">
            <div className="inner h-100 d-flex align-items-center justify-content-center">image</div>
         </div>
      </MDBRow>
   );
};

export default Hero;
