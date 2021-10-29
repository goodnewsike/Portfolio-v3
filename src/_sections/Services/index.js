import React from 'react';
import {MDBContainer, MDBRow} from 'mdb-react-ui-kit';
import Title from '../../_components/Title';
import './index.scss';

const Services = () => {
   return (
      <MDBContainer fluid className="__services p-0 position-relative">
         <MDBContainer className="p-0 __container h-100 d-flex align-items-center justify-content-center position-relative">
            <MDBRow className="m-0 inner w-100">
               <Title className="align-items-center pb-5" heading="my services" desc="What I do" />
               <div className="col-md-4 col-12">
                  <div className="cards w-100"></div>
               </div>
               <div className="col-md-4 col-12">
                  <div className="cards w-100"></div>
               </div>
               <div className="col-md-4 col-12">
                  <div className="cards w-100"></div>
               </div>
            </MDBRow>
         </MDBContainer>
      </MDBContainer>
   );
};

export default Services;
