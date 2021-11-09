import React from 'react';

const OtherProjects = (props) => {
   return (
      <>
         <div key={props.id} className="col-md-4 col-12 mb-md-5">
            <div className="inner position-relative">
               <div className="img">
                  <img src={props.projectImg} alt="" className="" />
               </div>
               <div className="description position-absolute">
                  <div className="d-flex align-items-center">
                     {props.stack.map((item) => (
                        <span key={item.id} className="stack">
                           {item.name}
                        </span>
                     ))}
                  </div>
                  <p className="">{props.description}</p>
                  <div className="icons">
                     <a href={props.githubLink} className="">
                        {props.githubIcon}
                     </a>
                     <a href={props.extUrl} className="">
                        {props.extIcon}
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default OtherProjects;
