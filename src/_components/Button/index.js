import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Links = (props) => {
   return (
      <Link to={props.linkName || props.to} style={props.linkStyle} className={`text-capitalize ${props.linkClassName}`}>
         {props.linkTitle} {props.icon && props.icon}
      </Link>
   );
};
const Files = (props) => {
   return (
      <a href={props.fileName} style={props.fileStyle} download className={`text-capitalize ${props.fileClassName}`}>
         {props.icon && props.icon} {props.fileTitle}
      </a>
   );
};
const Href = (props) => {
   return (
      <a href={props.href} style={props.hrefStyle} target={props.target} className={`text-capitalize ${props.hrefClassName}`}>
         {props.icon && props.icon} {props.hrefTitle}
      </a>
   );
};

const Button = ({type, ...props}) => {
   useEffect(() => {
      Aos.init({duration: 2000});
   }, []);

   return (
      <button data-aos="fade-up" type={props.btnStyle} className={props.btnClassName} onClick={props.onClick} disabled={props.disabled}>
         {type === 'link' && <Links {...props} />}
         {type === 'file' && <Files {...props} />}
         {type === 'href' && <Href {...props} />}
         {props.children}
      </button>
   );
};

export default Button;
