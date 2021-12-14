import React, {useRef} from 'react';
import {MDBContainer, MDBRow} from 'mdb-react-ui-kit';
import {Element} from 'react-scroll';
import Title from '../../_components/Title';
import Button from '../../_components/Button';
import useOnScreen from '../../_components/useOnScreen';
import {aboutDesc /*techStack*/} from '../../_helpers/routes';
import './index.scss';
// import Links from '../../_components/Links';

import cv from '../../_assets/GoodnewsOgechukwuIke.pdf';
import aboutImg from '../../_assets/images/goodnews-5.png';

const About = (props) => {
   const aboutImgRef = useRef();
   const visible = useOnScreen(aboutImgRef, '-100px');

   return (
      <Element name="about">
         <MDBContainer fluid className="__about p-0 py-3 position-relative section">
            <div className="about-bg"></div>
            <MDBContainer className="__container h-100 p-0">
               <MDBRow className="m-0 py-md-5 py-3 px-lg-5 px-md-0 px-0 inner h-100 w-100 d-flex align-items-center">
                  <div className="col-md-7 col-sm-12 p-0">
                     <article className="inner img-wrapper ps-lg-5 ps-md-0 ps-0 ms-lg-5 ms-md-0 ms-0 position-relative">
                        <div ref={aboutImgRef} className={`img ${visible ? 'visible' : 'invisible'}`}>
                           {visible && <img src={aboutImg} alt="About img" className="h-100 w-100" />}
                        </div>
                     </article>
                  </div>
                  <div className="col-md-5 col-sm-12 p-0 py-md-0 py-4">
                     <article className="about-me d-flex pe-lg-5 pe-md-0 pe-0 px-md-0 px-0 flex-column align-items-start">
                        <Title heading="about me" desc="Who I am" />
                        {aboutDesc.map((props) => (
                           <p key={props.id} className="py-2 mb-2">
                              {props.paragraph}
                           </p>
                        ))}
                        {/* <p className="">I'm proficient with the following technologies:</p>
                     <Links
                        linksClass="ul-class mb-3 mt-4 d-flex flex-wrap align-items-center"
                        liClass="flex-column mb-3 mx-2 h-100"
                        data={techStack}
                     /> */}
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
