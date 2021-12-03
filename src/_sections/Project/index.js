import React from 'react';
import {MDBContainer, MDBRow} from 'mdb-react-ui-kit';
import {Element} from 'react-scroll';
import Title from '../../_components/Title';
import Project from './Project';
import {otherProjects, projects} from '../../_helpers/routes';
import OtherProjects from './OtherProjects';
import './index.scss';

const Projects = () => {
   return (
      <Element name="projects">
         <MDBContainer fluid className="__projects p-0 py-5 position-relative section">
            <MDBContainer className="p-0 __container h-100 d-flex align-items-center justify-content-center position-relative">
               <MDBRow className="m-0 inner w-100">
                  <Title className="align-items-center pb-4 title" heading="my projects" desc="What I've worked on" />
                  <div className="projects-section">
                     {projects.map((p) => {
                        return <Project key={p.id} {...p} />;
                     })}
                  </div>
                  <div className="other-projects d-flex flex-column align-items-center justify-content-center position-relative">
                     <Title className="align-items-center pb-4 title" heading="other projects" desc="More on projects" />
                     <div className="row m-0 contents w-100">
                        {otherProjects.map((prop) => (
                           <OtherProjects key={prop.id} {...prop} />
                        ))}
                     </div>
                  </div>
               </MDBRow>
            </MDBContainer>
         </MDBContainer>
      </Element>
   );
};

export default Projects;
