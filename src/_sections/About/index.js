import React from 'react';
import {MDBContainer, MDBRow} from 'mdb-react-ui-kit';
import Title from '../../_components/Title';
import {aboutDesc} from '../../_helpers/routes';
import Button from '../../_components/Button';
import './index.scss';

import cv from '../../_assets/GoodnewsOgechukwuIke.pdf';
import aboutImg from '../../_assets/images/goodnews-5.png';
import block1 from '../../_assets/images/goodnews-6.jpg';
import block2 from '../../_assets/images/goodnews-7.jpg';
import block3 from '../../_assets/images/goodnews-5.png';
// import block2 from '../../_assets/images/goodnews-7.jpg';

const About = () => {
   return (
      <MDBContainer fluid className="__about p-0 position-relative">
         <div className="about-bg"></div>
         <MDBContainer className="__container h-100 p-0">
            <MDBRow className="m-0 py-md-5 py-3 px-5 inner h-100 w-100 d-flex align-items-center justify-content-center">
               <div className="col-md-7 p-0 col-sm-12">
                  <article className="images row m-0 d-flex align-items-center justify-content-center">
                     <div className="col-md-6 p-2 col-12 block block-1 mt-n4">
                        <div className="img">
                           <img src={block2} alt="" className="" />
                        </div>
                     </div>
                     <div className="col-md-6 p-2 col-12 d-flex flex-column">
                        <div className="block block-2 p-2">
                           <div className="img">
                              <img src={block1} alt="" className="" />
                           </div>
                        </div>
                        <div className="block block-3 p-2">
                           <div className="img">
                              <img src={block3} alt="" className="" />
                           </div>
                        </div>
                     </div>
                  </article>
                  {/* <article className="inner ms-md-5 ms-0 about-img position-relative">
                     <div className="position-absolute img h-100 w-100">
                        <img src={aboutImg} alt="About img" className="h-100 w-100" />
                     </div>
                  </article> */}
               </div>
               <div className="col-md-5 p-0 col-12">
                  <article className="about-me d-flex pe-5 flex-column align-items-start">
                     <Title heading="about me" desc="Who I am" />
                     {aboutDesc.map((props) => (
                        <p key={props.id} className="py-2">
                           {props.paragraph}
                        </p>
                     ))}
                     <Button type="file" fileClassName="download_cv" fileName={cv} fileTitle="download cV" />
                     {/* <Button type="link" linkClassName="link" linkName="/projects" linkTitle="Projects" /> */}
                  </article>
                  {/* <article className="inner about-desc py-md-3 py-4 pe-md-5 pe-1 ps-md-0 ps-2">
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
                  </article> */}
               </div>
            </MDBRow>
         </MDBContainer>
      </MDBContainer>
   );
};

export default About;
