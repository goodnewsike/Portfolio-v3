import React from 'react';
import {MDBContainer, MDBRow} from 'mdb-react-ui-kit';
import Title from '../../_components/Title';
import {aboutDesc} from '../../_helpers/routes';
import './index.scss';

import aboutImg from '../../_assets/images/goodnews-5.png';
import cv from '../../_assets/GoodnewsOgechukwuIke.pdf';

const About = () => {
   return (
      <MDBContainer fluid className="__about p-0 position-relative">
         <div className="about-bg"></div>
         <MDBContainer className="__container h-100 p-0">
            <MDBRow className="m-0 py-md-3 py-3 px-md-5 px-1 inner h-100 w-100 d-flex align-items-center justify-content-center">
               <div className="col-md-7 ps-md-5 ps-0 py-md-3 py-1 col-sm-12">
                  <div className="inner ms-md-5 ms-0 about-img position-relative">
                     <div className="position-absolute img h-100 w-100">
                        <img src={aboutImg} alt="About img" className="h-100 w-100" />
                     </div>
                  </div>
               </div>
               <div className="col-md-5 p-0 col-sm-12">
                  <div className="inner about-desc py-md-3 py-4 pe-md-5 pe-1 ps-md-0 ps-2">
                     <Title heading="about me" desc="Who I am" />
                     {aboutDesc.map((props) => (
                        <p key={props.id} className="py-2">
                           {props.paragraph}
                        </p>
                     ))}
                     <button className="mt-4">
                        <a href={cv} className="download_cv text-capitalize" download>
                           download cv
                        </a>
                     </button>
                  </div>
               </div>
            </MDBRow>
         </MDBContainer>
      </MDBContainer>
   );
};

export default About;
