import React from 'react';
import './index.scss';

const Title = ({heading, desc, className}) => {
   return (
      <div className={`heading d-flex flex-column ${className}`}>
         <div className="desc">{desc}</div>
         <div className="title pt-2 pb-3 d-flex align-items-end">
            <div className="dots mb-2 me-2 d-flex align-items-end">
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
