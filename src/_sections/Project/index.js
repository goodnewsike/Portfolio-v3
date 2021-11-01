import React from 'react';
import {MDBContainer, MDBRow} from 'mdb-react-ui-kit';
import Title from '../../_components/Title';
import './index.scss';

const Projects = () => {
   return (
      <MDBContainer fluid className="__projects p-0 position-relative">
         <MDBContainer className="p-0 __container h-100 d-flex align-items-center justify-content-center position-relative">
            <MDBRow className="m-0 inner w-100">
               <Title className="align-items-center pb-4 title" heading="my projects" desc="What I've worked on" />
               projects
            </MDBRow>
         </MDBContainer>
      </MDBContainer>
   );
};

export default Projects;
