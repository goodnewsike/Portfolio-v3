import React from 'react';
import PropTypes from 'prop-types';

const Project = (props) => {
   return (
      <article key={props.id} className="row m-0 mb-3 project">
         <div className="project-img col-md-6 col-12">
            <div className="img"></div>
            {props.image && <img className="" alt="" src={props.image} />}
         </div>
         {/* props.id === props.id % 2 || props.id === props.id % 3 ? 'project-info text' :  */}
         <div className={'project-info col-md-6 col-12'}>
            <span className="text-capitalize project-number">Featured Project</span>
            <h3 className="text-capitalize">{props.title || 'default title'}</h3>
            <p className="project-desc">
               {props.description ||
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quod voluptas nam voluptatum neque provident perspiciatis ab id. Odio dolores ipsa inventore deserunt ut maiores aliquam distinctio culpa vitae minima!'}
            </p>
            <div className="project-stack">
               {props.stack &&
                  props.stack.map((item) => {
                     return <span key={item.id}>{item.title}</span>;
                  })}
            </div>
            <div className="project-links">
               {props.githubLink && (
                  <a href={props.githubLink} className="">
                     {props.githubIcon}
                  </a>
               )}
               {props.extUrl && (
                  <a href={props.extUrl} className="">
                     {props.extUrlIcon}
                  </a>
               )}
            </div>
         </div>
      </article>
   );
};

Project.propTypes = {
   title: PropTypes.string.isRequired,
   github: PropTypes.string.isRequired,
   url: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
   image: PropTypes.object.isRequired,
   stack: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Project;
