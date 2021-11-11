import React from 'react';

const OtherProjects = (props) => {
   return (
      <>
         <div key={props.id} className="col-md-4 col-12 mb-md-5 mb-3">
            <a href="!#" className="">
               <div className="inner position-relative">
                  <div className="img">
                     <img src={props.projectImg} alt="" className="" />
                  </div>
                  <div className="description h-100 p-4 position-absolute d-flex align-items-center justify-content-center">
                     <div className="position-relative">
                        <h5 className="title pb-2 text-capitalize">project title</h5>
                        <p className="pt-2 pb-3">{props.description}</p>
                        <div className="project-stack pb-4 d-flex align-items-center">
                           {props.stack.map((item) => (
                              <span key={item.id} className="stack me-2">
                                 {item.name}
                              </span>
                           ))}
                        </div>
                        <div className="icons">
                           <a href={props.githubLink} className="me-4">
                              {props.githubIcon}
                           </a>
                           <a href={props.extUrl} className="">
                              {props.extIcon}
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </a>
         </div>
      </>
   );
};

export default OtherProjects;
