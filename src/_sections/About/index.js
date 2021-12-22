import React, {useEffect, useRef} from 'react';
import {MDBContainer, MDBRow} from 'mdb-react-ui-kit';
import {Element} from 'react-scroll';
import {Fade, Zoom} from 'react-reveal';
import Title from '../../_components/Title';
import Button from '../../_components/Button';
import useOnScreen from '../../_components/useOnScreen';
import {aboutDesc} from '../../_helpers/routes';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './index.scss';

import cv from '../../_assets/GoodnewsOgechukwuIke.pdf';
import aboutImg from '../../_assets/images/goodnews-5.png';

const About = (props) => {
   const descRef = useRef();
   const visibleDesc = useOnScreen(descRef, '-100px');

   useEffect(() => {
      Aos.init({duration: 2000});
   }, []);

   return (
      <Element name="about">
         <MDBContainer fluid className="__about p-0 py-3 position-relative section">
            <div className="about-bg"></div>
            <MDBContainer className="__container h-100 p-0">
               <MDBRow className="m-0 py-md-5 py-3 px-lg-5 px-md-0 px-0 inner h-100 w-100 d-flex align-items-center">
                  <div className="col-md-7 col-sm-12 p-0">
                     <article className="inner img-wrapper ps-lg-5 ps-md-0 ps-0 ms-lg-5 ms-md-0 ms-0 position-relative">
                        <div data-aos="zoom-in" className="img">
                           <img src={aboutImg} alt="About img" className="h-100 w-100" />
                        </div>
                     </article>
                  </div>
                  {/* <div ref={descRef} className="col-md-7 col-sm-12 p-0">
                     <article className="inner img-wrapper ps-lg-5 ps-md-0 ps-0 ms-lg-5 ms-md-0 ms-0 position-relative">
                        {visibleDesc && (
                           <Zoom duration={2500}>
                              <div className="img">
                                 <img src={aboutImg} alt="About img" className="h-100 w-100" />
                              </div>
                           </Zoom>
                        )}
                     </article>
                  </div> */}
                  <div className="col-md-5 col-sm-12 p-0 py-md-0 py-4">
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
                  {/* <div ref={descRef} className="col-md-5 col-sm-12 p-0 py-md-0 py-4">
                     <article className="about-me d-flex pe-lg-5 pe-md-0 pe-0 px-md-0 px-0 flex-column align-items-start">
                        {visibleDesc && (
                           <Fade top duration={2500}>
                              <Title className={`title ${visibleDesc ? 'visible' : 'invisible'}`} heading="about me" desc="Who I am" />
                           </Fade>
                        )}
                        {visibleDesc && (
                           <Fade right duration={2500}>
                              {aboutDesc.map((props) => (
                                 <p key={props.id} className="py-2 mb-2">
                                    <span className="">{props.paragraph}</span>
                                 </p>
                              ))}
                           </Fade>
                        )}
                        {visibleDesc && (
                           <Fade right duration={2500}>
                              <Button
                                 btnClassName={`mt-3 download_btn ${visibleDesc ? 'visible' : 'invisible'}`}
                                 type="file"
                                 fileClassName="download_cv"
                                 fileName={cv}
                                 fileTitle="download cV"
                              />
                           </Fade>
                        )}
                     </article>
                  </div> */}
               </MDBRow>
            </MDBContainer>
         </MDBContainer>
      </Element>
   );
};

export default About;

// {`py-2 mb-2 ${visibleDesc ? 'visible' : 'invisible'}`}
// {`img ${visibleImg ? 'visible' : 'invisible'}`}
