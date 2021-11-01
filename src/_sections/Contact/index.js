import React from 'react';
import {MDBContainer, MDBRow} from 'mdb-react-ui-kit';
import Title from '../../_components/Title';
import {contactList} from '../../_helpers/routes';
import './index.scss';

const Contact = () => {
   return (
      <MDBContainer fluid className="__contact p-0 position-relative">
         <MDBContainer className="p-0 __container h-100 d-flex flex-column align-items-center justify-content-center position-relative">
            <Title className="align-items-center pb-5 title text-uppercase" heading="contact Me" desc="Just a Click Away" />
            <MDBRow className="m-0 inner w-100">
               <div className="col-md-4 col-12">
                  <ul className="content">
                     {contactList.map((itm) => (
                        <li key={itm.id} className="mb-5 d-flex align-items-center text-left">
                           <div className="icon_wrapper d-flex align-items-center justify-content-center me-4">{itm.icon}</div>
                           <span className="">
                              {itm.email ? (
                                 <a href={`mailto:${itm.email}`} className="">
                                    {itm.email}
                                 </a>
                              ) : itm.phone ? (
                                 <a href={`tel:${itm.phone}`} className="">
                                    {itm.phone}
                                 </a>
                              ) : (
                                 itm.item
                              )}
                           </span>
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="col-md-8 col-12">
                  <div className="content">form</div>
               </div>
            </MDBRow>
         </MDBContainer>
      </MDBContainer>
   );
};

export default Contact;
