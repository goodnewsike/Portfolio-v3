import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import useOnScreen from '../../_components/useOnScreen';
import {Fade, Zoom} from 'react-reveal';

const Project = (props) => {
   const projectsRef = useRef();
   const visible = useOnScreen(projectsRef, '-150px');

   return (
      <article ref={projectsRef} key={props.id} className="row m-0 my-5 px-md-3 content align-items-center justify-content-center">
         {visible && (
            <Zoom duration={2500}>
               <div
                  className={
                     props.id % 2 === 0
                        ? `project-img position-relative col-md-6 col-12 p-0 ms-md-n5 order-2`
                        : 'project-img position-relative col-md-6 col-12 p-0 me-md-n5'
                  }>
                  <a href={props.extUrl}>
                     <div className="img-layer position-absolute"></div>
                     {props.image && <img src={props.image} className="" alt="" />}
                  </a>
               </div>
            </Zoom>
         )}
         {visible && (
            <div
               className={
                  props.id % 2 === 0 ? 'project-info col-md-6 col-12 p-0 me-md-n5 ms-0 order-1' : 'project-info col-md-6 col-12 p-0 ms-md-n5 ms-0'
               }>
               <Fade top duration={2500}>
                  <>
                     <span className="text-capitalize project-number">Featured Project</span>
                     <h4 className="text-capitalize pb-3">
                        <a href={props.extUrl}>{props.title || 'default title'}</a>
                     </h4>
                  </>
               </Fade>
               {/* <Zoom duration={2500}> */}
               <div className="project-desc px-3 py-4">{props.description}</div>
               {/* </Zoom> */}
               <div className="project-stack py-2">
                  {props.stack &&
                     props.stack.map((item) => {
                        return (
                           <Fade bottom duration={2500}>
                              <span key={item.id} className={props.id % 2 === 0 ? `d-inline-block pe-3` : 'd-inline-block ps-3'}>
                                 {item.title}
                              </span>
                           </Fade>
                        );
                     })}
               </div>
               <div className="project-links mt-1">
                  <Fade bottom duration={2500}>
                     <>
                        <a href={props.githubLink} className={props.id % 2 === 0 ? `ms-md-0 ms-3` : 'ms-sm-3 me-4'}>
                           {props.githubIcon}
                        </a>
                        <a href={props.extUrl} className={props.id % 2 === 0 ? `ms-4` : 'me-0'}>
                           {props.extUrlIcon}
                        </a>
                     </>
                  </Fade>
               </div>
            </div>
         )}
      </article>
   );
};

Project.propTypes = {
   image: PropTypes.object.isRequired,
   title: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
   githubLink: PropTypes.string.isRequired,
   extUrl: PropTypes.string.isRequired,
   stack: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Project;
