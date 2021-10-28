import React from 'react';
import {Link} from 'react-router-dom';

const Links = (props) => {
   return (
      <Link to={props.linkName} className={`text-capitalize ${props.linkClassName}`}>
         {props.linkTitle}
      </Link>
   );
};

const Files = (props) => {
   return (
      <a href={props.fileName} className={`text-capitalize ${props.fileClassName}`} download>
         {props.fileTitle}
      </a>
   );
};

const Button = ({type, ...props}) => {
   return (
      <button className="">
         {type === 'link' && <Links {...props} />}
         {type === 'file' && <Files {...props} />}
      </button>
   );
};

export default Button;
