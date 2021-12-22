import React, {useEffect, useRef} from 'react';
import useOnScreen from '../../_components/useOnScreen';
import {Fade, Zoom} from 'react-reveal';
import Aos from 'aos';
import 'aos/dist/aos.css';

const OtherProjects = (props) => {
   const otherProjectsRef = useRef();
   const visible = useOnScreen(otherProjectsRef, '-150px');

   useEffect(() => {
      Aos.init({duration: 2000});
   }, []);

   return (
      <>
         <div data-aos="zoom-in-up" key={props.id} className="col-lg-4 col-md-6 col-12 mb-md-5 mb-3">
            <a href="!#" className="">
               <div className="inner position-relative">
                  <div className="img d-flex align-items-center justify-content-center">
                     {/* {props.projectImg ? <img src={props.projectImg} alt="" className="" /> : <span className="">&lt;/&gt;</span>} */}
                     <span data-aos="zoom-in" className="text-uppercase text-center">{props.title}</span>
                  </div>
                  <div data-aos="fade-up" className="description h-100 p-4 position-absolute d-flex align-items-center justify-content-center">
                     <div className="position-relative">
                        <h5 className="title pb-2 text-capitalize">{props.title}</h5>
                        <p className="pt-2 pb-3">{props.description}</p>
                        <div className="project-stack pb-4 d-flex align-items-center">
                           {props.stack.map((item) => (
                              <span key={item.id} className="stack me-2">
                                 {item.name}
                              </span>
                           ))}
                        </div>
                        <div className="icons">
                           <>
                              <a href={props.githubLink} className="me-4">
                                 {props.githubIcon}
                              </a>
                              <a href={props.extUrl} className="">
                                 {props.extIcon}
                              </a>
                           </>
                        </div>
                     </div>
                  </div>
               </div>
            </a>
         </div>
         {/* <div ref={otherProjectsRef} key={props.id} className="col-lg-4 col-md-6 col-12 mb-md-5 mb-3">
            <a href="!#" className="">
               {visible && (
                  <Zoom duration={2500}>
                     <div className="inner position-relative">
                        <div className="img d-flex align-items-center justify-content-center">
                           <span className="text-uppercase text-center">{props.title}</span>
                        </div>
                        <Fade bottom delay={1000} duration={2500}>
                           <div className="description h-100 p-4 position-absolute d-flex align-items-center justify-content-center">
                              <div className="position-relative">
                                 <Fade bottom duration={2500}>
                                    <h5 className="title pb-2 text-capitalize">{props.title}</h5>
                                 </Fade>
                                 <Fade bottom duration={2500}>
                                    <p className="pt-2 pb-3">{props.description}</p>
                                 </Fade>
                                 <div className="project-stack pb-4 d-flex align-items-center">
                                    {props.stack.map((item) => (
                                       <Fade bottom duration={2500}>
                                          <span key={item.id} className="stack me-2">
                                             {item.name}
                                          </span>
                                       </Fade>
                                    ))}
                                 </div>
                                 <div className="icons">
                                    <Fade bottom duration={2500}>
                                       <>
                                          <a href={props.githubLink} className="me-4">
                                             {props.githubIcon}
                                          </a>
                                          <a href={props.extUrl} className="">
                                             {props.extIcon}
                                          </a>
                                       </>
                                    </Fade>
                                 </div>
                              </div>
                           </div>
                        </Fade>
                     </div>
                  </Zoom>
               )}
            </a>
         </div> */}
      </>
   );
};

export default OtherProjects;
