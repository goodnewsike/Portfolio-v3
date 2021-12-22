import React, {useEffect, useRef} from 'react';
import {MDBContainer, MDBRow} from 'mdb-react-ui-kit';
import {Element} from 'react-scroll';
import {Fade, Zoom} from 'react-reveal';
import Title from '../../_components/Title';
import {contactList} from '../../_helpers/routes';
import Formsy from 'formsy-react';
import CustomInput from '../../_components/CustomInput';
import useOnScreen from '../../_components/useOnScreen';
import Button from '../../_components/Button';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './index.scss';

const Contact = (props) => {
   const contactRef = useRef();
   const visible = useOnScreen(contactRef, '-100px');

   useEffect(() => {
      Aos.init({duration: 2000});
   }, []);

   return (
      <Element name="contact">
         <MDBContainer fluid className="__contact p-0 py-5 position-relative section">
            <MDBContainer className="p-0 __container h-100 d-flex flex-column align-items-center justify-content-center position-relative">
               <Title className="align-items-center pb-1 title text-uppercase" heading="contact Me" desc="Just a Click Away" />
               <h6 data-aos="zoom-in-up" className="mb-5 px-md-0 px-3 text-center">I'm available to work on your project. I'm just a click away</h6>
               <MDBRow className="m-0 inner w-100">
                  <div className="col-md-12 col-12">
                     <ul className="content w-100 d-flex align-items-center justify-content-between">
                        {contactList.map((itm) => (
                           <li data-aos="zoom-in-up" key={itm.id} className="mb-5 d-inline-flex align-items-center text-left">
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
               </MDBRow>
            </MDBContainer>
         </MDBContainer>
         {/* <MDBContainer fluid ref={contactRef} className="__contact p-0 py-5 position-relative section">
            {visible && (
               <MDBContainer className="p-0 __container h-100 d-flex flex-column align-items-center justify-content-center position-relative">
                  <Fade top duration={2500}>
                     <Title className="align-items-center pb-1 title text-uppercase" heading="contact Me" desc="Just a Click Away" />
                  </Fade>
                  <Zoom duration={2500}>
                     <h6 className="mb-5 px-md-0 px-3 text-center">I'm available to work on your project. I'm just a click away</h6>
                  </Zoom>
                  <MDBRow className="m-0 inner w-100">
                     <div className="col-md-12 col-12">
                        <ul className="content w-100 d-flex align-items-center justify-content-between">
                           <Fade bottom duration={2500}>
                              {contactList.map((itm) => (
                                 <li key={itm.id} className="mb-5 d-inline-flex align-items-center text-left">
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
                           </Fade>
                        </ul>
                     </div>
                  </MDBRow>
               </MDBContainer>
            )}
         </MDBContainer> */}
      </Element>
   );
};

export default Contact;

{
   /* <div className="col-md-7 col-12">
<Formsy className="__form py-4 px-5">
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
      className="input textarea my-1 mb-4 border-0 w-100"
      labelText="Your Message"
      labelClassName="label"
      name="message"
      placeholder="Kindly leave a message"
      textarea
      rows={5}
   />
   <Button btnClassName="my-md-3 my-1 download_btn text-capitalize" type="button" linkName="" linkClassName="download_cv">
      send message
   </Button>
</Formsy>
</div> */
}
