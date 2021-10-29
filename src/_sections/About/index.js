import React from 'react';
import {MDBContainer, MDBRow} from 'mdb-react-ui-kit';
import Title from '../../_components/Title';
import {aboutDesc} from '../../_helpers/routes';
import Button from '../../_components/Button';
import './index.scss';

import cv from '../../_assets/GoodnewsOgechukwuIke.pdf';
import aboutImg from '../../_assets/images/goodnews-5.png';

const About = () => {
   return (
      <MDBContainer fluid className="__about p-0 position-relative">
         <div className="about-bg"></div>
         <MDBContainer className="__container h-100 p-0">
            <MDBRow className="m-0 py-md-5 py-3 px-5 inner h-100 w-100 d-flex align-items-center justify-content-center">
               <div className="col-md-7 p-0 col-sm-12">
                  <article className="inner about-img ps-md-5 ps-0 ms-md-5 ms-0 position-relative">
                     <div className="position-absolute img h-100 w-100">
                        <img src={aboutImg} alt="About img" className="h-100 w-100" />
                     </div>
                  </article>
               </div>
               <div className="col-md-5 p-0 col-12">
                  <article className="about-me d-flex pe-5 flex-column align-items-start">
                     <Title heading="about me" desc="Who I am" />
                     {aboutDesc.map((props) => (
                        <p key={props.id} className="py-2">
                           {props.paragraph}
                        </p>
                     ))}
                     <Button btnClassName="my-3 download_btn" type="file" fileClassName="download_cv" fileName={cv} fileTitle="download cV" />
                  </article>
               </div>
            </MDBRow>
         </MDBContainer>
      </MDBContainer>
   );
};

export default About;
