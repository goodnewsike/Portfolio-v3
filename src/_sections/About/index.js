import React, {useRef} from 'react';
import {MDBContainer, MDBRow} from 'mdb-react-ui-kit';
import {Element} from 'react-scroll';
import Title from '../../_components/Title';
import Button from '../../_components/Button';
import useOnScreen from '../../_components/useOnScreen';
import {aboutDesc} from '../../_helpers/routes';
import './index.scss';

import cv from '../../_assets/GoodnewsOgechukwuIke.pdf';
import aboutImg from '../../_assets/images/goodnews-5.png';

const About = (props) => {
   const aboutImgRef = useRef();
   const visibleImg = useOnScreen(aboutImgRef, '-200px');

   // const descRef = useRef();
   // const visibleDesc = useOnScreen(descRef, '-200px');
   // const visibleTitle = useOnScreen(descRef, '-200px');
   // const visibleBtn = useOnScreen(descRef, '-200px');

   return (
      <Element name="about">
         <MDBContainer fluid className="__about p-0 py-3 position-relative section">
            <div className="about-bg"></div>
            <MDBContainer className="__container h-100 p-0">
               <MDBRow className="m-0 py-md-5 py-3 px-lg-5 px-md-0 px-0 inner h-100 w-100 d-flex align-items-center">
                  <div ref={aboutImgRef} className="col-md-7 col-sm-12 p-0">
                     <article className="inner img-wrapper ps-lg-5 ps-md-0 ps-0 ms-lg-5 ms-md-0 ms-0 position-relative">
                        <div className={`img ${visibleImg ? 'visible' : 'invisible'}`}>
                           {visibleImg && <img src={aboutImg} alt="About img" className="h-100 w-100" />}
                        </div>
                     </article>
                  </div>
                  <div ref={aboutImgRef} className="col-md-5 col-sm-12 p-0 py-md-0 py-4">
                     <article className="about-me d-flex pe-lg-5 pe-md-0 pe-0 px-md-0 px-0 flex-column align-items-start">
                        {visibleImg && <Title heading="about me" desc="Who I am" />}
                        {aboutDesc.map((props) => (
                           <p key={props.id} className="py-2 mb-2">
                              {visibleImg && props.paragraph}
                           </p>
                        ))}
                        {visibleImg && (
                           <Button btnClassName="mt-3 download_btn" type="file" fileClassName="download_cv" fileName={cv} fileTitle="download cV" />
                        )}
                     </article>
                  </div>
               </MDBRow>
            </MDBContainer>
         </MDBContainer>
      </Element>
   );
};

export default About;
