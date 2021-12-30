import React, {useEffect, useState} from 'react';
import {MDBContainer} from 'mdb-react-ui-kit';
import {Element} from 'react-scroll';
import classNames from 'classnames';
import Title from '../../_components/Title';
import {experienceLists} from '../../_helpers/routes';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './index.scss';

// import bgImg from '../../_assets/images/projects-bg.png';

const Experience = (props) => {
   const [active, setActive] = useState(0);
   const {id, title, company, duration, desc} = experienceLists[active];

   useEffect(() => {
      Aos.init({duration: 2000});
   }, []);

   return (
      <Element name="experience">
         <MDBContainer fluid className="__experience p-0 py-5 section position-relative">
            <MDBContainer className="p-0 __container py-5 mb-5 h-100 d-flex align-items-center justify-content-center flex-column">
               <Title className="align-items-center pb-4 title" heading="my experience" desc="Where I've worked" />
               <div className="row m-0 inner d-flex align-items-start justify-content-center">
                  <ul
                     data-aos="fade-up-right"
                     className="tabs col-md-3 col-12 p-0 pe-md-4 pe-0 mb-md-0 mb-4 position-relative d-flex flex-nowrap overflow-x-md-hidden overflow-x-scroll flex-md-column flex-row justify-content-start">
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
                  <div key={id} className="description col-md-9 col-12 p-0">
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
         </MDBContainer>
      </Element>
   );
};

export default Experience;
