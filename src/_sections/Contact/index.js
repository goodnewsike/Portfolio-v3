import React from 'react';
import {MDBContainer, MDBRow} from 'mdb-react-ui-kit';
import Title from '../../_components/Title';
import {contactList} from '../../_helpers/routes';
import Formsy from 'formsy-react';
import CustomInput from '../../_components/CustomInput';
import Button from '../../_components/Button';
import './index.scss';

const Contact = () => {
   return (
      <MDBContainer fluid className="__contact p-0 py-5 position-relative">
         <MDBContainer className="p-0 __container h-100 d-flex flex-column align-items-center justify-content-center position-relative">
            <Title className="align-items-center pb-1 title text-uppercase" heading="contact Me" desc="Just a Click Away" />
            <h6 className="mb-5 px-md-0 px-3 text-center">I'm available to work on your project. I'm just a click away</h6>
            <MDBRow className="m-0 inner w-100">
               <div className="col-md-5 col-12">
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
               <div className="col-md-7 col-12">
                  <Formsy className="__form py-4 px-4">
                     <CustomInput
                        type="text"
                        className="input my-1 mb-4 border-0 w-100"
                        labelText="Your Name"
                        labelClassName="label"
                        name="name"
                        placeholder="John Doe"
                     />
                     <CustomInput
                        type="email"
                        className="input my-1 mb-4 border-0 w-100"
                        labelText="Your Email Address"
                        labelClassName="label"
                        name="email"
                        placeholder="example@example.com"
                     />
                     <CustomInput
                        className="input my-1 mb-4 border-0 w-100"
                        labelText="Your Message"
                        labelClassName="label"
                        name="message"
                        placeholder="Kindly leave a message"
                        textarea
                        rows={5}
                     />
                     {/* <button className="">
                        <p className="text-capitalize">send message</p>
                     </button> */}
                     <Button btnClassName="my-3 download_btn" type="link" linkName="" linkClassName="download_cv" linkTitle="send message" />
                  </Formsy>
               </div>
            </MDBRow>
         </MDBContainer>
      </MDBContainer>
   );
};

export default Contact;
