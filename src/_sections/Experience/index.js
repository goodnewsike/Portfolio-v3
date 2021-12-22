import React, {useEffect, useRef, useState} from 'react';
import {MDBContainer} from 'mdb-react-ui-kit';
import {Element} from 'react-scroll';
import {Fade} from 'react-reveal';
import classNames from 'classnames';
import useOnScreen from '../../_components/useOnScreen';
import Title from '../../_components/Title';
import {experienceLists} from '../../_helpers/routes';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './index.scss';

// import bgImg from '../../_assets/images/projects-bg.png';

const Experience = (props) => {
   const [active, setActive] = useState(0);
   const {id, title, company, duration, desc} = experienceLists[active];

   const experienceRef = useRef();
   const visible = useOnScreen(experienceRef, '-150px');

   useEffect(() => {
      Aos.init({duration: 2000});
   }, []);

   return (
      <Element name="experience">
         <MDBContainer fluid ref={experienceRef} className="__experience p-0 py-5 section position-relative">
            <div className="img position-absolute">{/* <img src={bgImg} alt="" className="h-100 w-100" /> */}</div>
            <MDBContainer className="p-0 __container py-5 mb-5 h-100 d-flex align-items-center justify-content-center flex-column">
               <Title className="align-items-center pb-4 title" heading="my experience" desc="Where I've worked" />
               <div className="m-0 inner d-flex align-items-start justify-content-center">
                  <ul data-aos="fade-up-right" className="tabs me-4">
                     {experienceLists.map((itm, i) => (
                        <li
                           // data-aos="fade-up-right"
                           key={i}
                           onClick={() => setActive(i)}
                           className={classNames('text-capitalize', {
                              active: i === active,
                           })}>
                           {itm.company}
                        </li>
                     ))}
                  </ul>
                  <div key={id} className="description">
                     <h4 data-aos="fade-up" className="mb-2">
                        {title}
                     </h4>
                     <span data-aos="fade-up" className="p-1">
                        @ {company}
                     </span>
                     <p data-aos="fade-up" className="pt-2 pb-4">
                        {duration}
                     </p>
                     <ul className="">
                        {desc.map((item) => (
                           <li data-aos="fade-up" key={item.id} className="py-1 ps-4 mb-3">
                              {item.activities}
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </MDBContainer>
            {/* {visible && (
               <MDBContainer className="p-0 __container py-5 mb-5 h-100 d-flex align-items-center justify-content-center flex-column">
                  <Fade top duration={2500}>
                     <Title className="align-items-center pb-4 title" heading="my experience" desc="Where I've worked" />
                  </Fade>
                  <div className="m-0 inner d-flex align-items-start justify-content-center">
                     <Fade left duration={2500}>
                        <ul className="tabs me-4">
                           {experienceLists.map((itm, i) => (
                              <li
                                 key={i}
                                 onClick={() => setActive(i)}
                                 className={classNames('text-capitalize', {
                                    active: i === active,
                                 })}>
                                 {itm.company}
                              </li>
                           ))}
                        </ul>
                     </Fade>
                     <div key={id} className="description">
                        <Fade bottom duration={2500}>
                           <h4 className="mb-2">{title}</h4>
                        </Fade>
                        <Fade bottom delay={500} duration={2500}>
                           <span className="p-1"> @ {company}</span>
                        </Fade>
                        <Fade bottom delay={1000} duration={2500}>
                           <p className="pt-2 pb-4">{duration}</p>
                        </Fade>
                        <ul className="">
                           <Fade bottom delay={1500} duration={2500}>
                              {desc.map((item) => (
                                 <li key={item.id} className="py-1 ps-4 mb-3">
                                    {item.activities}
                                 </li>
                              ))}
                           </Fade>
                        </ul>
                     </div>
                  </div>
               </MDBContainer>
            )} */}
         </MDBContainer>
      </Element>
   );
};

export default Experience;
