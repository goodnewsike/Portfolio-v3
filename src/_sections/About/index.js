import React, {useEffect} from 'react';
import {MDBContainer, MDBRow} from 'mdb-react-ui-kit';
import {Element} from 'react-scroll';
import Title from '../../_components/Title';
import Button from '../../_components/Button';
import {aboutDesc} from '../../_helpers/routes';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './index.scss';

import cv from '../../_assets/Goodnews-Ogechukwu-Ike-Resume.pdf';
import aboutImg from '../../_assets/images/goodnews-5.png';

const About = (props) => {
   useEffect(() => {
      Aos.init({duration: 2000});
   }, []);

   return (
      <Element name="about">
         <MDBContainer fluid className="__about p-0 py-3 position-relative section">
            <div className="about-bg"></div>
            <MDBContainer className="__container h-100 p-0">
               <MDBRow className="m-0 py-md-3 py-3 px-xl-3 px-lg-3 px-md-0 px-0 inner h-100 w-100 d-flex align-items-center">
                  <div className="col-lg-7 col-md-6 col-sm-12 p-0 d-flex align-items-center justify-content-center">
                     <article className="inner img-wrapper position-relative">
                        <div data-aos="zoom-in" className="img">
                           <img src={aboutImg} alt="About img" className="h-100 w-100" />
                        </div>
                     </article>
                  </div>
                  <div className="col-lg-5 col-md-6 col-sm-12 p-0 px-md-0 px-3">
                     <article className="about-me d-flex pe-lg-5 pe-md-0 pe-0 px-md-0 px-0 flex-column align-items-start">
                        <Title className="title" heading="about me" desc="Who I am" />
                        {aboutDesc.map((props) => (
                           <p data-aos="fade-up" key={props.id} className="py-2 mb-2">
                              <span className="">{props.paragraph}</span>
                           </p>
                        ))}
                        <Button btnClassName="mt-3 download_btn" type="file" fileClassName="download_cv" fileName={cv} fileTitle="download cV" />
                     </article>
                  </div>
               </MDBRow>
            </MDBContainer>
         </MDBContainer>
      </Element>
   );
};

export default About;
