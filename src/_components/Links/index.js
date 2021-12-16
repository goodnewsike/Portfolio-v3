import React from 'react';
import {Fade} from 'react-reveal';
import {Link} from 'react-router-dom';

const Links = (props) => {
   return (
      <Fade top cascade duration={2500}>
         <ul className={props.linksClass}>
            {props.data.map((item) => {
               return (
                  <li key={item.id} className={`d-flex align-items-center justify-content-center ${props.liClass && props.liClass}`}>
                     {item.url && (
                        <Link to={item.url} className="d-flex align-items-center justify-content-center">
                           {item.icon}
                        </Link>
                     )}
                     {item.stackIcon && <div className="icon d-flex align-items-center justify-content-center">{item.stackIcon}</div>}
                     {item.stackName && <span className="mt-2">{item.stackName}</span>}
                  </li>
               );
            })}
         </ul>
      </Fade>
   );
};

export default Links;
