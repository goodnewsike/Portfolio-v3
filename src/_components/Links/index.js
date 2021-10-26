import React from 'react';
import {Fade} from 'react-reveal';
import {Link} from 'react-router-dom';

const Links = ({linksClass, data}) => {
   return (
      <Fade top cascade duration={2500} delay={3000}>
         <ul className={linksClass}>
            {data.map((item) => {
               return (
                  <li key={item.id} className="d-flex align-items-center justify-content-center">
                     <Link to={item.url} className="d-flex align-items-center justify-content-center">
                        {item.icon}
                     </Link>
                  </li>
               );
            })}
         </ul>
      </Fade>
   );
};

export default Links;
