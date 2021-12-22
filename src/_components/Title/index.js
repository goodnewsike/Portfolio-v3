import React, {useEffect} from 'react';
import './index.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Title = ({heading, desc, className}) => {
   useEffect(() => {
      Aos.init({duration: 2000});
   }, []);

   return (
      <div className={`heading d-flex flex-column ${className}`}>
         <div data-aos="fade-up" className="desc">
            {desc}
         </div>
         <div data-aos="fade-up" className="title pt-2 pb-3 d-flex align-items-end">
            <div className="dots mb-2 me-4 d-flex align-items-end">
               <div className="dot dot1 me-1"></div>
               <div className="d-flex flex-column align-items-center">
                  <div className="dot dot2 mb-1"></div>
                  <div className="dot dot3"></div>
               </div>
            </div>
            <h2 className="">{heading}</h2>
         </div>
      </div>
   );
};

export default Title;
