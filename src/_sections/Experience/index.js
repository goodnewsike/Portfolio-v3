import React, {useState} from 'react';
import {MDBContainer, MDBRow} from 'mdb-react-ui-kit';
import {Element} from 'react-scroll';
import Title from '../../_components/Title';
import classNames from 'classnames';
import {experienceLists} from '../../_helpers/routes';
import './index.scss';

const Experience = () => {
   const [active, setActive] = useState(0);
   const {id, title, company, duration, desc} = experienceLists[active];

   return (
      <Element name="experience">
         <MDBContainer fluid className="__experience p-0 py-5">
            <MDBContainer className="p-0 __container py-5 mb-5 h-100 d-flex align-items-center justify-content-center flex-column">
               <Title className="align-items-center pb-4 title" heading="my experience" desc="Where I've worked" />
               <div className="m-0 inner d-flex align-items-start justify-content-center">
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
                  <div key={id} className="description">
                     <h4 className="mb-2">{title}</h4>
                     <span className="p-1"> @ {company}</span>
                     <p className="pt-2 pb-4">{duration}</p>
                     <ul className="">
                        {desc.map((item) => (
                           <li key={item.id} className="py-1 ps-4 mb-3">
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
