import React from 'react';
import {Link} from 'react-router-dom';

const Links = ({styleClass, data}) => {
   return (
      <ul className={`links ${styleClass ? styleClass : ''}`}>
         {data.map((item) => {
            return (
               <li key={item.id} className="">
                  <Link to={item.url} className="link">
                     {item.icon}
                  </Link>
               </li>
            );
         })}
         ;
      </ul>
   );
};

export default Links;
