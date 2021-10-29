import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Links = (props) => {
   return (
      <Link
         to={props.linkName}
         onMouseEnter={props.toggleHover}
         onMouseLeave={props.toggleHover}
         className={`text-capitalize ${props.linkClassName}`}>
         {props.linkTitle} {props.icon && props.icon}
      </Link>
   );
};

const Files = (props) => {
   return (
      <a
         href={props.fileName}
         onMouseEnter={props.toggleHover}
         onMouseLeave={props.toggleHover}
         className={`text-capitalize ${props.fileClassName}`}
         download>
         {props.icon && props.icon} {props.fileTitle}
      </a>
   );
};

const Button = ({btnClassName, type, ...props}) => {
   const [hover, setHover] = useState(false);
   const toggleHover = () => {
      setHover(!hover);
   };
   return (
      <button className={btnClassName}>
         {type === 'link' && <Links toggleHover={toggleHover} {...props} />}
         {type === 'file' && <Files toggleHover={toggleHover} {...props} />}
      </button>
   );
};

export default Button;
