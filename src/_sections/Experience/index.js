import React, {useState} from 'react';
import {MDBContainer, MDBRow} from 'mdb-react-ui-kit';
import Title from '../../_components/Title';
import classNames from 'classnames';
import {experienceLists} from '../../_helpers/routes';
import './index.scss';

const Experience = () => {
   const [active, setActive] = useState(0);
   const {id, title, company, duration, desc} = experienceLists[active];
   return (
      <MDBContainer fluid className="__experience p-0">
         <MDBContainer className="p-0 __container h-100 d-flex align-items-center justify-content-center flex-column">
            <Title className="align-items-center pb-4 title" heading="my experience" desc="Where I've worked" />
            <MDBRow className="m-0 inner d-flex align-items-start justify-content-center">
               <div className="col-md-3 p-0">
                  <ul className="tabs">
                     {experienceLists.map((itm, i) => (
                        <li
                           key={i}
                           onClick={() => setActive(i)}
                           className={classNames('list text-capitalize', {
                              active: i === active,
                           })}>
                           {itm.company}
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="col-md-9 p-0">
                  <div key={id} className="description">
                     <h4 className="">
                        {title}
                        <span className=""> @ {company}</span>
                     </h4>
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
            </MDBRow>
         </MDBContainer>
      </MDBContainer>
   );
};

export default Experience;
